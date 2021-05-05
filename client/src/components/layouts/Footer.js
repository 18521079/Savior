
import styled from "styled-components"
import logo from '../../../src/logo.png'
import homecss from '../pages/homecss.css'
function Footer(){
    return(
        <FooterContainer>
           
        <footer className="bg-light text-center text-lg-start">
            <div className="container-fluid">

            <div className="row logo-icon">
            <div className="col-lg-6 col-md-6 mb-6 mb-md-0">
            <h2>Savious</h2>
                </div>

                <div className="col-lg-6 col-md-6 mb-6 mb-md-0">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-google-plus-square"></i>
                <i class="fab fa-facebook-messenger"></i>
                <i class="fab fa-whatsapp-square"></i>
                </div>
            </div>


                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                      
                    <ul className="list-unstyled mb-0">
                        <h6>Trang web</h6>
                        <li>
                            <a href="#!" className="text-dark">Về chúng tôi</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Công việc</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Liên hệ</a>
                        </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h6 className="text-uppercase">Trợ giúp</h6>
                    <ul className="list-unstyled mb-0">
                        <li>
                            <a href="#!" className="text-dark">Tài khoản</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Ý tưởng</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Hỗ trợ</a>
                        </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h6 className="text-uppercase">Nhấn mạnh</h6>
                    <ul className="list-unstyled mb-0">
                        <li>
                            <a href="#!" className="text-dark">Phát hành</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Thông tin</a>
                        </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h6 className="text-uppercase">Pháp luật</h6>
                    <ul className="list-unstyled mb-0">
                        <li>
                            <a href="#!" className="text-dark">Chính sách</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Điều khoản</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Bảo mất</a>
                        </li>
                
                        </ul>
                    </div>

                </div> 
                
            </div>

            
            </footer>
           
            </FooterContainer>
            
    );
}
export default Footer;

const FooterContainer = styled.footer `
.container-fluid
{
    background:#363636 !important;
    color: white !important;
    margin-top: 60px;
    padding-top: 30px;
    padding-bottom: 30px;
}
a
{
    color:aqua !important;
}

.logo-icon
{
    margin-left:-180px;
}
i{
    font-size: 1.7em;
    margin-left:20px;
    margin-top:8px;
}
h6
{
    margin-top:30px;
    color: #00FFFF;
}
a{
    color: #D3D3D3 !important;
    font-size: 18px;
}
i:hover {
    color: #00FFFF !important;
}
`;
