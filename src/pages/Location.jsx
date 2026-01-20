import React, { useEffect, useRef } from 'react'
import Card from '../components/Card'

import things from "../assets/Thing.png"
const Location = () => {
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
    <div className="row text-center mt-6">
     
        <div className="col-sm-6 ">
            <h1 className='animate-heading'>|| विवाहस्थळ || 
                <img src={things} alt="" width={100} ref={el => imageRefs.current.push(el)} className='animate-on-scrolll'/>
            </h1>
            <p className='fs-5 '> सप्तपदी मंगल कार्यालय, बलीराम पाटील रोड, अयोध्या नगर, <br /> N8,  सिडको,  छत्रपती संभाजी नगर  <br />महाराष्ट्र 431003 </p>
        </div>
    </div>
  </Card>
  </>
}

export default Location