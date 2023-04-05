import { useState, useEffect, lazy, Suspense, useRef } from 'react'
import './styles/App.css';
import './libs/locomotive-scroll.css';
import './styles/Responve-Pagews.css'
import Navbar from './components/Navbar';
import Grid from './components/Grid'
import './fonts/Marcellus-Regular.ttf';
import { Link, Route, Routes } from "react-router-dom";
//import Test from "./components/Test";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import SampleDev from "./pages/SampleDev"
import PatternMaking from "./pages/PatternMaking"
import LoadingPage from "./components/LoadingPage"
import Products from './pages/Products';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLocoScroll from './hooks/useLocoScroll';
import { gsap } from 'gsap';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import PageNotFound from './pages/PageNotFound'
const Test = lazy(() => import("./components/Test"));
function App() {
  gsap.registerPlugin(ScrollTrigger);
  //useLocoScroll(true)
  const [isLoading, setIsLoading] = useState(true);
  const mainContainer = useRef(null)
  console.log('App Render !')
  const ref = useRef(null);
 
   const options = {
    smooth: true,
  } 



  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(delay);
  }, []);
 
  return (
    <>
      <Navbar />
      <Grid />
      <LocomotiveScrollProvider 
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //...all the dependencies you want to watch to update the scroll EXCEPT the location one
        ]
      }
      
      containerRef={ref}
        onLocationChange={() => {
          window.scrollTo(0, 0)
          console.log('have change ...')
        }} // If you want to reset the scroll position to 0 for example
  onUpdate={() => console.log('Updated, but not on location change!')} // Will trigger on 
      >
      <main data-scroll-container ref={ref}>
        <Routes>
          <Route path="/" element={
            <>
              <div id='transition-section'><h2></h2></div>
              <div className='container'>
                <Home />
              </div>
            </>
          } />
          <Route path="/sampledev" element={
            <>
              <div id='transition-section'><h2></h2></div>
              <SampleDev />
            </>
          } />
          <Route path="/contact" element={
            <>
              <div id='transition-section'><h2></h2></div>
              <Contact />
            </>
          } />
          <Route path="/test" element={
            <Suspense fallback={
              <div style={{
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 3s ease-in-out',
              }}>
                <div>Contact</div>
              </div>
            }>
              {isLoading ? null : <Test />}
            </Suspense>
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/patternmaking" element={
            <>
              <section className='container'>
                <div id='transition-section'><h2></h2></div>
                <Navbar />
                <PatternMaking />
                <Grid />
              </section>
            </>
          } />
          <Route path="/products" element={
            <>
              <div id='transition-section'><h2></h2></div>
              <Products />
            </>
          } />
          <Route path="/pagenotfound" element={
            <>
              <div id='transition-section'><h2></h2></div>
              <section className='container'>
                <Navbar />
                <PageNotFound />
                <Grid />
              </section>
            </>
          } />
        </Routes>
      </main>
      </LocomotiveScrollProvider>
    </>
  );
}
export default App;
