import Breadcrum from '@/Components/Breadcrum'
import { React, useCallback, useRef, useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import Counter from '../../src/Components/Counter'
import WorkChain from '@/Components/WorkChain'
import Testimonials from '@/Components/Testimonials'
import ReactPaginate from 'react-paginate';


// images
import knowMoreImg from '../../src/Asset/Images/knowMore.png'
import likeIcon from '../../src/Asset/Icons/ic_thumb.svg'
import trianglePattern from '../../src/Asset/Icons/Triangle Pattern.png'
import dotsPattern from '../../src/Asset/Icons/Dots Pattern.png'
import ourVision from '../../src/Asset/Images/our_vision.png'
import ourMission from '../../src/Asset/Images/our_mission.png'
import ourValues from '../../src/Asset/Images/our_values.png'
import team1 from '../../src/Asset/Images/team_1.png'
import team2 from '../../src/Asset/Images/team_2.png'
import team3 from '../../src/Asset/Images/team_3.png'
import team4 from '../../src/Asset/Images/team_4.png'
import getTouch from '../../src/Asset/Images/getTouch.png'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const index = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const swiperData = [
    {
      id: 1,
      name: "Olivia Smith",
      work: "Web Developer",
      img: team1
    },
    {
      id: 2,
      name: "Noah Martin",
      work: "UX/UI Designer",
      img: team2
    },
    {
      id: 3,
      name: "Sophia Brown",
      work: "IT Project Manager",
      img: team3
    },
    {
      id: 4,
      name: "Benjamin Williams",
      work: "Cybersecurity Analyst",
      img: team4
    },
    {
      id: 5,
      name: "Olivia Smith",
      work: "Web Developer",
      img: team1
    },
    {
      id: 6,
      name: "Noah Martin",
      work: "UX/UI Designer",
      img: team2
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
      slidesPerView: 4,

    }
  };


  const sliderRef = useRef(null);

  const handlePageChange = selectedPage => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideTo(selectedPage);
    setCurrentPage(selectedPage);
  };
  

  return (
    <div className='aboutUs'>
      <Breadcrum title="About Us" contentOne="Home" contentTwo="About Us" />

      <section id='knowMore' className='container'>
        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-6">

            <div className="knowMoreLeftDiv">
              <div className="knowMoreImg" data-aos="fade-down-right" data-aos-duration="2000">

                <img src={knowMoreImg.src} alt="" />
                <div className="business">
                  <span className='likeSpan'><img src={likeIcon.src} alt="likeIcon" /></span>
                  <span className='businessNum'>25+</span>
                  <span className='businessText'>Business Solution</span>
                </div>
              </div>

              <img src={trianglePattern.src} alt="trianglePattern" className='trianglePattern' />
              <img src={dotsPattern.src} alt="dotsPattern" className='dotsPattern' />
            </div>


          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">

            <div className="knowMoreRightDiv">
              <span className="common_span">Get to <span>know more</span></span>
              <h2 data-aos="fade-left" data-aos-duration="1000" className='comman_Headlines'>Deliver <span>Business Solution </span>  With The Goal Of <span>Long-Term </span> Relationships</h2>

              <p className='firstP comman_para'>WRTeam IT company located in Bhuj - India, working with the goal of putting the customer first. </p>

              <p className='comman_para'>We're a team of enthusiastic individuals with an eye for innovation and delivering the Best Quality products and services.</p>

              <p className='comman_para'>The WRTeam believes in our customer's ideas and wants to help bring them to life, allowing them to focus on their long-term goals while we take care of the details.</p>

              <p className='comman_para'>We offer the Best Mobile Application Services, Web Development Services, Graphic Design Services, IT Consulting Services and Digital Marketing Services.</p>
            </div>

          </div>

        </div>
      </section>

      <Counter />

      <section id="vision" className='container'>
        <div className="winnerWrapper">

          <div className="row">

            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="visionLeftDiv">
                <span className='common_span'>Our <span>Vision</span> </span>
                <h3 data-aos="fade-right" data-aos-duration="1000" className='comman_Headlines'>Deliver <span>Business Solution </span>  With The Goal Of <span>Long-Term </span> Relationships</h3>

                <p className='firstP comman_para'>At WRTeam, we envision becoming a top provider of exceptional mobile and web solutions that inspire businesses and people to achieve their goals and enhance their lives.</p>

                <p className='comman_para'> We want to be known as the top company for software development that is creative, high-quality, and client-focused.</p>

                <p className='comman_para'>We believe that software development is the key to success in the future of business.</p>

                <p className='comman_para'>As businesses grow, they require software that is perfect to their requirements. We are committed to providing our clients with the solution they need to succeed digitally.</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="visionRightDiv">

                <div className="visionLeftImg" data-aos="fade-down-left" data-aos-duration="2000">

                  <img src={ourVision.src} alt="" className='winnerTeamImg' />

                </div>

                <img src={trianglePattern.src} alt="trianglePattern" className='trianglePattern2' />
                <img src={dotsPattern.src} alt="dotsPattern" className='dotsPattern2' />

              </div>
            </div>
          </div>
        </div>

      </section>

      <section id='mission' className='container'>
        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-6">

            <div className="missionLeftDiv">
              <div className="missionImg" data-aos="fade-down-right" data-aos-duration="2000">

                <img src={ourMission.src} alt="" />
              </div>

              <img src={trianglePattern.src} alt="trianglePattern" className='trianglePattern' />
              <img src={dotsPattern.src} alt="dotsPattern" className='dotsPattern' />
            </div>


          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">

            <div className="missionRightDiv">
              <span className="common_span">Our  <span>Mission</span></span>
              <h3 data-aos="fade-left" data-aos-duration="1000" className='comman_Headlines'>Deliver <span>Business Solution </span>  With The Goal Of <span>Long-Term </span> Relationships</h3>

              <p className='firstP comman_para'>Our primary mission is to help our clients grow their businesses by providing modern technology and expertise in Mobile Application Development, Website Development, UX/UI Design, IT consulting, and Digital Marketing solutions . </p>

              <p className='comman_para'>We are dedicated to giving exceptional IT Solutions that meet and exceed our clients' expectations for excellence and creativity.</p>
            </div>

          </div>

        </div>
      </section>

      <section id="values" >
        <div className="container">

          <div className="row">

            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="valuesLeftDiv">
                <span className='common_span'>Our <span>Values</span> </span>
                <h3 data-aos="fade-right" data-aos-duration="1000" className='comman_Headlines'>Deliver <span>Business Solution </span>  With The Goal Of <span>Long-Term </span> Relationships</h3>

                <div className="valuesList">

                  <span className='firstP'> <BsCheckCircle color='black' /> Integrity, quality, creativity, collaboration, customer focus, continuous improvement, and diversity and inclusion are all important to us.</span>

                  <span> <BsCheckCircle color='black' /> We conduct ourselves in an honest and ethical manner.</span>

                  <span> <BsCheckCircle color='black' /> We encourage innovation and collaborate with our clients.</span>

                  <span> <BsCheckCircle color='black' /> We prioritize our customers' needs and goals.</span>

                  <span> <BsCheckCircle color='black' /> We are dedicated to ongoing development and learning.</span>

                  <span> <BsCheckCircle color='black' /> We value diversity and strive to foster an inclusive culture.</span>


                </div>
                <button className="homeCommon_btn" data-aos="fade-up" data-aos-duration="1000">Hire Us</button>

              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="valuesRightDiv" >

                <div className="valuesLeftImg" data-aos="fade-down-left" data-aos-duration="2000">

                  <img src={ourValues.src} alt="" className='winnerTeamImg' />

                </div>


                <img src={trianglePattern.src} alt="trianglePattern" className='trianglePattern2' />
                <img src={dotsPattern.src} alt="dotsPattern" className='dotsPattern2' />
              </div>
            </div>
          </div>
        </div>

      </section>

      <WorkChain />

      <section id="team">

        <div className="teamWrapper container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="teamUpperDiv">
                <h4 className='common_span'> Expert<span> Team</span></h4>
                <span className='comman_Headlines' data-aos="fade-right" data-aos-duration="1000">Catalyzing Global Reach The<span> Expert Team Powering IT Solutions Worldwide</span></span>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="teamSlider">
                <Swiper
                  ref={sliderRef}
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  modules={[FreeMode, Pagination]}
                  // pagination={{
                  //   clickable: true,
                  //   renderBullet: renderBullet
                  // }}
                  navigation
                  className='testiSwiper'
                  breakpoints={breakpoints}
                  // data-aos="fade-up" data-aos-duration="2000"
                  id='teamSwiper'
                >
                  {
                    swiperData.map((ele, index) => {
                      return <>

                        <SwiperSlide key={index}>
                          <div className="card text-white">
                            <img src={ele.img.src} className="card-img-top" alt="teamImg" />
                            <div className="card-img-overlay">
                              <div className="teamDeatails">

                                <p className="card-title teamName">{ele.name}</p>
                                <span className='card-text teamWork'>{ele.work}</span>
                              </div>
                            </div>
                          </div>

                          <div className="card text-white">
                            <img src={ele.img.src} className="card-img-top" alt="teamImg" />
                            <div className="card-img-overlay">
                              <div className="teamDeatails">

                                <p className="card-title teamName">{ele.name}</p>
                                <span className='card-text teamWork'>{ele.work}</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    })
                  }
                </Swiper>

                <div className="navigation-buttons">

                  <ReactPaginate
                    pageCount={3}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    forcePage={currentPage}
                    onPageChange={({ selected }) => handlePageChange(selected)}
                    containerClassName="pagination"
                    activeClassName="active"
                    pageClassName="page-item"
                    previousLabel={<FaAngleLeft color="white" size={22}/>}
                    nextLabel={<FaAngleRight color="white" size={22}/>}
                    previousClassName="page-item"
                    nextClassName="page-item"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                    pageLinkClassName="page-link"
                  />

                </div>
              </div>
            </div>
          </div>




        </div>
      </section >


      <Testimonials />

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

    </div>
  )
}

export default index
