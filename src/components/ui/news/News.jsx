import React from 'react'
import './news.css'
import news1 from '@/assets/images/c1.jpg'
import news2 from '@/assets/images/c5.jpg'
import news3 from '@/assets/images/c6.jpg'


const News = () => {
  return (
    <section style={{padding:'0 100px'}}>
        <h1 style={{color: 'red', textTransform: 'uppercase'}}>News</h1>
        <div className='news-container'>
        <div className='news-item'>
            <div className="news-list">
                <div className="news-item">
                    <img src={news1} alt="news1" />
                    <h2>Tin tức mới nhất</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
            </div>
        </div>
        <div className='news-item'>
            <div className="news-list">
                <div className="news-item">
                    <img src={news2} alt="news1" />
                    <h2>Tin tức mới nhất</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
            </div>
        </div>      
        <div className='news-item'>
            <div className="news-list">
                <div className="news-item">
                    <img src={news3} alt="news1" />
                    <h2>Tin tức mới nhất</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default News