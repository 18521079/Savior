
import "./feed.css";
import Share from '../share/Share'
import Post from "../post/Post";
import {Users} from '../../dummyData'
import {  useEffect } from "react";
import {  useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
    const res= await axios.get("posts/timeline/6090125098293c35547a1649");
    setPosts(res.data)
    };
   
    fetchPosts();
  }, [] )
 
  return (
    <div className="feed">
    <div className="feedWrapper">
      <Share></Share>
        {posts.map(p=>(
          <Post key ={p._id} post={p}></Post>
        ))} 
    </div>
  </div>
  );
}
