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


{/* ======= Bệnh phổ biến ======= */}    
     <div style={{background:'white'}} className="container-fluid">
     <div className="most_popular mb-100" style={{fontFamily:'Barlow', fontSize:'40px', color:'black'}}><h3>Bệnh thường gặp mùa hè</h3></div>
     </div >
           <div style={{background:'white'}} className="container">
              <div style={{background:'white'}} className="row">
               
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

            

{/* ======= Departments Section ======= */}
<section style={{background:'white'}} id="departments" className="departments mt180 container ">
        <div className="container">
          <div className="section-title">
            <h3>Các vấn đề tâm lý</h3>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-toggle="tab" href="#tab-1">Stress</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tab-2">Áp lực học tập</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tab-3">Vấn đề tình cảm</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tab-4">Rối loạn trầm cảm</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tab-5">Mâu thuẫn trong mối quan hệ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Stress (Dễ rơi vào bệnh Trầm Cảm)</h3>
                      <p className="font-italic">Nhắc đến stress người ta thường nghĩ đến sự căng thẳng, mệt mỏi, lo nghĩ.</p>
                      <p>Đừng đợi cho đến khi stress làm ảnh hưởng đến sức khỏe, công việc, các mối quan hệ của bạn. Khi thấy bản thân có các dấu hiệu của bệnh stress và diễn ra trong một thời gian dài, bạn nên đi khám bác sĩ để được hỗ trợ và giúp đỡ.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/diseases/stress.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Et blanditiis nemo veritatis excepturi</h3>
                      <p className="font-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <p>Ea ipsum voluptatem consequaturis est. Illum error ullam omequatur quis est. Illum error ullam omequatur quis est. Illum error ullam om ullam omequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img  src="assets/diseases/stress1.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                      <p className="font-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                      <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-3.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                      <p className="font-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                      <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-4.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                      <p className="font-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                      <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-5.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Departments Section */}

      



 {/* ======= Frequently Asked Questions Section ======= */}
 <section style={{background:'#F0F8FF'}} id="faq" className="faq section-bg mt70 container-fluid padb70">
        <div className="container">
          <div className="section-title mt3">
            <h3>Các câu hỏi thường gặp</h3>
            <p>Khi gặp các vấn đề về sức khỏe, tâm lý hãy liên hệ với chúng tôi.
            Chúng tôi luôn sẵn sàng trả lời câu hỏi của bạn.</p>
          </div>
          <div className="faq-list">
            <ul>
              <li data-aos="fade-up">
                <i className="far fa-question-circle icon-help" /> <a data-toggle="collapse" className="collapse" href="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="fas fa-chevron-down icon-show" /><i className="fas fa-chevron-up icon-close" /></a>
                <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={100}>
                <i className="far fa-question-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="fas fa-chevron-down icon-show" /><i className="fas fa-chevron-up icon-close" /></a>
                <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={200}>
                <i className="far fa-question-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="fas fa-chevron-down icon-show" /><i className="fas fa-chevron-up icon-close" /></a>
                <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={300}>
                <i className="far fa-question-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="fas fa-chevron-down icon-show" /><i className="fas fa-chevron-up icon-close" /></a>
                <div id="faq-list-4" className="collapse" data-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={400}>
                <i className="far fa-question-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="fas fa-chevron-down icon-show" /><i className="fas fa-chevron-up icon-close" /></a>
                <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>{/* End Frequently Asked Questions Section */}


        {/* ======= Doctors Section ======= */}
      <section id="doctors" className="doctors container-fluid padb70">
        <div className="container">
          <div className="section-title padt50">
            <h3>Các chuyên gia hàng đầu</h3>
            <p>Với nhiều năm kinh nghiệm trong lĩnh vực tư vấn tâm lý, sức khỏe.</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="assets/doctors/doctors-1.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Hà Minh Thành</h4>
                  <span>Viện y tế cộng đồng Tp.HCM</span>
                  <p>10 năm nghiên cứu về sức khỏe</p>
                  <div className="social">
                    <a href><i className="fab fa-facebook-f" /></a>
                    <a href><i className="fab fa-twitter" /></a>
                    <a href><i className="fab fa-instagram" /></a>
                    <a href> <i className="fab fa-linkedin" /> </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="assets/doctors/doctors-2.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Nguyễn Thị Khánh Ly</h4>
                  <span>Viện PASTEUR Tp. HCM</span>
                  <p>8 năm nghiên cứu lĩnh vực tâm lý</p>
                  <div className="social">
                    <a href><i className="fab fa-facebook-f" /></a>
                    <a href><i className="fab fa-twitter" /></a>
                    <a href><i className="fab fa-instagram" /></a>
                    <a href> <i className="fab fa-linkedin" /> </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="assets/doctors/doctors-3.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>Cardiology</span>
                  <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                  <div className="social">
                    <a href><i className="fab fa-facebook-f" /></a>
                    <a href><i className="fab fa-twitter" /></a>
                    <a href><i className="fab fa-instagram" /></a>
                    <a href> <i className="fab fa-linkedin" /> </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="assets/doctors/doctors-4.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Neurosurgeon</span>
                  <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                  <div className="social">
                    <a href><i className="fab fa-facebook-f" /></a>
                    <a href><i className="fab fa-twitter" /></a>
                    <a href><i className="fab fa-instagram" /></a>
                    <a href> <i className="fab fa-linkedin" /> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Doctors Section */}

 {/* ======= Counts Section ======= */}
 <section id="counts" className="counts container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="icofont-doctor-alt fas fa-user-md" />
                <span data-toggle="counter-up">85</span>
                <p>Chuyên gia</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="icofont-patient-bed fas fa-book" />
                <span data-toggle="counter-up">1800</span>
                <p>Bài viết</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-laboratory fas fa-user" />
                <span data-toggle="counter-up">800</span>
                <p>Người dùng</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-award fas fa-trophy" />
                <span data-toggle="counter-up">2</span>
                <p>Giải thưởng</p>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Counts Section */}
     
     <div className="container">
       
        <div className=" container row padt50">

        

          <div className="col-md-4">
            <div className="card card-1 card-new">
            <h4>Về sức khỏe</h4>
              <p>Tabs, buttons, inputs, lists, more! A library
                of mobile UI components.</p>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card card-2 card-new">
              <h4>Tư vấn tâm lý</h4>
              <p>Tabs, buttons, inputs, lists, more! A library
                of mobile UI components.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-3 card-new">
            <h4>Trợ giúp</h4>
              <p>Tabs, buttons, inputs, lists, more! A library
                of mobile UI components.</p>
            </div>
          </div>
        </div>
      </div>

               {/* ======= Contact Section ======= */}
      <section  style={{background:'white'}} id="contact" className="contact container-fluid">
        <div className="container-fluid">
          <div style={{marginLeft:'100px'}} className="section-title mt5 mb3">
            <h3>Liên hệ</h3>
          </div>
        </div>
        <div>
          <iframe style={{border: 0, width: '100%', height: '350px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
        </div>
        <div className="container mt3">
          <div className="row ml-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="icofont-google-map fas fa-map-marker" />
                  <h4>Địa chỉ:</h4>
                  <p>Kí tức xá khu A, Linh Trung, Thủ Đức</p>
                </div>
                <div className="email">
                  <i className="icofont-envelope far fa-envelope" />
                  <h4>Email:</h4>
                  <p>KhanhLyKhanhLy01@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="icofont-phone fas fa-phone" />
                  <h4>Điện thoại:</h4>
                  <p>+84 0966773746</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="form-row mt-50">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Tên của bạn" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Tiêu đề" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Lời nhắn" defaultValue={""} />
                  <div className="validate" />
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button className="btn  btn_normal mr5 mb3 mt3" >
                                                <i className="fab fa-telegram-plane"></i>  &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; Gửi
                                </button></div>
              </form>
            </div>
          </div>
        </div>
      </section>{/* End Contact Section */}


              </div>


              


          <Footer></Footer>
          </>
      
            )
    }
}

export default Home;

