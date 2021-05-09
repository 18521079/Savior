import {Link} from 'react-router-dom';
import "./home.css"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import SearchLeft from "../../searchLeft/SearchLeft";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
     <Topbar></Topbar>
    <div style={{background:'white'}}className=''>
     
      <div className='row'>
      <div className='col-md-4'>
      <SearchLeft></SearchLeft>

      

      </div>

      <div className='col-md-7'>
      <Feed username="thong"></Feed>
      </div>

      <div style ={{ height: 'calc(100vh - 50px)',  position: 'sticky',top: '470px'}}className='col-md-1 mt150'>
      <Link to={"/messenger"}>
      <img 
      style={{width:'76px', height:'70px'}} src='images/mess.png'/>
      </Link>
      </div>

      </div>
      </div>
    </>
  );
}
