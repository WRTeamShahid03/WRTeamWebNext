'use client'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';



//Images
import eBroker from '../../src/Asset/eBroker.svg'
import luxuryHome from '../../src/Asset/luxury_home.jpg'

import flutter from '../../src/Asset/flutterwave.svg'
import razorPay from '../../src/Asset/razorpay.svg'
import paypal from '../../src/Asset/paypal.png'
import payStack from '../../src/Asset/paystack-2.svg'
import phone1 from '../../src/Asset/Images/01-mobile mockup.png'
import phone2 from '../../src/Asset/Images/02-mobile mockup.png'
import phone3 from '../../src/Asset/Images/03-mobile mockup.png'
import phone4 from '../../src/Asset/Images/04-mobile mockup.png'
import phone5 from '../../src/Asset/Images/05-mobile mockup.png'
import phone6 from '../../src/Asset/Images/06-mobile mockup.png'
import dynamicIcon from '../../src/Asset/Icons/dynamically_add.svg'
import areaCovIcon from '../../src/Asset/Icons/area_converter.svg'
import rtlIcon from '../../src/Asset/Icons/rtl_suport.svg'
import lightDarkIcon from '../../src/Asset/Icons/dark_light.svg'
import bookmarkIcon from '../../src/Asset/Icons/bookmark.svg'
import notificationIcon from '../../src/Asset/Icons/notification.svg'
import OtherPhoneimg from '../../src/Asset/Images/Editable layers.png'
import articlesIcon from '../../src/Asset/Icons/articles.svg'
import imgsliderIcon from '../../src/Asset/Icons/Image slider.svg'
import videoIcon from '../../src/Asset/Icons/video.svg'
import dashboardIcon from '../../src/Asset/Icons/dashboard.svg'
import manageproIcon from '../../src/Asset/Icons/manage_Properties.svg'
import systemsettIcon from '../../src/Asset/Icons/system_setting.svg'
import appStore from '../../src/Asset/app_store.svg'
import playStore from '../../src/Asset/Google Play.svg'
import bannerPhone1 from '../../src/Asset/Images/Editable layers.png'
import bannerPhone2 from '../../src/Asset/Images/Editable layers 1.png'
import flutterApp from '../../src/Asset/Images/flutterIcon.png'
import webCode from '../../src/Asset/Images/webIcon.png'
import adminPanel from '../../src/Asset/Images/adminPanelIcon.png'
import uiCode from '../../src/Asset/Images/uiCodeIcon.png'
import getSupp from '../../src/Asset/Images/support.gif'
import documentation from '../../src/Asset/Images/documantation.gif'
import preSale from '../../src/Asset/Images/question.gif'
import hireUS from '../../src/Asset/Images/hireUs.gif'
import mostView from '../../src/Asset/Most_View_4.jpg'
import whyEbrokerImg from '../../src/Asset/Images/whyEBrokerImg.jpg'
import moreProd from '../../src/Asset/moreProd.png'




