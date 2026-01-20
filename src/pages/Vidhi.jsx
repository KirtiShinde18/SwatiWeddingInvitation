import React, { useEffect, useRef } from 'react'
import Card from '../components/Card'

import VidhiImage from "./../assets/vidhi.png"

const Vidhi = () => {
        //=========================== Image Animation start =========================== 
        // Image
        const imageRefs = useRef([]);
        imageRefs.current = []  // reset on each render
        
        useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            } else {
              entry.target.classList.remove("show");
            }
          });
        },
        { threshold: 0.3 }
      );
    
      imageRefs.current.forEach(img => {
        if (img) observer.observe(img);
      });
    
      return () => observer.disconnect();
      }, []);
        // image Animation end 

  return <>
  <Card>
    <div className="row text-center pb-5">

        <div className="col-sm-6 mb-5">
            <img src={VidhiImage} alt="" width={230} ref={el => imageRefs.current.push(el)} className='animate-on-scrolll'/>
        </div>

        <div className="col-sm-6 pb-5 mb-5">
            <h1 className='animate-heading'>|| विधी ||</h1>
            <p>  शुक्रवार  दि. २०/०२/२०२६ रोजी  <br /> सकाळी ९:०० ते १०:३० वा. <br /> (विवाहस्थळी)  </p>
        </div>

      
    </div>
  </Card>
  </>
}

export default Vidhi