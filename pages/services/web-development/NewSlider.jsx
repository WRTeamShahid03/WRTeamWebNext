import React, { Component } from 'react';
import { Expo, TweenMax } from 'gsap'; // Import TweenMax from gsap
import WheelIndicator from 'wheel-indicator'; // Import WheelIndicator

import blog1 from '../../../src/Asset/Images/Blog_1.png'
import blog2 from '../../../src/Asset/Images/Blog_2.png'
import blog3 from '../../../src/Asset/Images/Blog_3.png'

class NewSilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currSl: 0,
            divNum: 0,
            animInProgress: false,
        };
    }

    componentDidMount() {
        this.initSlider();
    }

    initSlider() {
        const slideHeight = this.getSlideHeight();
        const divNum = document.querySelectorAll('#MsMmSlider > div').length;
        this.setState({
            divNum,
            slideHeight,
        });
        const indicator = new WheelIndicator({
            elem: document.querySelector('#MsMmSlider'),
            callback: (e) => this.scrollMe(e.direction),
        });
        indicator.getOption('preventMouse');
    }

    getSlideHeight() {
        if (document.querySelector('#preview')) {
            return document.querySelector('#items').clientHeight;
        }
        return document.querySelector('#MsMmSlider').clientHeight;
    }

    scrollMe(direction) {
        if (this.state.animInProgress) {
            return;
        }
        let newScrollTop = this.state.currSl * this.state.slideHeight;
        let newAltScrollTop = this.state.slideHeight - (this.state.currSl + 1) * this.state.slideHeight;

        if (direction === 'down' && this.state.currSl < this.state.divNum - 1) {
            this.setState(
                {
                    animInProgress: true,
                    currSl: this.state.currSl + 1,
                },
                () => {
                    newScrollTop = this.state.currSl * this.state.slideHeight;
                    newAltScrollTop = this.state.slideHeight - (this.state.currSl + 1) * this.state.slideHeight;
                    const percent = (100 / (this.state.divNum - 1)) * this.state.currSl;
                    const colorCible = this.getCurrentSlideColor(this.state.currSl + 1);
                    TweenMax.to(document.querySelectorAll('#Indic > *'), 0.6, {
                        height: `${percent}%`,
                        backgroundColor: colorCible,
                        ease: Expo.easeOut,
                    });

                    const indicElement = document.querySelector('#Indic > * > *');
                    if (indicElement) {
                        indicElement.innerHTML = `${this.state.currSl + 1} &ndash; ${this.state.divNum}`;
                        indicElement.style.color = colorCible;
                    } else {
                        console.error("Indic element not found in the DOM.");
                    }

                    TweenMax.to(document.querySelectorAll('.col:nth-child(1) > div'), 0.6, {
                        scrollTo: { x: 0, y: newScrollTop },
                        ease: Expo.easeOut,
                    });
                    TweenMax.to(document.querySelectorAll('.col:nth-child(2) > div'), 0.6, {
                        scrollTo: { x: 0, y: newAltScrollTop },
                        ease: Expo.easeOut,
                        onComplete: () => {
                            this.setState({ animInProgress: false });
                        },
                    });
                }
            );
        } else if (direction === 'up' && this.state.currSl > 0) {
            this.setState(
                {
                    animInProgress: true,
                    currSl: this.state.currSl - 1,
                },
                () => {
                    newScrollTop = this.state.currSl * this.state.slideHeight;
                    newAltScrollTop = this.state.slideHeight - (this.state.currSl + 1) * this.state.slideHeight;
                    const percent = (100 / (this.state.divNum - 1)) * this.state.currSl;
                    const colorCible = this.getCurrentSlideColor(this.state.currSl + 1);
                    TweenMax.to(document.querySelectorAll('#Indic > *'), 0.6, {
                        height: `${percent}%`,
                        backgroundColor: colorCible,
                        ease: Expo.easeOut,
                    });

                    const indicElement = document.querySelector('#Indic > * > *');
                    if (indicElement) {
                        indicElement.innerHTML = `${this.state.currSl + 1} &ndash; ${this.state.divNum}`;
                        indicElement.style.color = colorCible;
                    } else {
                        console.error("Indic element not found in the DOM.");
                    }

                    TweenMax.to(document.querySelectorAll('.col:nth-child(1) > div'), 0.6, {
                        scrollTo: { x: 0, y: newScrollTop },
                        ease: Expo.easeOut,
                    });
                    TweenMax.to(document.querySelectorAll('.col:nth-child(2) > div'), 0.6, {
                        scrollTo: { x: 0, y: newAltScrollTop },
                        ease: Expo.easeOut,
                        onComplete: () => {
                            this.setState({ animInProgress: false });
                        },
                    });
                }
            );
        }
    }

    getCurrentSlideColor(slideNumber) {
        const slideSelector = `.col:nth-child(1) > div > div:nth-child(${slideNumber})`;
        const slideElement = document.querySelector(slideSelector);
        if (slideElement) {
            return slideElement.getAttribute('data-color');
        }
        return '#FFFFFF'; // Default color if not found
    }

    render() {
        return (
            <>
                <div id="MsMmSlider">
                    <div data-color="#007cc2" data-img={blog1.src}><span><strong>Scroll!</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /><a href="">Call 2 action</a></span></div>
                    <div data-color="#343434" data-img={blog2.src}><span><strong>Cities</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /><a href="">Call 2 action</a></span></div>
                    <div data-color="#79a4ad" data-img={blog3.src}><span><strong>Colors</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /><a href="">Call 2 action</a></span></div>
                    <div data-color="#a4ca3f" data-img={blog1.src}><span><strong>Food</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /><a href="">Call 2 action</a></span></div>
                    <div data-color="#ff8d61" data-img={blog2.src}><span><strong>Nature</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /><a href="">Call 2 action</a></span></div>
                    <div data-color="#5e1f10" data-img={blog3.src}><span><strong>End</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /><a href="">Call 2 action</a></span></div>
                </div>
                <div id="arrow"></div>
                <div id="Indic"><div><i></i></div></div>
            </>

        );
    }
}

export default NewSilder;







