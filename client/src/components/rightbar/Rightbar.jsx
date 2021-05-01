import "./rightbar.css";
import {Users} from '../../dummyData'
import Online from '../online/Online.jsx'
import Navbar from "../layouts/Navbar";

export default function Rightbar({profile}) {
   
  const HomeRightbar = () => {
    return (
      <>
         <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Người liên hệ</h4>
        <ul className="rightbarFriendList">
        {Users.map(u=>(
        <Online key ={u.id} user={u}></Online>
      ))}

         
        </ul>
      </>
      );
  }

  const ProfileRightbar = () => {

    return (
      <>
        <h4 className="rightbarTitle">Thông tin người dùng</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">HoChiMinh</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Thu Duc</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
                Độc thân
            </span>
          </div>
        </div>
       
        <h4 className="rightbarTitle">Các chuyên gia hàng đầu</h4>
        <div className="rightbarFollowings">
        
              <div className="rightbarFollowing">
                <img
                  src="assets/person/6.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>

              <div className="rightbarFollowing">
                <img
                  src="assets/person/1.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>

              <div className="rightbarFollowing">
                <img
                  src="assets/person/4.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>

              <div className="rightbarFollowing">
                <img
                  src="assets/person/2.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>

              <div className="rightbarFollowing">
                <img
                  src="assets/person/5.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>

              <div className="rightbarFollowing">
                <img
                  src="assets/person/7.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>
           
         
       
         
        </div>
         </>
      );
    
  }
   return (
      <>
      <div className='rightbar'>
       {profile? <ProfileRightbar></ProfileRightbar>: <HomeRightbar></HomeRightbar>}
        </div>
      </>
    );
  
}
