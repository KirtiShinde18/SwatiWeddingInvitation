import React, { useEffect, useRef } from 'react'
import Card from '../components/Card'

import Swastik from "./../assets/swastik.png"
import things from "../assets/Thing.png"

const Thank = () => {
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
    <div className="row text-center mt-7">
     
        <div className="col-sm-6  ">
            <img src={things} alt="" width={100} ref={el => imageRefs.current.push(el)} className='animate-on-scrolll'/>
            <div className='d-flex justify-content-center gap-2'>
                <div className=''>
                    <p className=''> चि. </p>
                    <h1>विवेक</h1>
                </div>
                <div>
                    <img src={Swastik} alt="" height={50} ref={el => imageRefs.current.push(el)} className='animate-on-scrolll'/>
                </div>
                <div>
                    <p> चि.सौ.कां. </p>
                    <h1>स्वाती</h1>
                </div>
            </div>
            <p>
                यांच्या शुभविवाह प्रसंगी आपण सहकुटुंब, सहपरिवार उपस्थित राहून वधु-वरास शुभ आशीर्वाद द्यावेत ही नम्र विनंती.
            </p>
            <h2>✨ निमंत्रक..</h2>
            <h6>समस्त शिंदे परिवार आणि क्षीरसागर  </h6>
            <h6>|| शुभकार्यास आपली उपस्थीती प्रार्थनीय || ⏳</h6>

            
        </div>
    </div>
  </Card>
  </>
}

export default Thank