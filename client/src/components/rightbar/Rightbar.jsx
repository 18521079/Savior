import "./rightbar.css";
import {Users} from '../../dummyData'
import Online from '../online/Online.jsx'

export default function Rightbar() {
   
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
       
        <div className="rightbarFollowings">
         
        </div>
         </>
      );
    
  }
   return (
      <>
      <div className='rightbar'>
      <ProfileRightbar/>
        </div>
      </>
    );
  
}
