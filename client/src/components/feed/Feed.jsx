
import "./feed.css";
import Share from '../share/Share'
import Post from "../post/Post";
import {Users} from '../../dummyData'
import {Posts} from '../../dummyData'

export default function Feed() {
  
  const user =Users.filter(u=>u.id===1)
  console.log(user[0].username)
  return (
    <div className="feed">
    <div className="feedWrapper">
      <Share></Share>
      {Posts.map(p=>(
        <Post key ={p.id} post={p}></Post>
      ))}
      
      
    </div>
  </div>
  );
}
