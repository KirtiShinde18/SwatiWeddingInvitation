import React, { useEffect } from "react";

function HeroSection() {
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

  return (
    <div className="container text-center mt-5">
      <h1 className="animate-heading">शुभ विवाह सोहळा 💍</h1>
      <h2 className="animate-heading">आपले स्वागत आहे!</h2>
      <p className="animate-heading">
        आम्ही आमच्या विवाह सोहळ्यास आपले हार्दिक स्वागत करतो!
      </p>
    </div>
  );
}

export default HeroSection;
