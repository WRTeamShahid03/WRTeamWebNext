import React, { useEffect } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

const NewSlider = ({ newSwiperData }) => {

    useEffect(() => {

        const upBtn = document.querySelector('.up-button');
        const downBtn = document.querySelector('.down-button');
        const container = document.querySelector('.sliderWrapper');
        const siderbar = document.querySelector('.sidebar');
        const mainSlide = document.querySelector('.main-slide');
        const slidesCount = mainSlide.querySelectorAll('div').length;

        let activeSlideIndex = 0;

        // siderbar.style.top = `-${(slidesCount - 1) * 100}vh`;

        upBtn.addEventListener('click', () => {
            changesSlide('up');
        })

        downBtn.addEventListener('click', () => {
            changesSlide('down');
        })

        function changesSlide(direction) {
            if (direction === 'up') {
                activeSlideIndex++;
                if (activeSlideIndex === slidesCount) {
                    activeSlideIndex = 0;
                }
            } else if (direction === 'down') {
                activeSlideIndex--;
                if (activeSlideIndex < 0) {
                    activeSlideIndex = slidesCount - 1;
                }
            }

            const height = 500; // Change this to match your slide height
            const translateYValue = activeSlideIndex * height;

            mainSlide.style.transform = `translateY(-${translateYValue}px)`;
            siderbar.style.transform = `translateY(${-translateYValue}px)`;
        }

    }, [])

    return (
        <section className='devSlider'>
            <div className="sliderWrapper">
                <div className="sidebar">
                    {
                        newSwiperData.map((ele) => {
                            return <div style={{ background: "#EDEDED" }} key={ele.id}>
                                <h1>{ele.title}</h1>
                                <p>{ele.desc}</p>
                            </div>
                        })
                    }
                </div>
                <div className="main-slide">
                    {
                        newSwiperData.map((ele)=>{
                            return <div style={{ background: `url(${ele.img})` }} key={ele.id}></div>
                        })
                    }

                    {/* <div style={{ background: `url(${'https://source.unsplash.com/featured/?car'})` }}></div>
                    <div style={{ background: `url(${'https://source.unsplash.com/featured/?bike'})` }}></div>
                    <div style={{ background: `url(${'https://source.unsplash.com/featured/?animal'})` }}></div>
                    <div style={{ background: `url(${'https://source.unsplash.com/featured/?bird'})` }}></div>
                    <div style={{ background: `url(${'https://source.unsplash.com/featured/?home'})` }}></div>
                    <div style={{ background: `url(${'https://source.unsplash.com/featured/?nature'})` }}></div> */}
                </div>
                <div className="controls">
                    <button className="down-button buttn">
                        <BsArrowDownCircle />
                    </button>
                    <button className="up-button buttn">
                        <BsArrowUpCircle />
                    </button>
                </div>
            </div>
        </section>

    );
};

export default NewSlider;

