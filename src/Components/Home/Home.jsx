import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BsArrowRightCircle, BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai';
import { LiaStarSolid } from 'react-icons/lia';

import AOS from 'aos';
import 'aos/dist/aos.css';


//Images
import rightDivImg from '../../Asset/Images/Hero Img.png'
import likeIcon from "../../Asset/Icons/Like.png"
import checkIcon from "../../Asset/Icons/ic_check.png"
import team1 from '../../Asset/Icons/team1.png'
import team2 from '../../Asset/Icons/team2.png'
import team3 from '../../Asset/Icons/team3.png'
import team4 from '../../Asset/Icons/team4.png'
import arrow from '../../Asset/Icons/Arrow.svg'
import aboutImg1 from '../../Asset/Images/About Image.png'
import aboutImg2 from '../../Asset/Images/bg-image.png'
import winnerImg1 from '../../Asset/Images/winnerImage.png'
import trophy from '../../Asset/Images/Trophy Image.png'
import appProduct from '../../Asset/Images/AppImage.png'
import webProduct from '../../Asset/Images/WebImage.png'
import appProIcon from '../../Asset/Images/appProIcon.png'
import webProIcon from '../../Asset/Images/webProIcon.png'
import servWebIcon from '../../Asset/Icons/servWeb.svg'
import servwebHover from '../../Asset/Icons/webHover.svg'
import servAppIcon from '../../Asset/Icons/servApp.svg'
import appHover from '../../Asset/Icons/appHover.svg'
import uiIcon from '../../Asset/Icons/ui-ux_icone.svg'
import uiHover from '../../Asset/Icons/uiHover.svg'
import digitalIcon from '../../Asset/Icons/digital_marketing.svg'
import digitalHover from '../../Asset/Icons/digitalHover.svg'
import techBg from '../../Asset/Images/TechnologyImage.png'
import flutterTech from '../../Asset/Icons/FlutterColor.png'
import react from '../../Asset/Icons/ReactColor.png'
import vue from '../../Asset/Icons/VueColor.png'
import node from '../../Asset/Icons/NodeColor.png'
import laravel from '../../Asset/Icons/Laravel.svg'
import android from '../../Asset/Icons/Android.svg'
import ios from '../../Asset/Icons/iOS.svg'
import heroLine from '../../Asset/Images/Hero_Line.png'
import getTouch from '../../Asset/Images/getTouch.png'


// import required modules
import Counter from '../Counter';
import WorkChain from '../WorkChain';
import Testimonials from '../Testimonials';


