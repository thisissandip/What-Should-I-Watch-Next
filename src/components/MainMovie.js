import React from 'react'
import { useEffect } from 'react'
import {FaStar, FaRegHeart} from "react-icons/fa"
import "./MainMovie.css"

function MainMovie({ alldetails }) {

    const rem_frm_dom = () => {
        const mainposter = document.querySelector(".main-poster");
        mainposter.style.opacity = "0";
    }

    const add_to_dom = () => {
        const mainposter = document.querySelector(".main-poster");
        mainposter.src = `https://image.tmdb.org/t/p/original${alldetails.poster_path}`;
        mainposter.style.opacity = "1";
    }

    useEffect(() => {
        const mainposter = document.querySelector(".main-poster");
        mainposter.style.opacity = "1";
        const mainmoviedeets = document.querySelector(".right-main-movie-details ");
        mainmoviedeets.style.opacity = "1";
    }, [])

    useEffect(() => {
        setTimeout(() => {
            add_to_dom();
        }, 1000);
        return () => {
            rem_frm_dom();
        }
    }, [alldetails.id])

    const ReadMore = () => {
        const right_details = document.querySelector(".right-main-movie-details");
        right_details.style.width = "70%";
        const more_des = document.querySelector(".more-des");
        more_des.style.display = "initial";
        const read_more_btn = document.querySelector(".read-more");
        read_more_btn.style.display = "none";
        const dots = document.querySelector(".dots");
        dots.style.display = "none";
    } 
    
    return (
        <div className="main-movie-cont">
            <div className="left-main-movie-poster">
                <img className="main-poster" src="https://image.tmdb.org/t/p/original/riYInlsq2kf1AWoGm80JQW5dLKp.jpg" />
            </div>

            <div className="right-main-movie-details">
                <div className="main-movie-title">
                    {alldetails.original_title || alldetails.original_name }
                </div>
                <div className="main-movie-des">
                    {alldetails.overview.length < 300 ? alldetails.overview :
                        <p className="main-movie-des-para">
                            <span className="less-des">
                                {alldetails.overview.slice(0, 200)}
                            </span>
                            <span className="dots">
                                ...
                            </span>
                            <span className="more-des">
                                {alldetails.overview.slice(200, alldetails.overview.length)}
                            </span>
                            <span onClick={() => { ReadMore() }} className="read-more">
                                Read More
                            </span>
                        </p>}
                </div>
                <div className="main-movie-details">
                  <FaStar className="fa-star" />  {alldetails.vote_average} / 10
                </div>
                <div className="add-to-list">
                    <FaRegHeart className="add-to-list-icon"  /> <span className="add-to-list-title">Add to My List</span>
                </div>
            </div>
        </div>
    )
}

export default MainMovie
