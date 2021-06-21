
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
  useEffect(()=>{
    return ()=>{
      const fechdata = async ()=>{
       const res = await axios.get("articles/all/all");
      
        setArticle(res.data);
      }
      fechdata();
      
      
    };
  }
  )

  return (
    <div className="sidebar">
      
      <div className="row">
                        <div className="ml5 mt5">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title">Các bài viết về sức khỏe, tâm lý</h1>
                          
                          </div>
                        </div>
                      </div>

                   
                      {
                        articles.map( article=>
                          <div> 
                <div>
                
                    <div className="blog-card mt3">
                      <div className="meta">
                        <div className="photo" style={{}} 
                         />

                    <img src={PF+article.img}  className="photo" />
                         <Link to={"/article/"+article._id}>
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
                        </Link>
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
