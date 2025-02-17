import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/Play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt='Hero Banner' className='banner-img' loading='lazy' />
        <div className='hero-caption'>
          <img src={hero_title} alt='Hero Title' className='caption-img' loading='lazy' />
          <p>
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul
            embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className='hero-btns'>
            <button className='btn'>
              <img src={play_icon} alt='Play Icon' loading='lazy' /> Play
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt='Info Icon' loading='lazy' /> More Info
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"}/>
      <TitleCards title={"Only onn Stream X"}/>
      <TitleCards title={"Upcoming"}/>
      <TitleCards title={"Top  Pics for you"}/>
     </div>
    <Footer/>
  </div>
  )
}

export default Home
