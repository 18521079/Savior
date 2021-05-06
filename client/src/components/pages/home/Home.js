
import "./home.css"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
     <Topbar></Topbar>
    <div style={{background:'white'}}className='homeContainer'>
     
      <Sidebar></Sidebar>
      <Feed></Feed>
      <Rightbar></Rightbar>


      </div>
    </>
  );
}
