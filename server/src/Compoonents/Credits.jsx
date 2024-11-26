import { Button, Input } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import api from "./Api"
import { useNavigate } from 'react-router-dom';




const Credits = () => {
  const navigate = useNavigate()
  const [userdata,setUserdata] = useState()
 
  const [search, setSearch] = useState("");
  const [fliterdata, setFilterdata] = useState();

  const fetch = async() =>{
    await api.get("/getuser").then((res)=>{
      // console.log(res.data.user)
      setUserdata(res.data?.user)
    })
  }

  

  
  const inputs = (e) =>{
    const input = e.target.value;

    if(input !== ""){
      const data = userdata.filter((blog)=>{
        return blog?.email?.toLowerCase().includes(input);
      })
      setFilterdata(data);
    }else{
      setFilterdata(userdata);
    }


    setSearch(input);

  }



  useEffect(()=>{
    fetch()
  },[userdata])


  return (
    <>
    <div className='max-md:pt-[64px] max-[620px]:pt-[87px]'></div>
     <div className='w-full rounded-lg bg-gray-200'>
    <div className='flex justify-center'>
            <div className='flex gap-3 py-2 mx-auto w-[50%] max-md:w-[80%] max-sm:w-full max-sm:px-1 max-sm:py-2'>
            <input type="text" placeholder='Search user by thier email !' value={search} onChange={inputs} className='rounded-md w-[80%] py-3 indent-1 outline-none border-none poppins font-semibold shadow-md max-sm:w-[60%]'/>
            </div>
        </div>
      </div>
      <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
        {

          fliterdata ? fliterdata?.map((el,index)=>{
            return (
              <>
              <ListItem alignItems="flex-start" key={index}>
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={el?.profile} />
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                </ListItemAvatar>
                <ListItemText
                  primary={el?.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        {el?.email}
                      </Typography>
                      <br />
                      {el?.subscription ? el?.subscription : "No Subscription purchased"}
                      <br />
                      {el?.credits}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              </>
            )
          }): userdata?.map((el,index)=>{
            return (
              <>

              <ListItem alignItems="flex-start" key={index} onClick={()=>navigate(`/admin/user/${el?.email}`)}>
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={el?.profile} />
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                </ListItemAvatar>
                <ListItemText
                  primary={el?.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        {el?.email}
                      </Typography>
                      <br />
                      {el?.subscription ? el?.subscription : "No Subscription purchased"}
                      <br />
                      {el?.credits}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              </>
            )
          })

        }
    </List>
    </>
  )
}

export default Credits