import logo from '../../../src/new1logo.png'
import logo1 from '../../../src/newlogo.png'
import {Link} from 'react-router-dom';
import homecss from '../pages/homecss.css'


function Navbar(){
    return(
            /*<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/home">
      <img src={logo} style={{width:'35px'}}/>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span>
      <i className="fas fa-align-justify" style={ {color:"white"}} ></i>
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
        <li className="nav-item">
          <Link className="nav-link text-uppercase text-white ml-5"  aria-current="page" to="/home">Home&nbsp;<i class="fas fa-home"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase ml-5" to="/news">New</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-uppercase ml-5 text-white" to="/contacts" tabindex="-1" aria-disabled="true">Contact</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
*/
<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
<div className="container">
<Link className="navbar-brand" to="/home">
      <img src={logo} style={{width:'130px', height:'40px'}}/>
      </Link>
  {/*this is three dask button*/}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link active" to="/home">Trang chủ</Link>
      </li>
      <li className="nav-item">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Tâm lý
        </a>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <li><Link className="dropdown-item" to="/books_management">Gặp chuyên gia</Link></li>
          <li><Link className="dropdown-item" to="/search">Tra cứu</Link></li>
         
        </ul>
      </li>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/news">Bản tin</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sức khỏe</a>
      </li>

      <li className="nav-item">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Tài khoản
        </a>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <li><Link className="dropdown-item" to="/books_management">Đăng Xuất</Link></li>
          <li><Link className="dropdown-item" to="/search">Cài đặt</Link></li>
         
        </ul>
      </li>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/contacts">Liên hệ</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
    );
}
export default Navbar;