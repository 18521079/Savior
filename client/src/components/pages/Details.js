import React, { Component } from 'react'
import {InforConSumer} from './../Context'
import homecss from '../pages/homecss.css'
import SearchLeft from '../searchLeft/SearchLeft';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

class Details extends Component {
    render() {
        

        return (
            <InforConSumer>
                {
                    data=>{
                        const{
                            id,
                            headerTitle,
                            headerSubTitle,
                            headerText,
                            img,
                            title,
                            maps,
                            description
                        }=data.detailInfo;

                        return(
                            <React.Fragment>
                                <Navbar></Navbar>
                                <div style={{background:'white'}}className='row'>
                                    <div className='col-md-4'>
                                        <SearchLeft></SearchLeft>
                                    </div>
                                    <div className='col-md-8'>
                                        {/* Page content*/}
                                            <div className="container">
                                            <div className="row">
                                                {/* Post content*/}
                                                <div className="mr5 ml3 mt3">
                                                {/* Title*/}
                                                <h4 className="mt-4">{headerTitle}</h4>
                                                {/* Author*/}
                                                <p className="lead">
                                                    Tác giả:
                                                    <a href="#!"> Khánh Ly</a>
                                                </p>
                                                <hr />
                                                {/* Date and time*/}
                                                <p>Posted on January 1, 2021 at 12:00 PM</p>
                                                <hr />
                                                {/* Preview image*/}
                                                <img style={{width:'900px', height:'300px'}}className="img-fluid rounded" src={img} alt="..." />
                                                <hr />
                                                {/* Post content*/}
                                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
                                                <blockquote className="blockquote">
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                    <footer className="blockquote-footer">
                                                    Someone famous in
                                                    <cite title="Source Title">Source Title</cite>
                                                    </footer>
                                                </blockquote>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>
                                                <hr />
                                                {/* Comments form*/}
                                                <div className="card my-4">
                                                    <h6 className="card-header">Để lại bình luận:</h6>
                                                    <div className="card-body">
                                                    <form>
                                                    <div className="form-group">
                                                        <textarea className="form-control mt-20" name="message" rows={3} data-rule="required" data-msg="Please write something for us" placeholder="Bình luận" defaultValue={""} />
                                                        <div className="validate" />
                                                    </div>
                                                        <button className="btn  btn_normal" >
                                                             <i className="fab fa-telegram-plane"></i>  &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; Gửi
                                                        </button>
                                                    </form>
                                                    </div>
                                                </div>
                                                {/* Single comment*/}
                                                <div className="media mb-4">
                                                    <img style={{width:'50px', height:'50px'}}className="d-flex mr-3 rounded-circle" src="assets/person/1.jpeg" alt="..." />
                                                    <div className="media-body">
                                                    <h6 className="mt-0">Khánh Ly</h6>
                                                    Khá là hay, tôi đã biết thêm nhiều thông tin bổ ích từ bài viết. Hi vọng tác giả sẽ có thêm những bài viết hay như vậy.
                                                    </div>
                                                </div>
                                                {/* Comment with nested comments*/}
                                                <div className="media mb-4">
                                                <img style={{width:'50px', height:'50px'}}className="d-flex mr-3 rounded-circle" src="assets/person/2.jpeg" alt="..." />
                                                    <div className="media-body">
                                                    <h6 className="mt-0">Sơn Tùng</h6>
                                                    Mặc dù có một số sai sót nhỏ nhưng nhìn chung bài viết khá ok. Mong rằng bài viết sau bạn sẽ làm tốt hơn.
                                                    <div className="media mt-4">
                                                    <img style={{width:'50px', height:'50px'}}className="d-flex mr-3 rounded-circle" src="assets/person/3.jpeg" alt="..." />
                                                        <div className="media-body">
                                                        <h6 className="mt-0">Phạm Nhật Vượng</h6>
                                                        Sai sót ở đâu vậy bạn, mình thấy bài viết khá hay mà.
                                                        </div>
                                                    </div>
                                                    <div className="media mt-4">
                                                    <img style={{width:'50px', height:'50px'}}className="d-flex mr-3 rounded-circle" src="assets/person/6.jpeg" alt="..." />
                                                        <div className="media-body">
                                                        <h6 className="mt-0">LyLy</h6>
                                                        Mình cũng thấy vậy, hay mà bạn sai sót gì vậy ta.
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div></div>
                                    </div>
                                </div>
                                <Footer></Footer>
                            

                               
                            </React.Fragment>
                        );
                    }
                }
            </InforConSumer>
        )
    }
}

export default Details;