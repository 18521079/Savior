import "./searchLeft.css";



export default function SearchLeft() {
  return (
      <>
    <div className="sidebar">

        {/* Search widget*/}

  <div className="card-body mt3">
    <div className="input-group">
      <input className="form-control" type="text" placeholder="Tìm kiếm..." />
      <span className="input-group-append"><button className="btn btn-secondary" type="button">Tìm</button></span>
    </div>
  </div>

      {/* Popular News Start */}
<div className="pb-3">
  <div className=" py-2 px-4 mb-3">
    <h5 className="m-0">Phổ biến nhất</h5>
  </div>

  <div className="position-relative overflow-hidden ml3 mb3" style={{"height":"220px", width:'365px'}}>
  <img className="img-fluid w-100 h-100" src="assets/img/tramcam.jpg"  style={{"object-fit":"cover"}} />
  <div className="overlay">
    <div className="mb-1" style={{"font-size":"13px"}}>
      <a className="text-white" href>Tâm Lý</a>
      <span className="px-1 text-white">/</span>
      <a className="text-white" href>05-05-2021</a>
    </div>
    <a className="h4 m-0 text-white" href>Tự vượt qua trầm cảm bạn không hề đơn độc</a>
  </div>
</div>

  <div className="d-flex mb-3  ml3 mr3">
    <img src="assets/img/news-100x100-1.jpg" style={{"width":"100px","height":"100px","object-fit":"cover"}} />
    <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{"height":"100px"}}>
      <div className="mb-1" style={{"font-size":"13px"}}>
        <a href>Technology</a>
        <span className="px-1">/</span>
        <span>January 01, 2045</span>
      </div>
      <a className="h6 m-0" href>Lorem ipsum dolor sit amet consec adipis elit</a>
    </div>
  </div>
  <div className="d-flex mb-3 ml3 mr3">
    <img src="assets/img/news-100x100-2.jpg" style={{"width":"100px","height":"100px","object-fit":"cover"}} />
    <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{"height":"100px"}}>
      <div className="mb-1" style={{"font-size":"13px"}}>
        <a href>Technology</a>
        <span className="px-1">/</span>
        <span>January 01, 2045</span>
      </div>
      <a className="h6 m-0" href>Lorem ipsum dolor sit amet consec adipis elit</a>
    </div>
  </div>
  <div className="d-flex mb-3  ml3 mr3">
    <img src="assets/img/news-100x100-3.jpg" style={{"width":"100px","height":"100px","object-fit":"cover"}} />
    <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{"height":"100px"}}>
      <div className="mb-1" style={{"font-size":"13px"}}>
        <a href>Technology</a>
        <span className="px-1">/</span>
        <span>January 01, 2045</span>
      </div>
      <a className="h6 m-0" href>Lorem ipsum dolor sit amet consec adipis elit</a>
    </div>
  </div>
  
  
</div>
{/* Popular News End */}


<div className="d-flex align-items-center justify-content-between py-2 px-4 mb-3">
    <h5 className="m-0">Danh mục</h5>
    <a className="text-secondary font-weight-medium text-decoration-none" href>View All</a>
  </div>
  <div className="position-relative overflow-hidden mb-3 ml3 mr3" style={{"height":"80px"}}>
    <img className="img-fluid w-100 h-100" src="assets/img/cat-500x80-1.jpg" style={{"object-fit":"cover"}} />
    <a href className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
      Rối loạn âu lo
    </a>
  </div>
  <div className="position-relative overflow-hidden mb-3 ml3 mr3" style={{"height":"80px"}}>
    <img className="img-fluid w-100 h-100" src="assets/img/cat-500x80-2.jpg" style={{"object-fit":"cover"}} />
    <a href className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
      Quản lý căng thẳng
    </a>
  </div>
  <div className="position-relative overflow-hidden mb-3 ml3 mr3" style={{"height":"80px"}}>
    <img className="img-fluid w-100 h-100" src="assets/img/cat-500x80-3.jpg" style={{"object-fit":"cover"}} />
    <a href className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
      Tạo mối quan hệ
    </a>
  </div>
  <div className="position-relative overflow-hidden ml3 mr3" style={{"height":"80px"}}>
    <img className="img-fluid w-100 h-100" src="assets/img/cat-500x80-4.jpg" style={{"object-fit":"cover"}} />
    <a href className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
      Tập luyện thể thao
    </a>
  </div>


{/* Tags Start */}
<div className="pb-3">
  <div className=" py-2 px-4 mb-3 mt3">
    <h5 className="m-0">Tags</h5>
  </div>
  <div className="d-flex flex-wrap m-n1">
    <a href className="btn btn-sm btn-outline-secondary m-1">Mệt mỏi</a>
    <a href className="btn btn-sm btn-outline-secondary m-1">Lo âu</a>
    <a href className="btn btn-sm btn-outline-secondary m-1">Đau đầu</a>
    <a href className="btn btn-sm btn-outline-secondary m-1">Căng Thẳng</a>
    <a href className="btn btn-sm btn-outline-secondary m-1">Sức khỏe</a>
    <a href className="btn btn-sm btn-outline-secondary m-1">Đại dịch</a>
    <a href className="btn btn-sm btn-outline-secondary m-1">Áp lực</a>
    <a href className="btn btn-sm btn-outline-secondary m-1">Ăn uống</a>
    <a href className="btn btn-sm btn-outline-secondary m-1">Tập luyện</a>
    <a href className="btn btn-sm btn-outline-secondary m-1">Giải trí</a>
    <a href className="btn btn-sm btn-outline-secondary m-1">Thư giãn</a>
    <a href className="btn btn-sm btn-outline-secondary m-1">Từ bỏ</a>
  </div>
</div>
{/* Tags End */}


{/* Social Follow Start */}
<div className="pb-3">
  <div className=" py-2 px-4 mb-3">
    <h5 className="m-0">Theo dõi chúng tôi</h5>
  </div>
  <div className="d-flex mb-3 ml3">
    <a href className="d-block w-49 py-2 px-3 text-white text-decoration-none mr-2" style={{"background":"#39569E"}}>
      <small className="fab fa-facebook-f mr-2" /><small>12,34885 Fans</small>
    </a>
    <a href className="d-block  py-2 px-3 text-white text-decoration-none ml-2" style={{"background":"#52AAF4"}}>
      <small className="fab fa-twitter mr-2" /><small>12,345 Followers</small>
    </a>
  </div>
  <div className="d-flex mb-3 ml3">
    <a href className="d-block py-2 px-3 text-white text-decoration-none mr-2" style={{"background":"#0185AE"}}>
      <small className="fab fa-linkedin-in mr-2" /><small>125 Connects</small>
    </a>
    <a href className="d-block py-2 px-3 text-white text-decoration-none ml-2" style={{"background":"#C8359D"}}>
      <small className="fab fa-instagram mr-2" /><small>12,345 Followers</small>
    </a>
  </div>
  <div className="d-flex mb-3 ml3">
    <a href className="d-block py-2 px-3 text-white text-decoration-none mr-2" style={{"background":"#DC472E"}}>
      <small className="fab fa-youtube mr-2" /><small>1 Subscribers</small>
    </a>
    <a href className="d-block py-2 px-3 text-white text-decoration-none ml-2" style={{"background":"#1AB7EA"}}>
      <small className="fab fa-vimeo-v mr-2" /><small>12,345 Followers</small>
    </a>
  </div>
</div>
{/* Social Follow End */}

    </div>
    </>
  );
}
