import React, { Component } from 'react'
import {InforConSumer} from './../Context'
import homecss from '../pages/homecss.css'

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
                                <div className="container-fluid align-items-center">
                                    <h1 className="display-1 ">
                                        {
                                            headerTitle
                                        }
                                    </h1>
                                    <h5 className="display-5">
                                        {
                                            headerSubTitle
                                        }
                                    </h5>
                                    <p>
                                        {headerText}
                                    </p>

                                    <div className="container">
                                        <div className="row justify-content-center">
                                        <div col-2>
                                        <i class="fab fa-facebook"></i>
                                        </div>

                                        <div col-2>
                                        <i class="fab fa-twitter"></i>
                                        </div>

                                        <div col-2>
                                        <i class="fab fa-google-plus-square"></i>
                                        </div>

                                        <div col-2>
                                        <i class="fab fa-reddit-square"></i>
                                        </div>

                                        <div col-2>
                                        <i class="fab fa-whatsapp-square"></i>
                                        </div>
                                        
                                        <div col-2>
                                        <i class="fab fa-facebook-messenger"></i>
                                        </div>
                                        </div>
                                    </div>  {/*end social icon*/}

                                    <div className="container">
                                    <ul className="nav nav-tabs">
                                        {/*this is about place*/}
                                        <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#aboutPlace" role="tab" datatoggle="tab">About Place</a>
                                        </li>

                                         {/*this is review*/}
                                        <li className="nav-item">
                                        <a className="nav-link" href="#reviews" role="tab" datatoggle="tab">Reviews</a>
                                        </li>

                                         {/*this is map link*/}
                                        <li className="nav-item">
                                        <a className="nav-link" href="#map" role="tab" datatoggle="tab">Map</a>
                                        </li>
                                        
                                    </ul>

                                         {/*tab pane*/}
                                        <div className="tab-content">
                                            {/*about place tab*/}
                                            <div id="aboutPlace" className="tab-pane in active  text-center" role="tabpanel">
                                                <h2 >
                                                    {title}
                                                </h2>
                                                <p>{description}</p>
                                                <img src={img} className=" img-fluid"/>
                                            </div>
                                            {/*reviews tab*/}
                                            <div id="reviews" className="tab-pane text-center" role="tabpanel">
                                            <p>why</p>
                                            </div>
                                            {/*map tab*/}
                                            <div id="maps" className="tab-pane text-center" role="tabpanel">
                                                <iframe src={maps}></iframe>
                                            </div>
                                        </div> 

                                    </div> {/*end tab nav*/}

                                </div>
                            </React.Fragment>
                        );
                    }
                }
            </InforConSumer>
        )
    }
}

export default Details;