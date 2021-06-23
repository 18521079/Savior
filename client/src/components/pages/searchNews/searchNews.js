
import Intro from "../Intro";
import "./searchNews.css";
import InTroJS from './InTroCSS.scss'
import {Link} from 'react-router-dom';
import {  useEffect } from "react";
import {  useState } from "react";
import axios from "axios";

export default function SearchNews() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [articles, setArticle] = useState([]);
  const [search, setSearch] = useState('');
  const filteredTag = articles.filter (article=>{
    return article.tag.toLowerCase().includes(search.toLowerCase())
  })
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("articles/all/all");
    setArticle(res.data)
    };
   
    fetchUser();
  }, [] )

  
  return (
    
    <div className="sidebar">
      
      <div className="row">
                        <div className="ml5 mt5">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title">Các bài viết về sức khỏe, tâm lý</h1>
                          
                          </div>
                        </div>
                      </div>

                     {/* Search widget*/}

  <div style={{marginTop:"10px"}}  className="field" id="searchform">
        <input style={{height:"55px", fontSize:"19px"}} onChange={e=>setSearch(e.target.value)} type="text" id="searchterm" placeholder="Tìm kiếm theo triệu chứng" />
        <button type="button" id="search">Find!</button>
      </div>
                   
                      {
                        filteredTag.map( article=>
                          <div> 
                <div>
                
                    <div className="blog-card mt3">
                      <div className="meta">
                        <div className="photo" style={{}} 
                         />

                    <img src={PF+article.img}  className="photo" />
                   {/* <Link to={"/article/"+article._id}> */}

                        <a href={article.link}>
                        
                       
                        <ul className="details">
                          <li ><i class="far fa-user"></i> &nbsp; {article.comp}</li>
                          <li > <i class="far fa-calendar-alt"> &nbsp; </i> {new Date(Date.parse(article.time)).toDateString()}</li>
                          <li >
                            <ul>
                            <li><i class="fas fa-tag"></i></li>
                              <li><>&nbsp;{article.tag}</></li>
                              
                            </ul>
                          </li>
                        </ul>
                        </a>
                        
                    {/*  </Link>*/}
                      </div>
                      <div className="description">
                        <h5>{article.title}</h5>
                        <h6>{article.more}</h6>
                        <p> {article.summary}</p>
                        <p className="read-more">
                          <a href="#">Đọc thêm</a>
                        </p>
                      </div>
                    </div>

                   
                  </div>
                 
            </div>
                          )
                      }
                      
    </div>
  );
}
