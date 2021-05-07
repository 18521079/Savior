import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {  useEffect } from "react";
import {  useState } from "react";
import axios from "axios";
import { format } from "timeago.js";


export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
    const res= await axios.get(`users/${post.userId}`);
    setUser(res.data)
    };
   
    fetchUser();
  }, [] )

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            
              <img className="shareProfileImg" src={user.profilePicture || PF + "person/noAvatar.png"}
               
              />
            
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post.img} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
               className="likeIcon"
               src={`${PF}like.png`}
              onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
            />
            <span className="postLikeCounter"> {like} người thích điều này</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> {post.comment} bình luận</span>
          </div>
        </div>
      </div>
    </div>
  );
}
