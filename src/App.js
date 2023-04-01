
import { useState, useEffect, lazy, Suspense, useRef } from 'react'
import './styles/App.css';
import './libs/locomotive-scroll.css';
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
import PageNotFound from './pages/PageNotFound'
const Test = lazy(() => import("./components/Test"));
function App() {
  // useLocoScroll(true)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <div id='transition-section'><h2></h2></div>
            <section className='container'>
              <Navbar />
              <Home />
              <Grid />
            </section>
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/patternmaking" element={
          <>
            <div id='transition-section'><h2></h2></div>
            <section className='container'>
              <Navbar />
              <PatternMaking />
              <Grid />
            </section>
          </>
        }/>
   
        <Route path="/products" element={
          <>
            <div id='transition-section'><h2></h2></div>
            <section className='container'>
              <Navbar />
              <Products />
              <Grid />
            </section>
          </>
        }/>

        <Route path="/pagenotfound" element={
         <>
         <div id='transition-section'><h2></h2></div>
``           <section className='container'>
           <Navbar />
           <PageNotFound/>
           <Grid />
         </section>
       </>
       } />
        <Route path="/sampledev" element={
          <>
            <div id='transition-section'><h2></h2></div>
  ``            <section className='container'>
              <Navbar />
              <SampleDev />
              <Grid />
            </section>
          </>
        } />
      </Routes>




    </>
  );
}

export default App;
