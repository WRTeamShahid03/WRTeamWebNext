import React, { useCallback, useRef } from 'react'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { LiaStarSolid } from 'react-icons/lia';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import dobleQuotes from '../../src/Asset/Icons/double-quotes-l.svg'

const Testimonials = () => {

    const swiperData = [
        {
            id: 1,
            text: "I had a great experience working with XYZ Tech Solutions. Their design quality is top-notch, and the user interface they developed for our project was intuitive and visually appealing. The attention to detail in their design work is commendable.",
            name: "JohnDeo",
            work: "For Design Quality",
            rating: "4.5"
        },
        {
            id: 2,
            text: "The code quality was exceptional as well. The development team's expertise was evident in the well-structured and optimized codebase. RobertBrown's leadership ensured timely delivery without compromising on quality.",
            name: "MikeJohnson",
            work: "For Code Quality",
            rating: "4.8"
        },
        {
            id: 3,
            text: "The customer support provided by the company was top-notch. SarahLee and the team were always available to address our concerns and provided timely updates on the project's progress.",
            name: "SarahLee",
            work: "For Customer Support",
            rating: "5.0"
        },
        {
            id: 4,
            text: "I had a great experience working with XYZ Tech Solutions. Their design quality is top-notch, and the user interface they developed for our project was intuitive and visually appealing. The attention to detail in their design work is commendable.",
            name: "JohnDeo",
            work: "For Design Quality",
            rating: "4.5"
        },
        {
            id: 5,
            text: "I had a great experience working with XYZ Tech Solutions. Their design quality is top-notch, and the user interface they developed for our project was intuitive and visually appealing. The attention to detail in their design work is commendable.",
            name: "JohnDeo",
            work: "For Design Quality",
            rating: "4.5"
        },
        {
            id: 6,
            text: "I had a great experience working with XYZ Tech Solutions. Their design quality is top-notch, and the user interface they developed for our project was intuitive and visually appealing. The attention to detail in their design work is commendable.",
            name: "JohnDeo",
            work: "For Design Quality",
            rating: "4.5"
        },

    ]

    const breakpoints = {
        320: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        375: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        576: {
            slidesPerView: 1.5,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 2,

        },
        992: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,

        }
    };


    const renderBullet = (index, className) => {
        return `<span class="${className}" style="
            outline: 1px solid #000;
            font-size: 20px;
            padding: 8px;
            border: 2px solid #fff;" id="renderBullets">
    </span>`;
    };

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        console.log("test")
        if (!sliderRef.current) return;

        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

  return (
    <section id="testimonials" className='container'>
                <div className="testiUpperDiv">
                    <h5 className='common_span'>Our <span>Testimonials</span></h5>
                    <h6 className='testiHeadline' data-aos="fade-right" data-aos-duration="2000">Real  <span> Words</span> From Real <span>Clients</span></h6>
                </div>
                <div className="testSlider">
                    <Swiper
                        ref={sliderRef}
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        modules={[FreeMode, Pagination]}
                        pagination={{
                            clickable: true,
                            renderBullet: renderBullet
                        }}
                        navigation
                        className='testiSwiper'
                        breakpoints={breakpoints}
                    // data-aos="fade-up" data-aos-duration="2000"
                    >
                        {
                            swiperData.map((ele, index) => {
                                return <>
                                    <SwiperSlide key={index}>
                                        <div className="card swiperCard">
                                            <div className="card-header">
                                                <span className="testiImg">
                                                    <img src={dobleQuotes.src} alt="" />
                                                </span>
                                            </div>
                                            <div className="card-body">
                                                <div className='testiDesc'>
                                                    <span className='swiperDesc'>{ele.text}</span>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="testiFoot">
                                                    <div className="footText">
                                                        <span className='swiperName'>{ele.name}</span>
                                                        <span className='swiperWork'>{ele.work}</span>
                                                    </div>
                                                    <div className="footRating">
                                                        <span className='swiperRating'>{ele.rating}</span>
                                                        <span><LiaStarSolid size={28} color='#FFA800' /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </>
                            })
                        }
                    </Swiper>
                    <div className="swiper-button-prev" onClick={handlePrev} >
                        <span><BiLeftArrowAlt color='white' size={42} /></span>
                    </div>
                    <div className="swiper-button-next" onClick={handleNext}>
                        <span><BiRightArrowAlt color='white' size={42} /></span>
                    </div>
                </div>
            </section>
  )
}

export default Testimonials
