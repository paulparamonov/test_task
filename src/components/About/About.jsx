import React from 'react'
import './About.css'
import AboutMe from './AboutMe';

function About() {
  return (
    <div className='container' style={{ marginTop:"5%" }}>
     <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Привет, Меня зовут</h2>
          <h1 className="i-name">Павел Парамонов</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Videographer</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Videographer</div>
            </div>
          </div>
          <p className="i-desc">
            Я увлеченный и внимательный к деталям начинающий программист, ищу должность начального уровня в компании, чтобы использовать свои навыки кодирования,
            устранения проблем и оказания помощию
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        
      </div>
    </div>
    <AboutMe />
    </div>
  )
}

export default About;
