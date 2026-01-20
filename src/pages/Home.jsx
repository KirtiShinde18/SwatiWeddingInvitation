import React, { useEffect, useRef } from 'react'


// images 
import Swastik from "./../assets/swastik.png"
import Wedding1 from "./../assets/wedding.png"

import Card from '../components/Card'


const Home = () => {
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

    //=========================== Heading Animation start ===========================  
    useEffect(() => {
        const elements = document.querySelectorAll(".animate-heading");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) entry.target.classList.add("show");
              else entry.target.classList.remove("show");
            });
          },
          { threshold: 0.3 }
        );
    
        elements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect();
      }, []);
    // Heading Animation end

  return <>
  <div className="container-fluid">
    {/* <Notification/> */}
        <Card>
            <div className="row text-center ">
                <div className="col-sm-6 text-center mt-5">
                    <div className=''>
                        <h2 className='fw-bold animate-heading '>सप्रेम नमस्कार , </h2>
                        <p className='fw-semibold fs-5'>आपणास आग्रहाचे निमंत्रण !</p>
                        <span className='fw-semibold'>शुभविवाह सोहळा</span>
                    </div>
                    <div className='d-flex justify-content-center gap-2'>
                        <div className=''>
                            <p className=''> चि. </p>
                            <h1>विवेक</h1>
                        </div>
                        <div>
                            <img src={Swastik} alt="" height={50} />
                        </div>
                        <div>
                            <p> चि.सौ.कां. </p>
                            <h1>स्वाती</h1>
                        </div>
                    </div>
                    {/* <img src={Wedding1} alt="" width={200}/> */}
                    
                </div>

                <div className="col-sm-6 ">
                    <img src={Wedding1} alt="" width={300} ref={el => imageRefs.current.push(el)} className='animate-on-scrolll'/>
                </div>


            </div>

        </Card>
  </div>
  </>
}

export default Home