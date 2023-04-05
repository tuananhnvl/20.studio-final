import React, { useEffect, useRef, useState } from 'react'
import '.././styles/Home.css'
import img01 from '../asset/img.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Partners from '../components/Partners';
import Services from '../components/Services';
import ServicesinPage from '../components/ServicesinPage';
import GalleryinPage from '../components/GalleryinPage';
import Contact from '../components/Contact';
import gsap from 'gsap'; //hiệu ứng
import vid1 from '../asset/videos/websites.mp4'
import useLocoScroll from '.././hooks/useLocoScroll'; //lấy smooth
import usePageTransition from '.././hooks/usePageTransition';
import IntroVid from '../components/IntroVid';
import '.././styles/HomeNew.css'
import SliderPartners from '../components/SliderPartners';
import Navbar from '../components/Navbar'
import Grid from '../components/Grid'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
const images = {
  image1: require('.././asset/gallery/3.png'),
  image2: require('.././asset/gallery/5.png'),
  image3: require('.././asset/gallery/8.png'),
  image4: require('.././asset/gallery/b.png'),
  image5: require('.././asset/gallery/7.jpg'),
  sample1: require('.././asset/sample_1.png'),
  sample2: require('.././asset/sample_2.png'),
  sample3: require('.././asset/sample_3.png')
};



gsap.registerPlugin(ScrollTrigger);
export default function Home() {
 //useLocoScroll(true)
 const { redirectPage } = usePageTransition();
 const [offTask,setOffTask] = useState(false)

  const stickerContext = [
      `<span>craftmenship</span>`,
      `<span>passion</span>`,
      `<span>creaticity</span>`
  ]
  

 


  useEffect(() => {    
    const listStickerSpace = document.querySelectorAll('.stickerSpace')
    if (listStickerSpace.length > 2) {
      for (let y = 0; y < 5; y++) {
       // console.log(y)
        listStickerSpace[0].innerHTML += `${stickerContext[0]}`
        listStickerSpace[1].innerHTML += `${stickerContext[1]}`
        listStickerSpace[2].innerHTML += `${stickerContext[2]}`
      }
    }


  }, [])

  useEffect(() => {
    if(!offTask) {return}
const scrollEl = document.querySelector('.container');
console.log('========== found scrollEl')
console.log(scrollEl.getBoundingClientRect().height)


let locoScroll = new LocomotiveScroll({
    el: scrollEl,
    smooth: true,
    multiplier: 1.2,
});

}, [offTask])
  return (
    <>

<section data-scroll-section className='warpper-homepage'>
        <div className='hero-section' data-scroll-container>
          <div className='text'>
            <h2>20 Studio</h2>
            <p>Chúng tôi chuyên cung cấp dịch vụ gia công các mẫu thiết kế</p>
            <a  value='/sampledev' onClick={redirectPage}>Sample Dev</a>
            <a  value='/products' onClick={redirectPage}>Products</a>
            <a  value='/contact' onClick={redirectPage}>Contact</a>
          </div>
        </div>
        <div className='clipwelcome-section' data-scroll-container>
            <div className='text'>
              <span>REEL</span>
            </div>
            <div className='clip'>
              <img src={images.image3} alt='' />
            </div>
        </div>
        <div className='servcies_home-section' data-scroll-container>
            <div className='title'>
                <h2>Servcies</h2>
            </div>
            <div className='list'>
                <a><span id='brading_servcies'>Branding</span></a>
                <a><span id='sampledev_servcies'>Sample Develop</span></a>
                <a><span id='products_servcies'>Production</span></a>
            </div>
        </div>
        <div className='passion-section' data-scroll-container>
            <div className='content'>
              <div className='text'>with craftmentship, creativity and love, we turn our client’s ideas into peice of art</div>
              <div className='img'><img src={images.image4} alt=''/></div>
            </div>
            <div className='sticker-warpper'>
                <div className='stickerSpace'></div>
                <div className='stickerSpace'></div>
                <div className='stickerSpace'></div>
            </div>
        </div>
        <SliderPartners />


        <Contact />

      </section>

     

   
       
    </>
  )
}
