import React, { useEffect } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

const Slider = () => {

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
                activeSlideIndex = slidesCount - 1
            }
        }

        // const height = container.clientHeight;
        const height = 500;

        mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

        siderbar.style.transform = `translateY(${activeSlideIndex * height}px)`
    }

    }, [])

    return (
        <section id='devSlider'>
            <div class="sliderWrapper">
                <div class="sidebar">
                    <div style={{ background: " linear-gradient(229.99deg, #fd3737 -26%, #d35353 145%)" }}>
                        <h1>Русская кухня</h1>
                        <p>Изысканная еда и напитки</p>
                    </div>
                    <div style={{ background: " linear-gradient(215.32deg, #03abf9 -1%, #055ec4 124%)" }}>
                        <h1>Итальянская кухня</h1>
                        <p>Изысканная еда и напитки</p>
                    </div>
                    <div style={{ background: " linear-gradient(220.16deg,  #F39102 138%,  #FFE101 -8%)" }}>
                        <h1>Японская кухня</h1>
                        <p>Изысканная еда и напитки</p>
                    </div>
                    <div style={{ background: " linear-gradient(221.87deg, #fbf7ff 1%, #b2b2b3 128%)" }}>
                        <h1>Напитки на любой вкус</h1>
                        <p>Изысканная еда и напитки</p>
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
                        <BsArrowUpCircle />
                    </button>
                    <button class="up-button buttn">
                        <BsArrowDownCircle />
                    </button>
                </div>
            </div>
        </section>

    );
};

export default Slider;


