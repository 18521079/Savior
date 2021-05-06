import React, { Component } from 'react'
import InTroJS from '../pages/InTroCSS.scss'
import Swiper from 'swiper';
import Stress from './images/stress.png'

class Intro extends Component {
   
    render() {
     
        return (

            <div> 
                <div>
                    <div className="blog-card">
                      <div className="meta">
                        <div className="photo" style={{}} 
                         />

                         <img src={Stress}  className="photo" />
                        <ul className="details">
                          <li ><i class="far fa-user"></i><a href="#"> &nbsp; Khánh Ly</a></li>
                          <li > <i class="far fa-calendar-alt"> &nbsp; </i>Aug. 24, 2021</li>
                          <li >
                            <ul>
                              <li><a href="#">CăngThẳng</a></li>
                              <li><a href="#">MệtMỏi</a></li>
                              <li><a href="#">LoNghĩ</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="description">
                        <h1>Stress</h1>
                        <h2>Dễ rơi vào bệnh Trầm Cảm.</h2>
                        <p> Nhắc đến stress người ta thường nghĩ đến sự căng thẳng, mệt mỏi, lo nghĩ. Dấu hiệu đầu tiên và dễ nhận biết nhất cuả bệnh là mệt mỏi...</p>
                        <p className="read-more">
                          <a href="#">Đọc thêm</a>
                        </p>
                      </div>
                    </div>

                    
                    <div className="blog-card alt">
                      <div className="meta">
                        <div className="photo" style={{}} />
                        <img src={Stress}  className="photo" />
                        <ul className="details">
                          <li className="author"> <i class="far fa-user"></i> <a href="#">Khánh Ly</a></li>
                          <li className="date">July. 15, 2015</li>
                          <li className="tags">
                            <ul>
                              <li><a href="#">Căng Thẳng</a></li>
                              <li><a href="#">Mệt mỏi</a></li>
                              <li><a href="#">Lo nghĩ</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="description">
                        <h1>Stress</h1>
                        <h2>Dễ rơi vào bệnh Trầm Cảm.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                        <p className="read-more">
                          <a href="#">Đọc thêm</a>
                        </p>
                      </div>
                    </div>
                  </div>
            </div>
        )
    }
    
}

export default Intro;