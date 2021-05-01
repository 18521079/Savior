import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";


export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProfileImg'  src={`${PF}person/1.jpeg`}>
          </img>
          <input className="shareInput"
           placeholder="Bạn đang nghĩ gì? "
           
            
          />
        </div>
        <hr className="shareHr" />
       
        <form className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Hình ảnh, video</span>
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Gắn thẻ</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Địa điểm</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Cảm súc</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Chia sẻ
          </button>
        </form>
      </div>
    </div>
  );
}
