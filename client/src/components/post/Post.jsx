import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {  useEffect } from "react";
import {  useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { colors } from "@material-ui/core";
import {Link} from 'react-router-dom';

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
            <Link to={`profile/${user.username}`}>
              <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"}
               
              />

            </Link>
            
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
          <span style={{marginLeft:"0px"}} className="postText ml3">{post?.desc}</span>
          <img  className="postImg" src={PF+post.img} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft ml3">
            <FavoriteBorderRoundedIcon
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
            ></FavoriteBorderRoundedIcon>
            <span className="postLikeCounter"> {like} người thích điều này</span>
          </div>
          <div className="postBottomRight">
          <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
            <span className="postCommentText"> {post.comment} bình luận</span>
          </div>
        </div>
      </div>
    </div>
  );
}
