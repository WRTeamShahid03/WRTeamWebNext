'use client'
import Home from '@/Components/Home/Home'
import React from 'react'


const index = () => {
  // const breakpoints = {
  //   0: {
  //     slidesPerView: 1,
  //     // spaceBetween: 40
  //   },
  //   375: {
  //     slidesPerView: 1,
  //     // spaceBetween: 40
  //   },
  //   576: {
  //     slidesPerView: 1.5,
  //     // spaceBetween: 40
  //   },
  //   768: {
  //     slidesPerView: 2,

  //   },
  //   992: {
  //     slidesPerView: 3,

  //   },
  //   1200: {
  //     slidesPerView: 3,
  //   },
  //   1400: {
  //     slidesPerView: 4,

  //   }
  // };
  return (
    <>
      <Home/>

       {/* <Swiper
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
                      return <div key={ele.id}>
                        <SwiperSlide >
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
                      </div>
                    })
                  }
                </Swiper> */}
    </>
  )
}

export default index
