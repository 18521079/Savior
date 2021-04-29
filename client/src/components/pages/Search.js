import React, { Component } from 'react'
import Infor from '../pages/Intro'
import homecss from '../pages/style.css'
class Search extends Component {
   
    render() {
        return (
            <div> 
                <div className=' ml7 mt5'>
                    <div className='row'>
                        <div className='col-md-3'>

                        </div>

                        <div className='col-md-6'>
                        <div className="input-group mb3">
                  <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Tìm kiếm" id="example-search-input" />
                      <span className="input-group-append">
                        <button className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button">
                          <i className="fa fa-search" />
                        </button>
                      </span>
                </div>
                        </div>

                        <div className='col-md-3'>

                        </div>
                    

                </div>

                </div>

                <Infor></Infor>

            </div>
        )
    }
    
}

export default Search;