import React from 'react'
import Link from 'react-router-dom'
import usePageTransition from '../hooks/usePageTransition'
import useLocoScroll from '../hooks/useLocoScroll';
export default function PageNotFound() {
 
   const { redirectPage } = usePageTransition();
   return (

         <div className='page404'>
            <a class="loop-holder top-page">
               <div class="loop-holder__text">Comming Soon &nbsp; &nbsp; &nbsp;Comming Soon &nbsp; &nbsp; &nbsp;Comming Soon &nbsp; &nbsp; &nbsp;</div>
               <div class="loop-holder__text">Comming Soon &nbsp; &nbsp; &nbsp;Comming Soon &nbsp; &nbsp; &nbsp;Comming Soon &nbsp; &nbsp; &nbsp;</div>
            </a>
            <a class="loop-holder bottom-page">
               <div class="loop-holder__text">Comming Soon &nbsp; &nbsp; &nbsp;Comming Soon &nbsp; &nbsp; &nbsp;Comming Soon &nbsp; &nbsp; &nbsp;</div>
               <div class="loop-holder__text">Comming Soon &nbsp; &nbsp; &nbsp;Comming Soon &nbsp; &nbsp; &nbsp;Comming Soon &nbsp; &nbsp; &nbsp;</div>
            </a>
            <a className='title-large'>ERROR 404</a>

            <a className='btn-home' value='/' onClick={redirectPage} >Back to Home</a>
         </div>

   )
}
