import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I highly recommend Daniel for any full stack development projects. With his expertise in React, Node.js, PostgreSQL, and graphic design, he possesses a well-rounded skill set that can greatly contribute to the success of any software development endeavor.",
    },
    {
      img: profilePic2,
      review:
        "Daniel is a diligent and talented React student, always striving for excellence. His passion for React development and his commitment to continuous learning make them an asset to any team or project he is a part of.",
    },
    {
      img: profilePic3,
      review:
        "Daniel exhibited a solid understanding of React concepts, including component-based architecture, JSX syntax, state management, and lifecycle methods.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Some</span>
        <span> testimonials</span>
        <span> of my work...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
