import api from "../src/Compoonents/Api";
import axios from "axios";
import { createContext, useContext, useState, useEffect, useMemo, useLayoutEffect } from "react";

export const AuthContext = createContext();


export const Authprovider = ({ children }) => {





     const [user, setUser] = useState()
     const [tokenss, setTokenss] = useState();
     const [credit, setCredit] = useState()
     const [refresh,setRefresh] = useState(false)


     // const navigate = useNavigate()
     const [userData, setUserData] = useState()
     useLayoutEffect(() => {
          const token = localStorage.getItem("token")



          if (token != undefined || token) {
               api.post("/verify-token", { token }).then((res) => {
                    console.log("user found", res.data)
                    setUserData(res.data?.user?.id)
                    api.get(`/userid/${res.data?.user?.id?.type?.email}`).then((res) => {
                         console.log("user founded of innner api", res.data)
                         setUser(res.data)
                         setCredit(res.data.userData.credits + res.data.userData.partcredit)
			if(new Date(res.data.userData?.expires)<new Date()){
				console.log("subcription is expired", res.data.userData?.subscription)
			}else{
				console.log("subscription is valid")
			}
                         if (new Date(res.data.userData?.expires) < new Date()) {
                              if(res.data.userData?.subscription == "3"){
				   console.log("member subcription is expired")
                                   api.post("/member-null", { email: res.data.userData?.email }).then((res) => {
                                        console.log(res.data)
                                   }).catch((err) => {
                                        console.log(err, "while settting credit null")
                                   })
                              }else{
				console.log("your subscription is expired")
                                   api.post("/credit-null", { email: res.data.userData?.email }).then((res) => {
                                        console.log(res.data)
                                   }).catch((err) => {
                                        console.log(err, "while settting credit null")
                                   })
                              }
                         }
                    }).catch((err)=>{
                         console.log("user id err", err)
                        })
               }).catch((err)=>{
                    console.log(err)
               })
              }else{
               console.log("user not found")
              }
            },[credit, tokenss, setRefresh])

     const userDatas = (email) => {
          api.get(`/userid/${email}`).then((res) => {
               console.log("user", res.data)
               setUser(res.data)
               setCredit(res.data.userData.credits)

          }).catch((err) => {
               console.log("user id err", err)
          })
     }


     const storeUser = (token) => {
          console.log("this is from auth.jsx", token)
          const tokens = localStorage.getItem('token')
          if (!tokens || tokens == undefined) {
               localStorage.setItem("token", token)
               setTokenss(token)
          } else {
               console.log("token already exist")
          }
     }

     const logout = () => {
          localStorage.removeItem("token")
          setTokenss(null)
     }


     console.log("credits", credit)



     const updateCredits = (email, minus) => {
          console.log("user credits", minus)
          const creditss = user?.userData.credits - minus
          console.log(creditss)
          api.post("/update-credit", { email, credits: minus }).then((res) => {
               console.log(res.data)
               setCredit(creditss)
               console.log("from update credits", credit, creditss)
          }).catch((err) => {
               console.log("error in while updating credits", err)
          })
     }


     const refreshPage = () => {
		setRefresh(!refresh)
	}




     return <AuthContext.Provider value={{ userData, user, updateCredits, credit, userDatas, storeUser, logout, tokenss, refreshPage }}>
          {children}
     </AuthContext.Provider>

}

export const useAuth = () => {
     const authContextValue = useContext(AuthContext);
     if (!authContextValue) {
          throw new Error("UseAuth used Outside of the provider");
     }
     return authContextValue;
}

