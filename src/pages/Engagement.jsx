import React, { useEffect, useRef } from 'react'
import Card from '../components/Card'

import RingCeremonyImage from "./../assets/RingCeremony.png"

const Engagement = () => {

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
    <div className="row text-center ">
        <div className="col-sm-6 pb-5">
            <h1 className='animate-heading'> || साखरपुडा ||</h1>
            <p> गुरुवारी दि. १९/०२/२०२६ रोजी <br /> दुपारी ०३:०० वा. <br /> (विवाहस्थळी)</p>
        </div>

        <div className="col-sm-6 pb-3">
            <img src={RingCeremonyImage} alt="" width={200} ref={el => imageRefs.current.push(el)} className='animate-on-scrolll'/>
        </div>

    </div>
  </Card>
  </>
}

export default Engagement