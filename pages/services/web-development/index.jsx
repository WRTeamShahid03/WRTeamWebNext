import React, { useEffect, useState } from 'react'
import Breadcrum from '@/Components/Breadcrum'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import Lottie from 'react-lottie-player'
import helloText from '../animatedText.json'
import { BiRightArrowCircle } from 'react-icons/bi'
import { BsArrowRightCircle } from 'react-icons/bs'

//Images
import webDeveImg from '../../../src/Asset/Images/Web Devlopment.png'
import circle from '../../../src/Asset/Images/Shape_1.svg'
import dottsShape from '../../../src/Asset/Images/Shape_2.png'
import crossShape from '../../../src/Asset/Images/Shape_3.png'
import triangle from '../../../src/Asset/Images/Shape_4.svg'
import arrowImg from '../../../src/Asset/Images/Arrow Left Down.svg'
import getTouch from '../../../src/Asset/Images/getTouch.png'
import blog1 from '../../../src/Asset/Images/Blog_1.png'
import blog2 from '../../../src/Asset/Images/Blog_2.png'
import blog3 from '../../../src/Asset/Images/Blog_3.png'
import dateIcon from '../../../src/Asset/Icons/ic_date.png'
import timelyUpdadtes from '../../../src/Asset/Icons/All_Icons/Benefits/Timely Updates-.png'
import quality from '../../../src/Asset/Icons/All_Icons/Benefits/Testing & Quality Assurance.png'
import support from '../../../src/Asset/Icons/All_Icons/Benefits/Ongoing Support.png'
import eliteAuthor from '../../../src/Asset/Icons/All_Icons/Benefits/Elite Author on Codecanyon – 1.png'
import laravel from '../../../src/Asset/Icons/All_Icons/Build/Laravel.png'
import laravelHover from '../../../src/Asset/Icons/All_Icons/Build/Laravel_Hover.png'
import php from '../../../src/Asset/Icons/All_Icons/Build/php.png'
import phpHover from '../../../src/Asset/Icons/All_Icons/Build/php_Hover.png'
import codeignitor from '../../../src/Asset/Icons/All_Icons/Build/codeigniter.png'
import codeignitorHover from '../../../src/Asset/Icons/All_Icons/Build/codeigniter_Hover.png'
import vueJs from '../../../src/Asset/Icons/All_Icons/Build/Vue.js.png'
import vueJsHover from '../../../src/Asset/Icons/All_Icons/Build/Vue.js_Hover.png'
import nextJs from '../../../src/Asset/Icons/All_Icons/Build/nextjs.png'
import nextJsHover from '../../../src/Asset/Icons/All_Icons/Build/nextjs_Hover.png'
import reactJs from '../../../src/Asset/Icons/All_Icons/Build/React.png'
import reactJsHover from '../../../src/Asset/Icons/All_Icons/Build/React_Hover.png'
import processImg from '../../../src/Asset/Images/Our Work Process Devlopment.png'
import processImg2 from '../../../src/Asset/Images/Our Work Process_Devlopment.png'
import NewSlider from './NewSlider'

import processIcon1 from '../../../src/Asset/Icons/All_Icons/Process/Development.png'
import processIcon2 from '../../../src/Asset/Icons/All_Icons/Process/Maintenance & Support.png'
import processIcon3 from '../../../src/Asset/Icons/All_Icons/Process/Design & Planning.png'
import processIcon4 from '../../../src/Asset/Icons/All_Icons/Process/Analysis of Demands.png'
import processIcon5 from '../../../src/Asset/Icons/All_Icons/Process/Testing & Quality Assurance.png'
import processIcon6 from '../../../src/Asset/Icons/All_Icons/Process/Deployment.png'

