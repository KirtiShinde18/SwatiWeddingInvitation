import React, { useEffect, useRef } from 'react'

import LocationQR from "./../assets/WEEDING LOCATION.jpg";

const Notification = () => {
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
  
      {/* Notification start */}

      <div 
      className='icon rounded bg-danger position-fixed top-0 start-0 m-4  d-flex justify-content-center align-items-center gap-2 '
      style={{backgroundColor: "#DCCCEC", width: "50px", height:"50px", cursor: "pointer"}}
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      >
        <i class="bi bi-music-note-beamed" style={{fontSize: "27px", color: "white"}} ></i>
        {/* <i class="bi bi-geo-alt-fill" style={{fontSize: "20px", color: "white"}} ></i> */}
      </div>

      

    
    {/* Notification Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title notificationh3" id="exampleModalLabel">
                  {/* ✨ Bless the Couple */}
                  <h1 className='mt-3'>विवाहस्थळ 📍</h1>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <p className="fst-italic mt-3">
                  {/* 🎁 Your Presence Is Our Present Your love & blessings mean
                  more to us than any gift 💖 */}
            
                </p>

                <p>सप्तपदी मंगल कार्यालय, बलीराम पाटील रोड, अयोध्या नगर, N 8, सिडको, छत्रपती संभाजी नगर महाराष्ट्र 431003</p>
                <img src={LocationQR} alt="" width={150} ref={el => imageRefs.current.push(el)} className='animate-on-scrolll'/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-info" data-bs-dismiss="modal">
                  {/* See You There ✨ */}
                  तिथे भेटू ✨
                </button>
              </div>
            </div>
          </div>
        </div>
    {/* Notification end */}

  </>
}

export default Notification