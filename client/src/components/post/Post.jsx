import "./post.css";
import { MoreVert } from "@material-ui/icons";


export default function Post({ post }) {
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            
              <img className="shareProfileImg" src='./assets/person/1.jpeg'
               
              />
            
            <span className="postUsername">Trầm cảm rồi</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"></span>
          <img className="postImg" src='./assets/person/cat.jpg' />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
               className="likeIcon"
              src='./assets/like.png'
            />
            <img
              className="likeIcon"
              src='./assets/heart.png'
            />
            <span className="postLikeCounter"> 24 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> 4 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