const index = () => {

  const benefitsCardData = [
    {
      id: 0,
      icon: timelyUpdadtes,
      title: 'Timely Updates'

    },
    {
      id: 1,
      icon: quality,
      title: 'Testing & Quality Assurance'

    },
    {
      id: 2,
      icon: support,
      title: 'Ongoing Support'

    },
    {
      id: 3,
      icon: eliteAuthor,
      title: 'Elite Author on Codecanyon'

    },
  ]

  const processCard1Data = [
    {
      id: 0,
      icon: processIcon1,
      title: '01. Idea',
      desc: 'Our web development service is ready to meet your unique business needs and deliver high-quality.'

    },
    {
      id: 1,
      icon: processIcon2,
      title: '01. Idea',
      desc: 'Our web development service is ready to meet your unique business needs and deliver high-quality.'

    },
    {
      id: 2,
      icon: processIcon3,
      title: '01. Idea',
      desc: 'Our web development service is ready to meet your unique business needs and deliver high-quality.'

    },
  ]

  const processCard2Data = [
    {
      id: 0,
      icon: processIcon4,
      title: '01. Idea',
      desc: 'Our web development service is ready to meet your unique business needs and deliver high-quality.'

    },
    {
      id: 1,
      icon: processIcon5,
      title: '01. Idea',
      desc: 'Our web development service is ready to meet your unique business needs and deliver high-quality.'

    },
    {
      id: 2,
      icon: processIcon6,
      title: '01. Idea',
      desc: 'Our web development service is ready to meet your unique business needs and deliver high-quality.'

    },
  ]

  const buildCardData = [
    {
      id: 0,
      icon: laravel,
      hoverIcon: laravelHover,
      title: 'Laravel'

    },
    {
      id: 1,
      icon: php,
      hoverIcon: phpHover,
      title: 'Php'

    },
    {
      id: 2,
      icon: codeignitor,
      hoverIcon: codeignitorHover,
      title: 'CodIgnitor'

    },
    {
      id: 3,
      icon: vueJs,
      hoverIcon: vueJsHover,
      title: 'VueJS'

    },
    {
      id: 4,
      icon: nextJs,
      hoverIcon: nextJsHover,
      title: 'NextJS'

    },
    {
      id: 5,
      icon: reactJs,
      hoverIcon: reactJsHover,
      title: 'ReactJS'

    },
  ]

  const blogsData = [
    {
      id: 0,
      badge: "Artificial Intelligence",
      date: "August 25, 2023",
      title: "Exploring the Evolution of AI in Healthcare",
      text: "Dive into the fascinating journey of Artificial Intelligence in the realm of healthcare. This blog post takes you through the significant advancements AI has made in diagnosing illnesses, personalized treatment plans, and...",
      img: blog1
    },
    {
      id: 1,
      badge: "Cybersecurity",
      date: "September 10, 2023",
      title: "The Rising Threat of Ransomware: Protecting Your Digital Fortress",
      text: "In this informative piece, we dissect the alarming surge of ransomware attacks and their far-reaching consequences. Gain insights into the tactics cybercriminals employ and learn effective strategies to safeguard your digital...",
      img: blog2
    },
    {
      id: 2,
      badge: "Space Exploration",
      date: "October 5, 2023",
      title: "Mars Colonization: Navigating the Challenges of Red Planet Habitability",
      text: "Embark on a celestial journey to explore the intricate challenges and breakthroughs in the quest for colonizing Mars. Delve into the complexities of creating a habitable environment, sustainable resource management...",
      img: blog3
    },
  ]

  return (
    <div id='webDevelopmentPage'>
      <Breadcrum title='Web' blueText={'Development'} contentOne={'Home'} contentTwo={'Services'} contentThree={'Web Development'} />

      <section id='development' className='container'>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="deveLeftDiv">
              <div className="deveHeadings">
                <span className="common_span">
                  Web <span>Development</span>
                </span>
                <h3 className='comman_Headlines' data-aos="fade-right" data-aos-duration="1000">
                  Make a Website With the Best <span>Web Development</span> Company
                </h3>

                <p className="comman_para"> Our web development service is ready to meet your unique business needs and deliver high-quality, responsive websites that are visually appealing and fully functional.</p>
              </div>
            </div>

          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="deveRightDiv" data-aos="zoom-in" data-aos-duration="2000">
              <div className="commonBorderDiv">
                <img src={webDeveImg.src} alt="" />
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* development ends */}

      <section id='backend'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="backendHeadings">
                <span className="common_span">
                  <span>What</span> We Can Do <span>For You</span>
                </span>
                <h3 className='comman_Headlines' data-aos="fade-right" data-aos-duration="1000">
                  Services <span>We Can Help </span>You With
                </h3>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 sliderContainer">
                <div className="leftDivshapes">
                  <img src={crossShape.src} alt="" className='crossShape' />
                  <img src={dottsShape.src} alt="" className='dottsShape' />
                </div>
                <div className="rightDivshapes">
                  <img src={circle.src} alt="" className='circleShape' />
                  <img src={triangle.src} alt="" className='triangleShape' />
                </div>
              <NewSlider />
            </div>


          </div>
        </div>

      </section>
      {/* backend ends  */}

      <section id='benefits' className='container'>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="benefitsHeadings">
              <span className="common_span">
                Extensive <span>Benefits</span>
              </span>
              <h3 className='comman_Headlines' data-aos="fade-right" data-aos-duration="1000">Make a Website With the Best <span>Web Development</span> Company</h3>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="benefitsPara">
              <p className='comman_para'>Our web development service is ready to meet your unique business needs and deliver high-quality, responsive websites that are visually appealing and fully functional.</p>
            </div>
          </div>

        </div>

        <div className="row benefitsCards">
          {
            benefitsCardData.map((e) => {
              return <div className="col-sm-6 col-md-6 col-lg-3" key={e.id}>
                <Card>
                  {/* <Card.Img variant="top" src="..." /> */}
                  <span className='card-img-top'><img src={e.icon.src} style={{ filter: e.icon === eliteAuthor?'none': '' }} alt="" /></span>
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            })
          }
        </div>
      </section>
      {/* benefits ends  */}

      <section id='process' className='container'>
        <div className="row upperDivWrapper">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="upperDivLeftContent" data-aos="zoom-in" data-aos-duration="2000">
              <div className="commonBorderDiv">
                <img src={processImg.src} alt="" />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="upperDivRightContent">
              <div className="upperRightHeadings">
                <span className="common_span">
                  Our <span>Work Process</span>
                </span>
                <h3 className='comman_Headlines' data-aos="fade-left" data-aos-duration="1000">
                  Make a Website With the Best <span>Web Development</span> Company
                </h3>
              </div>

              <div className="processCardWrapper">
                {
                  processCard1Data.map((e)=>{
                    return <div className="processCard" data-aos="fade-up" data-aos-duration="1000" key={e.id}>
                    <span className='cardIcon'>
                      <img src={e.icon.src} alt="" />
                    </span>
                    <span className='cardContent'>
                      <span className='title'>{e.title}</span>
                      <span className='comman_para'>{e.desc}</span>
                    </span>
                  </div>

                  })
                }

                
                {/* <div className="processCard" data-aos="fade-up" data-aos-duration="1000">
                  <span className='cardIcon'></span>
                  <span className='cardContent'>
                    <span className='title'>01.Idea</span>
                    <span className='comman_para'>Our web development service is ready to meet your unique business needs and deliver high-quality.</span>
                  </span>
                </div>
                <div className="processCard" data-aos="fade-up" data-aos-duration="1000">
                  <span className='cardIcon'></span>
                  <span className='cardContent'>
                    <span className='title'>01.Idea</span>
                    <span className='comman_para'>Our web development service is ready to meet your unique business needs and deliver high-quality.</span>
                  </span>
                </div> */}
              </div>

            </div>
          </div>
        </div>
        {/* upperDivWrapper ends  */}
        <div className="row lowerDivWrapper">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="upperDivRightContent">
              <div className="arrowImg">
                <img src={arrowImg.src} alt="" />
              </div>

              <div className="processCardWrapper">
                {
                  processCard2Data.map((e)=>{
                    return <div className="processCard" data-aos="fade-up" data-aos-duration="1000" key={e.id}>
                    <span className='cardIcon'>
                      <img src={e.icon.src} alt="" />
                    </span>
                    <span className='cardContent'>
                      <span className='title'>{e.title}</span>
                      <span className='comman_para'>{e.desc}</span>
                    </span>
                  </div>

                  })
                }
                
                {/* <div className="processCard" data-aos="fade-up" data-aos-duration="1000">
                  <span className='cardIcon'></span>
                  <span className='cardContent'>
                    <span className='title'>01.Idea</span>
                    <span className='comman_para'>Our web development service is ready to meet your unique business needs and deliver high-quality.</span>
                  </span>
                </div>
                <div className="processCard" data-aos="fade-up" data-aos-duration="1000">
                  <span className='cardIcon'></span>
                  <span className='cardContent'>
                    <span className='title'>01.Idea</span>
                    <span className='comman_para'>Our web development service is ready to meet your unique business needs and deliver high-quality.</span>
                  </span>
                </div> */}
              </div>

            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="upperDivLeftContent" data-aos="zoom-in" data-aos-duration="2000">
              <div className="commonBorderDiv">
                <img src={processImg2.src} alt="" />
              </div>
            </div>
          </div>

        </div>


      </section>
      {/* process ends  */}

      <section id='build'>
        <div className="bgDiv">
          <div className="blueBg"></div>
        </div>
        <div className="container">
          <div className="row buildWrapper">
            <div className="col-sm-12 col-md-12 col-lg-5 leftDiv" >
              <div className="buildHeadings">
                <span className="common_span">
                  <span>We</span> Build
                </span>
                <h3 className='comman_Headlines' data-aos="fade-right" data-aos-duration="1000">
                  We <span> Build</span> With <span> Modern</span> Technologies & Tools
                </h3>
                <p className="comman_para firstP">
                  We're about relationships. Our dedicated support team is here for you.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 rightDiv">
              <div className="row buildCardsWrapper">
                {
                  buildCardData.map((e) => {
                    return <div className="col-6 col-sm-6 col-md-3 col-lg-4" key={e.id} data-aos="fade-left" data-aos-duration="1000">
                      <div className="card">
                        <span className='buildCardIcon'>
                          <img src={e.icon.src} alt="" className='buildIcon1' />
                          <img src={e.hoverIcon.src} alt="" className='buildIcon2' />
                        </span>
                        <span>{e.title}</span>
                      </div>
                    </div>

                  })
                }

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* build ends  */}

      <section id='webDevContact'>
        <div className="getInTouch container" style={{
          background: `rgb(23 79 196 / 83%) url(${getTouch.src})`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'darken'
        }}>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="getTouchText">
                {/* <span className='word'>{words[wordIndex].substr(0, offset)}</span> */}
                <span className='word'>
                  <Lottie
                    loop
                    animationData={helloText}
                    play
                  /></span>
                <span className='getTouchDesc'>Got A Quastion? We Would Be Happy To Help!</span>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-2">
              <div className="getTouchBtn">
                <Link href='/contact-us'> <button className='homeCommon_btn'>Contact Us <BiRightArrowCircle size={20} /></button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* webDevContact ends  */}

      <section id='recentBlogs' className='container'>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="recentBlogHeading">
              <span className="common_span">
                Our <span>Blogs</span>
              </span>
              <h3 className="comman_Headlines" data-aos="fade-right" data-aos-duration="1000">
                Recent <span>Blogs</span>
              </h3>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="row">
              {
                blogsData.map((ele) => {
                  return <div className="col-sm-12 col-md-6 col-lg-4 recentBlogsCards" key={ele.id}>
                    <div className="card text-white">
                      <span className='cateBadge'>{ele.badge}</span>
                      <img src={ele.img.src} className="card-img-top" alt="teamImg" />
                      <div className="card-img-top">
                        <div className="cateDetails">
                          <span className="cateDate">
                            <span> <img src={dateIcon.src} alt="" /></span>
                            <span> {ele.date}</span>
                          </span>
                          <p className="card-title">
                            {ele.title.length > 50 ? ele.title.slice(0, 55) + "" + "..." : ele.title}</p>
                          <p className='card-text'>{ele.text}</p>

                          <button className='blogComman_btn'>Read More <BsArrowRightCircle style={{ paddingBottom: "2px" }} /> </button>
                        </div>
                      </div>
                    </div>
                  </div>

                })
              }

            </div>
          </div>
        </div>
      </section>
      {/* recentBlogs ends  */}
    </div>
  )
}

export default index
