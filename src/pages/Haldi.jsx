import React, { useEffect, useRef } from 'react'
import Card from '../components/Card'

import haldiImage from "./../assets/haldi.png"

const Haldi = () => {
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
    <div className="row text-center">
        <div className="col-sm-6">
            
        </div>
        <div className="col-sm-6 mt-7">
            <h1 className='animate-heading'> || हळदी समारंभ || </h1>
            <p>गुरुवारी दि. १९/०२/२०२६ रोजी <br />रात्री ०८:०० वा. <br /> (विवाहस्थळी) </p>
        </div>
    </div>
  </Card>
  </>
}

export default Haldi