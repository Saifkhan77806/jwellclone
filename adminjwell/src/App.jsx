import { ThemeProvider } from "@material-tailwind/react";
import Navbar from "./com/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Credits from "./com/Credits";
import Post from "./com/Post";
import ApproveReview from "./com/ApproveReview";
import Userdata from "./com/Userdata";
import History from "./com/History";
import Login from "./com/Login";

import { Toaster } from "../components/ui/toaster"


function App() {
  return (
    <ThemeProvider>
      {/* <BrowserRouter> */}
        <Navbar  />
        <Routes>
       <Route path="/" element={<Credits />} />
       <Route path="/post-blog" element={<Post />} />
       <Route path="/aprov" element={<ApproveReview />} />
       <Route path="/admin" element={<Credits />} />
      <Route path='/admin/user/:email' element={<Userdata />}/>
      <Route path="/history" element={<History />}/>
      <Route path="/login" element={<Login />}/>
        </Routes>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;

// axios.get("https://admin.jewellerydekho.in/admin").then((res)=>{
//   console.log(res.data)
// }).catch((err)=>{
//   console.log(err)
// })
