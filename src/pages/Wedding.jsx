import React, { useEffect, useRef } from 'react'
import Card from '../components/Card'

import VivahImage from "./../assets/vivahPng.png"

const Wedding = () => {
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
     
        <div className="col-sm-6 ">
            <h1 className='animate-heading'>|| विवाह मुहूर्त ||</h1>
            <p> शुक्रवार दि. २०/०२/२०२६ रोजी <br /> दुपारी १२:३० वा.  </p>
        </div>
    </div>
  </Card>
  </>
}

export default Wedding