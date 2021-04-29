
import "./home.css"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";

export default function Home() {
  return (
    <>
     <Topbar></Topbar>
    <div className='homeContainer'>
     
      <Sidebar></Sidebar>
      <Feed></Feed>
      <Rightbar></Rightbar>
     


      </div>
    </>
  );
}