const Home = () => {


    useEffect(() => {
        AOS.init();
    }, []);



    const servCardData = [
        {
            id: 1,
            title: "Web Development",
            desc: "Build a user-friendly website that showcases your business online.",
            icon: servWebIcon.src,
        },
        {
            id: 2,
            title: "App Development",
            desc: "Create a custom app for your business that makes your tasks easier.",
            icon: servWebIcon.src,
        },
        {
            id: 3,
            title: "UI/UX Services",
            desc: "Design and develop engaging and user-friendly websites and apps.",
            icon: servWebIcon.src,
        },
        {
            id: 4,
            title: "Digital Marketing",
            desc: "Promote your business online, reach new customers and increase sales.",
            icon: servWebIcon.src,
        },
    ]

    const techCardData = [
        {
            id: 1,
            title: "Flutter",
            icon: flutterTech.src,
        },
        {
            id: 2,
            title: "React Js",
            icon: react.src,
        },
        {
            id: 3,
            title: "Vue JS",
            icon: vue.src,
        },
        {
            id: 4,
            title: "Node JS",
            icon: node.src,
        },
        {
            id: 5,
            title: "Laravel",
            icon: laravel.src,
        },
        {
            id: 6,
            title: "Android",
            icon: android.src,
        },
        {
            id: 7,
            title: "iOS",
            icon: ios.src,
        },

    ]

    return (
        <>
            <section id='homeHeroSect' className='container'>

                <div className="heroContainer">
                    <div className="heroLines" style={{
                        background: `url(${heroLine.src})`,
                        backgroundSize: 'contain',
                        backgroundPosition: " 24px 186px",
                        backgroundRepeat: "no-repeat",
                    }}>


                        <div className="heroContContent">
                            <div className="row">

                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="heroCont-leftDiv" data-aos="fade-up" data-aos-duration="1000">
                                        <span className='mcWinner'>Most Creative Winner!</span>
                                        <h1 id='herocont_headline' className='comman_Headlines'>Unlock Your <span>Business</span> Potential with Expert <span>IT Company</span></h1>

                                        <p>Optimize Your Business Operations Using WRTeam's Powerful Software Solutions & Streamlined Workflows. We are committed to providing to our clients with the End-to-End Software Solutions.</p>

                                        <div className="followDiv">
                                            <button className='homeCommon_btn'>About Us</button>

                                            <div className="follIcons">

                                                <span>Follow Us</span>
                                                <span className='heroContIcons'> <BsFacebook size={20} /> <AiFillInstagram size={24} /> <BsLinkedin size={20} /> <BsYoutube size={25} /> </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="heroCont-rightDiv" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
                                        <div className="rightDivImg">
                                            <img src={rightDivImg.src} alt="" />
                                        </div>
                                        <div className="floatingCard1">
                                            <div className="fcardImg">
                                                <img src={likeIcon.src} alt="" />
                                            </div>
                                            <div className="floatCardContent">
                                                <span className='heroStars'>
                                                    <LiaStarSolid size={20} color='#ffa800' />
                                                    <LiaStarSolid size={20} color='#ffa800' />
                                                    <LiaStarSolid size={20} color='#ffa800' />
                                                    <LiaStarSolid size={20} color='#ffa800' />
                                                    <LiaStarSolid size={20} color='#ffa800' />
                                                </span>
                                                <span>(15k+) <span className='customerRev'>Customer Reviews </span></span>
                                            </div>
                                        </div>

                                        <div className="floatingCard2">
                                            <div className="fcardImg">
                                                <img src={checkIcon.src} alt="" />
                                            </div>
                                            <div className="floatCardContent">
                                                <span className='heroStars'>Sales Count</span>
                                                <span className=''>(13k+) <span className='customerRev'>Products </span></span>
                                            </div>
                                        </div>

                                        <div className="floatingCard3">
                                            <div className="floCard3Content">
                                                <span>Our Creative Team</span>
                                                <span className='teamIcons'>
                                                    <img src={team1.src} alt="" />
                                                    <img src={team2.src} alt="" />
                                                    <img src={team3.src} alt="" />
                                                    <img src={team4.src} alt="" />
                                                    <span className='teamMem'>40+</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="arrow" data-aos="fade-down" data-aos-duration="1000">
                                <img src={arrow.src} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* homeHeroSect ends here  */}


            <section id='aboutUs' className='container'>
                <div className="aboutWrapper">
                    <h2 id='wrTeam' data-fill-text="WRTEAM">WRTEAM</h2>

                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-6">

                            <div className="aboutLeftDiv">
                                <div className="aboutImg" data-aos="fade-down-right" data-aos-duration="2000">

                                    <img src={aboutImg1.src} alt="" />
                                    <div className="aboutSmImg" style={{
                                        background: `url(${aboutImg2.src})`,
                                        backgroundSize: 'cover'
                                    }}>
                                        <div className="experience">
                                            <span className='experNum' style={{
                                                background: `url(${aboutImg2.src})`,
                                                backgroundSize: 'cover',
                                                backgroundClip: "text",
                                                WebkitBackgroundClip: "text"
                                            }}>6+</span>
                                            <span className='experNum' style={{
                                                background: `url(${aboutImg2.src})`,
                                                backgroundSize: 'cover',
                                                backgroundClip: "text",
                                                WebkitBackgroundClip: "text"
                                            }}>Years</span>
                                            <span>Experience</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6">

                            <div className="aboutRightDiv">
                                <span className="common_span">About <span>WRTeam</span></span>
                                <h2 data-aos="fade-left" data-aos-duration="1000" className='comman_Healines'>Deliver <span>Business Solution </span>  With The Goal Of <span>Long-Term </span> Relationships</h2>

                                <p className='firstP common_para'>WRTeam is an Award-Winning Web - App Development & IT Consulting Company serving clients across the Globe.</p>

                                <p className='common_para'>We have 6+ Years of market business experience which could be more chances of success to connect with us.</p>

                                <p className='common_para'>WRTeam is a creative and dedicated group of developers who are mastered in Mobile & Web Development with expertise in delivering quality solutions to customers across the globe.</p>

                                <div className="discover" data-aos="fade-up" data-aos-duration="1000">
                                    <button className='homeCommon_btn'>Discover More</button>
                                    <span className='hoverArrSpan'>Let's Talk About Idea < BsArrowRightCircle className='discRightArr' /></span>
                                </div>
                            </div>

                        </div>

                    </div>





                </div>
            </section>
            {/* aboutUs ends here  */}


            <section id="winner" className='container'>
                <div className="winnerWrapper">

                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="winnLeftDiv">
                                <span className='common_span'>Achievement <span>on Envato</span> </span>
                                <h2 data-aos="fade-right" data-aos-duration="1000" className='comman_Healines'><span>Meet the Most Creative Team </span> Award-Winning Web & App Development</h2>

                                <p className='firstP comman_para'>Meet the winner of 'Most Creative' competition on codecanyon! WRTeam are proud of our team members who came out on top with their outstanding creativity and innovative ideas.</p>

                                <p className='common_para'> We value innovative thinking and creativity, and our staff is always pushing the envelope and bringing new ideas to the fore. Moreover, this remarkable achievement is a testament to our team's dedication and passion for excellence.</p>

                                <p className='common_para'>As we continue to evolve and innovate, we look forward to inspiring others in the industry with our ingenuity.</p>

                                <button className="homeCommon_btn" data-aos="fade-up" data-aos-duration="1000">Read More</button>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="winnRightDiv" data-aos="fade-down-left" data-aos-duration="2000">

                                <div className="winnerLeftImg">

                                    <img src={winnerImg1.src} alt="" className='winnerTeamImg' />
                                    <div className="winnerSmImg" >
                                        <img src={trophy.src} alt="" />

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <h2 id='winnText' data-fill-text="WINNER">WINNER</h2>
                </div>

            </section>
            {/* winner ends  */}


           <Counter/>
            {/* counter ends  */}


            <section id='solutions'>

                <div className="soluHeadlines">
                    <h2 className='common_span'>Our <span>Solutions</span></h2>
                    <h3 data-aos="fade-right" data-aos-duration="1000" className='comman_Healines'>Empowering Business <span>Growth </span>  with <span>Personalized </span>  Products</h3>
                    <p >Here our wide variety of digital products or solutions for your businesses such as categories of ecommerce apps and websites, educational apps and websites, gaming apps and websites and many more business digital products.</p>
                </div>

                <div className="productsCardsWrapper container">

                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="mobilePro" data-aos="fade-up" data-aos-duration="2000">

                                <div className="mobProImg" style={{
                                    background: `url(${appProduct.src})`,
                                    backgroundRepeat: "no-repeat"
                                }}>
                                    <img src={appProduct.src} alt="" className='solu_product_img' />
                                </div>
                                <div className="mobProContent">
                                    <span className='mobProIcon'><img src={appProIcon.src} alt="" /></span>
                                    <h4 className='mobProText'>Mobile App Products</h4>
                                    <span className='hoverArrSpan'>Explore Service < BsArrowRightCircle className='discRightArr' /></span>
                                </div>

                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6 mobCards2">
                            <div className="mobilePro" data-aos="fade-down" data-aos-duration="2000">

                                <div className="mobProImg webProImg" style={{
                                    background: `url(${webProduct.src})`,
                                    backgroundRepeat: "no-repeat"
                                }}>
                                    <img src={webProduct.src} alt="" className='solu_product_img' />
                                </div>
                                <div className="mobProContent">
                                    <span className='mobProIcon'><img src={webProIcon.src} alt="" /></span>
                                    <h4 className='mobProText'>Web App Products</h4>
                                    <span className='hoverArrSpan'>Explore Service < BsArrowRightCircle className='discRightArr' /></span>
                                </div>

                            </div>
                        </div>

                    </div>






                </div>
            </section>
            {/* solutions ends  */}

            <section id="services" className='container'>

                <div className="serviesWrapper">

                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="servleftDiv">

                                <div className="servCard" id='lightGrnCard' data-aos="fade-down" data-aos-duration="2000">
                                    <span className="servImg lightgrnServ">
                                        <img src={servWebIcon.src} alt="" className='servNorImg' />
                                        <img src={servwebHover.src} alt="" className='servHoverImg' />
                                    </span>
                                    <div className="servContent">
                                        <h4 className='servHeadline'>{servCardData[0].title}</h4>
                                        <span className='servText'>{servCardData[0].desc}</span>
                                        <span className='hoverArrSpan'>Discover More < BsArrowRightCircle className='discRightArr' /></span>
                                    </div>
                                </div>

                                <div className="servCard servCardDown" id='orangeCard' data-aos="fade-down" data-aos-duration="2000">
                                    <span className="servImg orangeServ">
                                        <img src={servAppIcon.src} alt="" className='servNorImg' />
                                        <img src={appHover.src} alt="" className='servHoverImg' />
                                    </span>
                                    <div className="servContent">
                                        <h4 className='servHeadline'>{servCardData[1].title}</h4>
                                        <span className='servText'>{servCardData[1].desc}</span>
                                        <span className='hoverArrSpan'>Discover More < BsArrowRightCircle className='discRightArr' /></span>
                                    </div>
                                </div>

                                <div className="servCard" id='crimsonCard' data-aos="fade-down" data-aos-duration="2000">
                                    <span className="servImg crimsonServ">
                                        <img src={uiIcon.src} alt="" className='servNorImg' />
                                        <img src={uiHover.src} alt="" className='servHoverImg' />
                                    </span>
                                    <div className="servContent">
                                        <h4 className='servHeadline'>{servCardData[2].title}</h4>
                                        <span className='servText'>{servCardData[2].desc}</span>
                                        <span className='hoverArrSpan'>Discover More < BsArrowRightCircle className='discRightArr' /></span>
                                    </div>
                                </div>

                                <div className="servCard servCardDown" id='greenCard' data-aos="fade-down" data-aos-duration="2000">
                                    <span className="servImg greenServ">
                                        <img src={digitalIcon.src} alt="" className='servNorImg' />
                                        <img src={digitalHover.src} alt="" className='servHoverImg' />
                                    </span>
                                    <div className="servContent">
                                        <h4 className='servHeadline'>{servCardData[3].title}</h4>
                                        <span className='servText'>{servCardData[3].desc}</span>
                                        <span className='hoverArrSpan'>Discover More < BsArrowRightCircle className='discRightArr' /></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="servrightDiv">
                                <h2 className='common_span'>Best <span>  IT Services</span> </h2>
                                <h3 data-aos="fade-left" data-aos-duration="1000" className='common_Headlines'> <span>Innovate, Implement, Succeed:</span> Leverage Our IT Services to <span>Turn Ideas</span> into Reality</h3>

                                <p className='firstP common_para'>For skyrocket business growth, the right IT service is more important from building engaging websites and user-friendly apps to crafting stunning designs and boosting your online presence. </p>

                                <p className='firstP common_para'> Our team of experts in app development, web development, UI/UX design, IT consulting, and digital marketing can help you achieve your business goals.</p>

                                <p className='firstP common_para'>Get ready your business shine! Our teamwork-based strategy ensures success with innovative solutions and customer satisfaction. </p>

                                <p className='firstP common_para'>Let's revamp your online presence and lead your business to extraordinary success and growth!</p>
                            </div>
                        </div>

                    </div>




                </div>

            </section>
            {/* services ends  */}


            <section id="tech">
                <div className="techWrapper container">
                    <div className="techUpperDiv">
                        <div className="techContent">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="techHeadlines">
                                        <h3 className='common_span'>Technology <span> We Use</span></h3>
                                        <h4 data-aos="fade-right" data-aos-duration="1000" className='common_Headlines'>We Embrace Advanced & Latest <span>Technologies</span> to Enhance Your Projects</h4>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="techPara">
                                        <p>In today's rapidly changing digital world, staying up-to-date with the latest technologies and tools is important. At WRTeam, we pride ourselves on using the latest technologies across our different services and products.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="techbg" style={{
                                background: `url(${techBg.src})`,
                                backgroundSize: 'cover'
                            }}>
                                <div className="techBottDiv" >
                                    <div className="row">
                                        {
                                            techCardData.map((ele, index) => {
                                                return <>
                                                    <div className="col-sm-12 col-md-6 col-lg-1" key={index}>
                                                        <div className="techMainCard" data-aos="slide-left" data-aos-duration="2000" key={ele.icon}>
                                                            <div className="techCard">
                                                                <img src={ele.icon} alt="" className='techIcons' />
                                                            </div>
                                                            <span className="colorDot">
                                                                <span className='darkDot'></span>
                                                            </span>
                                                            <span className='techName'>{ele.title}</span>
                                                        </div>
                                                    </div>
                                                </>
                                            })
                                        }
                                    </div >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* tech ends */}

            <WorkChain/>
            {/* workChain ends  */}

            <Testimonials/>
            {/* testimonials ends  */}

            <div className="getInTouch container" style={{
                background: `url(${getTouch.src})`,
                backgroundSize: 'cover'
            }}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-10">
                        <div className="getTouchText">
                            <span className='getTouchTitle'>GET TO MEET OUR EXPERT</span>
                            <span className='getTouchDesc'>Tell us about the hurdles you're currently facing in your business</span>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-2">
                        <div className="getTouchBtn">
                            <button className='homeCommon_btn'>Get In Touch</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home