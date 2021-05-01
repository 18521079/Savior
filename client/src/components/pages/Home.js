import React, { Component } from 'react'
import{InforConSumer} from '../Context'
import Info from '../Info'
import logo from './images/healthcare-consultant.jpg'
import logo2 from './images/community.png' 
import Homecss from '../pages/homecss.css'
import logo4 from './images/library8.png'
import logo5 from './images/library8.png'
import logo6 from './images/psychological.jpg'
import video from './images/book_video.mp4'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'



class Home extends Component {
    render() {
        return (
          <>
          <Navbar></Navbar>
          <div className="row">
          <div className="container-fluid">
              <div id="slides" className="carousel slide" data-ride="carousel">
       
       <ul className="carousel-indicators" >
         <li data-target="#slides" data-slide-to={0} className="active" style={{backgroundColor:'#00FFFF'}}/>
         <li data-target="#slides" data-slide-to={1} style={{backgroundColor:'#00FFFF'}}/>
         <li data-target="#slides" data-slide-to={2} style={{backgroundColor:'#00FFFF'}}/>		
         <li data-target="#slides" data-slide-to={3} style={{backgroundColor:'#00FFFF'}}/>
     </ul>
       <div className="carousel-inner">
         <div className="carousel-item active">
            <div className="mid">
              <video autoPlay muted loop>
                <source className="embed-responsive" src={video} type="video/mp4" />
              </video>
              <div class="color-overlay"></div>
              <div className="carousel-caption">
             <h2 className="display-2">Sức Khỏe</h2>
             <h3>Tìm hiểu thông tin về sức khỏe</h3>
             <button type="button" className="btn btn-outline-light btn-sm">
               Đến bản tin
             </button> &nbsp;
             <button type="button" className="btn btn-primary btn-sm btnStarted">Tra cứu bệnh</button>
           </div>
              
            </div>
           
           
         </div>
        
         <div className="carousel-item">
           <img src={logo} />
           
           <div className="carousel-caption">
             <h2 className="display-2">Sức Khỏe</h2>
             <h3>Tìm hiểu thông tin về sức khỏe</h3>
             <button type="button" className="btn btn-outline-light btn-sm">
               Đến bản tin
             </button> &nbsp;
             <button type="button" className="btn btn-primary btn-sm btnStarted">Tra cứu bệnh</button>
           </div>
         </div>
         <div className="carousel-item">
           <img src={logo6} />
           <div class="color-overlay"></div>
           <div className="carousel-caption">
             <h2 className="display-2">Tâm lý</h2>
             <h3>Xua tan vướng mắc tâm lý</h3>
             <button type="button" className="btn btn-outline-light btn-sm">
               Đến bản tin
             </button> &nbsp;
             <button type="button" className="btn btn-primary btn-sm btnStarted">Gặp chuyên gia</button>
           </div>
         </div>
         <div className="carousel-item cover">
           <img src={logo2} />
           <div class="color-overlay1"></div>
           <div className="carousel-caption">
             <h2 className="display-2">Cộng đồng</h2>
             <h3>Giải quyết các vấn đề khó khăn</h3>
             <button type="button" className="btn btn-outline-light btn-sm">
               Đến bản tin
             </button> &nbsp;
             <button type="button" className="btn btn-primary btn-sm btnStarted">Tham gia</button>
           </div>
         </div>
       </div>
     </div>
     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
     </div>
          
     <div className="container-fluid">
     <div className="most_popular mb-100" style={{fontFamily:'Barlow', fontSize:'40px', color:'black'}}><h2>Bệnh thường gặp</h2></div>
     </div>
           <div className="container">
              <div className="row">
               
              <InforConSumer>
               {
                   value=> {
                       return value.info.map(item => {
                           return <Info key={item.id} item={item}></Info>;
                       })
                   }
               }
               </InforConSumer>
              </div>
              </div>


            <div className='mt150 container-fluid'>
              <div className="container-fluid our-skill-area">
     <div className="flex-wrapper">
        <div className="single-chart">
          <svg viewBox="0 0 45 45" className="circular-chart orange">
            <path className="circle-bg" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path className="circle" strokeDasharray="30, 100" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
            <text x={18} y="20.35" className="percentage">200</text>
          </svg>
          
        </div>


        <div className="single-chart row">
          <svg viewBox="0 0 45 45" className="circular-chart green">
            <path className="circle-bg" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path className="circle" strokeDasharray="60, 100" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
            <text x={18} y="20.35" className="percentage">1000</text>
          </svg>
        </div>

        <div className="single-chart row">
          <svg viewBox="0 0 45 45" className="circular-chart green">
            <path className="circle-bg" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path className="circle" strokeDasharray="60, 100" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
            <text x={18} y="20.35" className="percentage">1000</text>
          </svg>
        </div>

        <div className="single-chart">
          <svg viewBox="0 0 45 45" className="circular-chart blue">
            <path className="circle-bg" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path className="circle" strokeDasharray="90, 100" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
            <text x={18} y="20.35" className="percentage">5000</text>
          </svg>
        </div>
      </div>

      <div className="row">
               <div className="col-lg text-chart"><h2>Chuyên gia</h2></div>
               <div className="col-lg text-chart"><h2 className ="text-reader">Người dùng</h2></div>
               <div className="col-lg text-chart"><h2 className ="text-author">Lượt truy cập</h2></div>
               <div className="col-lg text-chart-1"><h2 className ="text-author">Bài báo</h2></div>

      </div>
      </div>

      </div>

     
     <div className="container mb5">
        <div className="row">
          <div className="col-md-4">
            <div className="card card-1 card-new">
            <h3>Về sức khỏe</h3>
              <p>Tabs, buttons, inputs, lists, cards, and more! A comprehensive library
                of mobile UI components.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-2 card-new">
              <h3>Tư vấn tâm lý</h3>
              <p>Tabs, buttons, inputs, lists, cards, and more! A comprehensive library
                of mobile UI components.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-3 card-new">
            <h3>Trợ giúp</h3>
              <p>Tabs, buttons, inputs, lists, cards, and more! A comprehensive library
                of mobile UI components.</p>
            </div>
          </div>
        </div>
      </div>



              </div>


          <Footer></Footer>
          </>
      
            )
    }
}

export default Home;

