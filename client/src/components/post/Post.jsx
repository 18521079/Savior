import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {Users} from '../../dummyData'
import {useState} from 'react'

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            
              <img className="shareProfileImg" src={Users.filter((u)=>u.id===post.userId)[0].profilePicture}
               
              />
            
            <span className="postUsername">
              {Users.filter((u)=>u.id===post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post.photo} />
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