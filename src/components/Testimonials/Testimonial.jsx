import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.png";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Development: Software Ontwikkeling in .NET en Java doe ik graag, daarbij kan ik ook werken in Javascript,React,React-Native,Sql,Python. ",
    },
    {
      img: profilePic2,
      review:
        "Web Development: Naast programmeren in mijn vrije tijd, maak ik vaak websites zodat ik nieuwe technologieën kan proberen.",
    },
    {
      img: profilePic3,
      review:
        "Mobile Development: Ik kan apps ontwikkelen in React-native. Daarnaast ik ben flutter ook aan het leren, omdat nieuwe technologieën leren kennen is mijn hobby.",
    },
    {
      img: profilePic4,
      review:
        "Opzoek naar werk: Ik ben opzoek naar een job. Heb je job voor mij? Arzel niet mij te contacteren via 'Hire me' knoop of via email: ali.maes@outlook.com.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Ik ben een gemotiveerd developer </span>
        <span>Opzoek naar een job </span>
        <span>...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
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
