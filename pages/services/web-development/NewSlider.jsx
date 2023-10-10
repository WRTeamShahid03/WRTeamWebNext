import React, { useEffect } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

const NewSlider = () => {

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
        <section id='devSlider'>
            <div class="sliderWrapper">
                <div class="sidebar">
                    <div style={{ background: "linear-gradient(229.99deg, #fd3737 -26%, #d35353 145%)" }}>
                        <h1>Back-end web development</h1>
                        <p>Our backend web development experts focus to developing powerful, scalable server-side applications which support website functionality. We use various programming languages such as JavaScript, PHP, Ruby and frameworks such as Django, Laravel and Ruby on Rails to build secure and efficient backend solutions for your business requirements.</p>
                    </div>
                    <div style={{ background: "linear-gradient(215.32deg, #03abf9 -1%, #055ec4 124%)" }}>
                        <h1>Back-end web development</h1>
                        <p>Our backend web development experts focus to developing powerful, scalable server-side applications which support website functionality. We use various programming languages such as JavaScript, PHP, Ruby and frameworks such as Django, Laravel and Ruby on Rails to build secure and efficient backend solutions for your business requirements.</p>
                    </div>
                    <div style={{ background: "linear-gradient(220.16deg,  #F39102 138%,  #FFE101 -8%)" }}>
                        <h1>Back-end web development</h1>
                        <p>Our backend web development experts focus to developing powerful, scalable server-side applications which support website functionality. We use various programming languages such as JavaScript, PHP, Ruby and frameworks such as Django, Laravel and Ruby on Rails to build secure and efficient backend solutions for your business requirements.</p>
                    </div>
                    <div style={{ background: "linear-gradient(221.87deg, #fbf7ff 1%, #b2b2b3 128%)" }}>
                        <h1>Back-end web development</h1>
                        <p>Our backend web development experts focus to developing powerful, scalable server-side applications which support website functionality. We use various programming languages such as JavaScript, PHP, Ruby and frameworks such as Django, Laravel and Ruby on Rails to build secure and efficient backend solutions for your business requirements.</p>
                    </div>
                </div>
                <div class="main-slide">
                    <div style={{ background: `rgb(23 79 196 / 83%) url(${'https://source.unsplash.com/featured/?car'})` }}></div>
                    <div style={{ background: `rgb(23 79 196 / 83%) url(${'https://source.unsplash.com/featured/?bike'})` }}></div>
                    <div style={{ background: `rgb(23 79 196 / 83%) url(${'https://source.unsplash.com/featured/?animal'})` }}></div>
                    <div style={{ background: `rgb(23 79 196 / 83%) url(${'https://source.unsplash.com/featured/?bird'})` }}></div>
                </div>
                <div class="controls">
                    <button class="down-button buttn">
                        <BsArrowDownCircle />
                    </button>
                    <button class="up-button buttn">
                        <BsArrowUpCircle />
                    </button>
                </div>
            </div>
        </section>

    );
};

export default NewSlider;