const Page = () => {

    const [headerTop, setHeaderTop] = useState(0);
    const [licencePrice, setLicencePrice] = useState(59);
    const [extended, setExtended] = useState(false);
    const [scroll, setScroll] = useState(0);


    useEffect(() => {

        AOS.init();

        const divider = typeof document !== 'undefined' && document.querySelector(".divider");
        setHeaderTop(divider.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const viewMore = () => {

        setExtended(true)

        let viewBtn = typeof document !== 'undefined' && document.querySelector('.viewMore')

        if (extended) {
            viewBtn.innerHTML = 'View Less';
        }

        else {
            viewBtn.innerHTML = 'View More';
        }

        if (viewBtn.innerHTML === "View Less") {

            setExtended(false)
            viewBtn.innerHTML = "View More";
        }

        else {
            viewBtn.innerHTML = "View less";
        }
    }



    return (
        <>
            <section id="heroSect" style={{
                background: `url(${luxuryHome.src})`,
                backgroundSize: 'cover'
            }}>

                <div className="container">
                    <div className="bannerContainer row">
                        <div className="logo">
                            <h2><img src={eBroker.src} alt="eBroker" /></h2>
                        </div>
                        <div className="para1">
                            <p>Real Estate Property Buy-Rent-Sell Flutter with Laravel Admin Panel</p>
                        </div>
                        <div className="para2">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum minima est, aliquam rem perspiciatis, unde nisi sint sapiente voluptas necessitatibus sequi incidunt. Quia, iusto quibusdam?</p>
                        </div>
                        <div className="detail">
                            <div className="detail1">
                                <h3>Last Update : <span> 29 May, 2023 </span></h3>
                                <h3>Created : <span> 29 May, 2023 </span></h3>
                                <h3>Version : <span> Flutter 3.x </span></h3>
                            </div>
                            <div className="detail2">
                                <h3>Category : <span> Flutter , Latest Premium App, Mobile </span></h3>
                                <h3>   Files Included : <span> Dart, YAML, JavaScript JSON, .kotlin, .h, JavaScript JS, CSS, PHP, HTML </span></h3>
                            </div>
                        </div>
                        <div className="buttons row">
                            <button className='common_btn col-md-3 col-lg-6 col-20'>Demo Android App</button>
                            <button className='common_btn col-md-3 col-lg-6 col-20'>Demo iOS App</button>
                            <button className='common_btn col-md-3 col-lg-6 col-20'>Admin Panel</button>
                            <button className='common_btn col-md-3 col-lg-6 col-20'>Live Demo</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* heroSect ends  */}


            <section className={`divider ${scroll > headerTop ? "is-sticky " : ""}`}>

                <div className="container text-center">
                    <div className="row row-cols-4">
                        <div className="col price">
                            <span className="heading" id='licencePrice'>
                                Price
                            </span>
                            <span className='content' id='dollar'>
                                $ {licencePrice}
                            </span></div>
                        <div className="col">
                            <span className="heading">
                                Sales
                            </span>
                            <span className="content">
                                46
                            </span></div>
                        <div className="col">
                            <span className="heading">
                                Rating
                            </span>
                            <span className="content ">
                                <div className="ratingContent">

                                    <span>
                                        <FaStar className='dividerStars' size={20} />
                                        <FaStar className='dividerStars' size={20} />
                                        <FaStar className='dividerStars' size={20} />
                                        <FaStar className='dividerStars' size={20} /> </span>
                                    <span> 4.0  </span>
                                </div>

                            </span></div>
                        <div className="col">

                            <select className="form-select" aria-label="Default select example" onChange={(e) => setLicencePrice(e.target.value)}>
                                <option id='regular' value={59}> Regular Licence</option>
                                <option id='extended' value={320}>Extended License</option>
                            </select>

                        </div>
                    </div>
                </div>
                <button className="common_btn"><span className="button-content">BUY NOW </span></button>
            </section>
            {/* divider ends  */}


            <section id='banner2'>

                <div className="banner2Cont" style={{
                    background: `url(${whyEbrokerImg.src})`,
                    backgroundSize: 'cover'
                }}>

                    <div className="whyEbro">
                        <h2>Why eBroker ?</h2>

                        <p>eBroker can help you easily sell properties by connecting you with the right buyers. With its robust features and intuitive user interface, streamline your real estate sales process.</p>

                    </div>

                </div>

            </section>
            {/* banner2 ends  */}


            <section id="payments">

                <h1>Payment gateways</h1>

                {/* <hr /> */}
                <div className="payImages">
                    <div className="container text-center">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                            <div className="paygetwaysLogo">
                                <div className="image-container">
                                    <img src={flutter.src} alt="" className='hoverImg1' />
                                    <img src={flutter.src} alt="" className='hoverImg2' />
                                </div>
                                <div className="image-container">
                                    <img src={razorPay.src} alt="" className='hoverImg1' />
                                    <img src={razorPay.src} alt="" className='hoverImg2' />
                                </div>
                                <div className="image-container">
                                    <img src={paypal.src} alt="" className='hoverImg1' />
                                    <img src={paypal.src} alt="" className='hoverImg2' />
                                </div>
                                <div className="image-container">
                                    <img src={payStack.src} width={20} alt="" className='hoverImg1' />
                                    <img src={payStack.src} width={20} alt="" className='hoverImg2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
            </section>
            {/* Payments ends  */}


            <section id='topFea'>
                <h1>Top Feature</h1>

                <div className="topFeaWrapper">


                    <div className="feaImg mb-5 fisrtLastFea">
                        <div className="imgback">
                            <img src={phone1.src} height="auto" alt="" />
                        </div>
                        <div className="feaHeadlines">
                            <h2 className=''>Subscription</h2>
                            <p data-aos="fade-left" data-aos-duration="1000">This Feature Allows Users More Freedom to Add Multiple Properties and Promote Assets Based on Subscription Packages.</p>

                        </div>
                    </div>

                    <div className="feaImg2">

                        <div className="feaHeadlines">
                            <h2 className=''>Chat</h2>
                            <p data-aos="fade-right" data-aos-duration="1000">It Will Help to Direct Communication with Buyers and Sellers</p>
                        </div>
                        <div className="imgBack">
                            <img src={phone6.src} height="auto" alt="" />
                        </div>
                    </div>

                    <div className="feaImg secondCont-topFea">
                        <div className="imgBack">
                            <img src={phone5.src} height="auto" alt="" />
                        </div>
                        <div className="feaHeadlines">
                            <h2 className=''>Smart Featured Ads</h2>
                            <p data-aos="fade-left" data-aos-duration="1000">It will be used to promote properties to get more visitors</p>

                        </div>
                    </div>

                    <div className="feaImg2">

                        <div className="feaHeadlines">
                            <h2 className=''>Dynamic Facilities</h2>
                            <p data-aos="fade-right" data-aos-duration="1000">Directly you can create and assign facilities of any category</p>
                        </div>
                        <div className="imgBack">
                            <img src={phone4.src} alt="" />
                        </div>
                    </div>

                    <div className="feaImg mb-3 secondCont-topFea fisrtLastFea">
                        <div className="imgBack">
                            <img src={phone3.src} height="auto" alt="" />
                        </div>
                        <div className="feaHeadlines">
                            <h2 className=''>360&deg;  image preview</h2>
                            <p data-aos="fade-left" data-aos-duration="1000">Display your assets with 3D images and get a high engagement of property</p>

                        </div>
                    </div>

                    <div className="feaImg2">

                        <div className="feaHeadlines">
                            <h2 className=''>Property List on Map</h2>
                            <p data-aos="fade-right" data-aos-duration="1000">It Will Help Customers Search, Prioritize & Find Relevant Properties.</p>
                        </div>
                        <div className="imgBack">
                            <img src={phone2.src} height="auto" alt="" />
                        </div>
                    </div>

                </div>
            </section>
            {/* TopFea ends  */}

            <section id="otherFea">

                <h1>Other Features</h1>

                <div className="featuresWrapper container">

                    <div className="feaList1">

                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>Dynamically Add Languages</span>
                            <img src={dynamicIcon.src} alt="dynamicIcon" />

                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>Area Converter</span>
                            <img src={areaCovIcon.src} alt="areaCovIcon" />
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>RTL support</span>
                            <img src={rtlIcon.src} alt="rtlIcon" />
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>Light/Dark Theme</span>
                            <img src={lightDarkIcon.src} alt="lightDarkIcon" />
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>Bookmark Feature</span>
                            <img src={bookmarkIcon.src} alt="bookmarkIcon" />
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />

                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>Notifications</span>
                            <img src={notificationIcon.src} alt="notificationIcon" />
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                    </div>


                    <div className="phoneImg">
                        <img src={OtherPhoneimg.src} alt="OtherPhoneimg" />
                    </div>



                    <div className="feaList2">

                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <img src={articlesIcon.src} alt="articlesIcon" />
                            <span className='leftFeatures'>Articles</span>
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />

                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <img src={imgsliderIcon.src} alt="imgsliderIcon" />
                            <span className='leftFeatures'>Image Slider</span>
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <img src={videoIcon.src} alt="videoIcon" />
                            <span className='leftFeatures'>Video</span>
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <img src={dashboardIcon.src} alt="dashboardIcon" />
                            <span className='leftFeatures'>Super Dashboard</span>
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <img src={manageproIcon.src} alt="manageproIcon" />
                            <span className='leftFeatures'>Create and Manage Properties</span>
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <img src={systemsettIcon.src} alt="systemsettIcon" />
                            <span className='leftFeatures'>System Setting for App</span>
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />

                    </div>

                    <div className={`phoneFeaList ${extended ? "extended" : ""}`}>


                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>Dynamically Add Languages</span>
                            <img src={dynamicIcon.src} alt="dynamicIcon" />

                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>Area Converter</span>
                            <img src={areaCovIcon.src} alt="areaCovIcon" />
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>RTL support</span>
                            <img src={rtlIcon.src} alt="rtlIcon" />
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>Light/Dark Theme</span>
                            <img src={lightDarkIcon.src} alt="lightDarkIcon" />
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />
                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>Bookmark Feature</span>
                            <img src={bookmarkIcon.src} alt="bookmarkIcon" />
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />

                        <div className="listWrapper" data-aos="fade-up" data-aos-duration="1000">
                            <span className='leftFeatures'>Notifications</span>
                            <img src={notificationIcon.src} alt="notificationIcon" />
                        </div>
                        <hr data-aos="fade-up" data-aos-duration="1000" />

                        {/* list2  */}

                        <div className="listWrapper" >
                            <span className='leftFeatures'>Articles</span>
                            <img src={articlesIcon.src} alt="articlesIcon" />
                        </div>

                        <div className="listWrapper" >
                            <span className='leftFeatures'>Image Slider</span>
                            <img src={imgsliderIcon.src} alt="imgsliderIcon" />
                        </div>

                        <div className="listWrapper">
                            <span className='leftFeatures'>Video</span>
                            <img src={videoIcon.src} alt="videoIcon" />
                        </div>

                        <div className="listWrapper">
                            <span className='leftFeatures'>Super Dashboard</span>
                            <img src={dashboardIcon.src} alt="dashboardIcon" />
                        </div>

                        <div className="listWrapper" >
                            <span className='leftFeatures'>Create and Manage Properties</span>
                            <img src={manageproIcon.src} alt="manageproIcon" />
                        </div>

                        <div className="listWrapper">
                            <span className='leftFeatures'>System Setting for App</span>
                            <img src={systemsettIcon.src} alt="systemsettIcon" />
                        </div>

                    </div>

                </div>

                <span className='viewMore' onClick={viewMore} data-aos="fade-up" data-aos-duration="1000"> View More </span>

            </section>
            {/* OtherFea ends  */}

            <button className="mainBuynow">BUY NOW</button>


            <section id='bannerSect'>
                <div className="bannerCont">

                    <div className="bannerHeadlines">
                        <h2>Let&apos;s Download it demo from Comfortable With Both Platforms</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra varius dignissim. Mauris bibendum augue orci, sed scelerisque leo consectetur eget. Ut in nisl viverra, iaculis quam vitae, blandit sem</p>
                        <div className="bannerBtn">
                            <img src={appStore.src} alt="" />

                            <img src={playStore.src} alt="" />

                        </div>
                    </div>

                    <div className="bannerImg phoneBanner">

                        <div className="phoneHoverImgs">

                            <img src={bannerPhone2.src} className='phone2' alt="" />
                            <img src={bannerPhone1.src} className='phoneHover2' alt="" />
                        </div>

                    </div>

                    <div className="bannerImg container d-flex align-items-center justify-content-center flex-wrap" id='lapBanner'>

                        <div className="phoneHoverImgs">
                            <div className="box">
                                <div className="body">
                                    <div className="imgContainer">

                                        <img src={bannerPhone1.src} className='phoneHover2' alt="bannerPhone1" />

                                    </div>
                                    <div className="content d-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <img src={bannerPhone2.src} className='phone2' alt="bannerPhone2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* BannerSect ends  */}

            <section id='getCode'>

                <h2>What Will You Get!</h2>

                <div className="text-center getCodeContainer">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">

                        <div className="col">
                            <Card >
                                <Card.Img variant="top" src={flutterApp.src} />
                                <Card.Body>
                                    <Card.Title>Flutter App Code</Card.Title>
                                    <Card.Text>
                                        With Documentation
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card >
                                <Card.Img variant="top" src={webCode.src} />
                                <Card.Body>
                                    <Card.Title>Web Code</Card.Title>
                                    <Card.Text>
                                        With Documentation
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card >
                                <Card.Img variant="top" src={adminPanel.src} />
                                <Card.Body>
                                    <Card.Title>Admin Penal Code</Card.Title>
                                    <Card.Text>
                                        With Documentation
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card >
                                <Card.Img variant="top" src={uiCode.src} />
                                <Card.Body>
                                    <Card.Title>eBroker UI Code</Card.Title>
                                    <Card.Text>
                                        With Documentation
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

            </section>
            {/* GetCode ends  */}


            <section id='buyNow'>

                <div className="buyNowCont">

                    <button className="button">
                        <span className="button-content">BUY NOW </span>
                    </button>

                    <p>eBroker - Real Estate Property Buy- Sell - Rent Flutter with Laravel Admin Panel</p>

                </div>
            </section>
            {/* BuyNow ends  */}


            <section id='cards'>
                <div className="text-center buyNowCont">
                    <div className="row">
                        <div className="col rowCol">
                            <Card>
                                <Card.Img variant="top" className='buyNowImg' src={getSupp.src} />
                            </Card>
                        </div>
                        <div className="col rowCol">
                            <Card>
                                <Card.Img variant="top" className='buyNowImg' src={documentation.src} />
                            </Card>
                        </div>
                        <div className="col rowCol">
                            <Card>
                                <Card.Img variant="top" className='buyNowImg' src={preSale.src} />
                            </Card>
                        </div>
                        <div className="col rowCol">
                            <Card>
                                <Card.Img variant="top" className='buyNowImg' src={hireUS.src} />
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cards ends here  */}

            <section id="morePro">

                <h1>More Product</h1>

                <div className="cardsContainer">

                    <div className="leftCards">

                        <div className="card card1">
                            <div className="container">

                                <img src={mostView.src} className="card-img-top" alt="..." />

                                <button className="common_btn hoverBtn">More Info</button>

                            </div>
                            <div className="container">
                                <div className="card-body">
                                    <button className='cardBtn'>Flutter</button>
                                    <h5 className="card-title">Elite Quiz - Trivia Quiz</h5>
                                    <p className="card-text">$59.00</p>
                                    <hr />
                                    <div className="sale_rating container">
                                        <span className="sales">875 Sales |</span>
                                        <div className="rating">
                                            <h3> <FaStar className='stars' /></h3>
                                            <h3> <FaStar className='stars' /></h3>
                                            <h3> <FaStar className='stars' /></h3>
                                            <h3> <FaStar className='stars' /></h3>
                                            <h3> <FaStarHalfStroke className='stars' /> (88)</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="miniCardsCont">
                            <div className="card miniCard" id='cd1'>
                                <div className="container">

                                    <img src={mostView.src} className="card-img-top" alt="..." />

                                    <button className="common_btn hoverBtn">More Info</button>

                                </div>
                                <div className="container">
                                    <div className="card-body">
                                        <button className='cardBtn'>Flutter</button>
                                        <h5 className="card-title">Elite Quiz - Trivia Quiz</h5>
                                        <p className="card-text">$59.00</p>
                                        <hr />
                                        <div className="sale_rating container">
                                            <span className="sales">875 Sales |</span>
                                            <div className="rating">
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStarHalfStroke className='stars' /></h3>
                                                <span className='ratingNum'>(88)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card miniCard">
                                <div className="container">

                                    <img src={mostView.src} className="card-img-top" alt="..." />
                                    <button className="common_btn hoverBtn">More Info</button>
                                </div>
                                <div className="container">
                                    <div className="card-body">
                                        <button className='cardBtn'>Flutter</button>
                                        <h5 className="card-title">Elite Quiz - Trivia Quiz</h5>
                                        <p className="card-text">$59.00</p>
                                        <hr />
                                        <div className="sale_rating container">
                                            <span className="sales">875 Sales |</span>
                                            <div className="rating">
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStarHalfStroke className='stars' /></h3>
                                                <span className='ratingNum'>(88)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rightCards" >

                        <div className="miniCardsCont">
                            <div className="card miniCard">
                                <div className="container">

                                    <img src={mostView.src} className="card-img-top" alt="..." />

                                    <button className="common_btn hoverBtn">More Info</button>


                                </div>
                                <div className="container">
                                    <div className="card-body">
                                        <button className='cardBtn'>Flutter</button>
                                        <h5 className="card-title">Elite Quiz - Trivia Quiz</h5>
                                        <p className="card-text">$59.00</p>
                                        <hr />
                                        <div className="sale_rating container">
                                            <span className="sales">875 Sales |</span>
                                            <div className="rating">
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStarHalfStroke className='stars' /></h3>
                                                <span className='ratingNum'>(88)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card miniCard">
                                <div className="container">

                                    <img src={mostView.src} className="card-img-top" alt="..." />

                                    <button className="common_btn hoverBtn">More Info</button>


                                </div>
                                <div className="container">
                                    <div className="card-body">
                                        <button className='cardBtn'>Flutter</button>
                                        <h5 className="card-title">Elite Quiz - Trivia Quiz</h5>
                                        <p className="card-text">$59.00</p>
                                        <hr />
                                        <div className="sale_rating container">
                                            <span className="sales">875 Sales |</span>
                                            <div className="rating">
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStar className='stars' /></h3>
                                                <h3> <FaStarHalfStroke className='stars' /></h3>
                                                <span className='ratingNum'>(88)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightCardImg" style={{
                            background: `rgba(0, 0, 0, 64%) url(${moreProd.src})`,
                            backgroundSize: 'cover'
                        }}>
                            <button className="common_btn">Explore All</button>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Page




