import Breadcrum from '@/Components/Breadcrum'
import React from 'react'
import crossShape from '../../../src/Asset/Images/Shape_3.png'

const index = () => {
  return (
    <>
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

          </div>

        </div>
      </section>

      <section id='backend'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="backendHeadings">
                <span className="common_span">
                  <span>What</span> We Can Do <span>For You</span>
                </span>
                <h3 className='comman_Headlines'>
                  Services <span>We Can Help </span>You With
                </h3>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">

              <div className="row wrapper">
                <div className="col-sm-12 col-md-12 col-lg-6 contentWrapper">

                  <div className="leftDivContent">
                    <div className="shapesDiv">
                      <img src={crossShape.src} alt="" />
                    </div>
                  </div>

                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 contentWrapper">
                  <div className="rightDivContent">
                    <span>Back-end web development</span>
                    <p className='comman_para firstP'>Our backend web development experts focus to developing powerful, scalable server-side applications which support website functionality. We use various programming languages such as JavaScript, PHP, Ruby and frameworks such as Django, Laravel and Ruby on Rails to build secure and efficient backend solutions for your business requirements.</p>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>

      </section>
    </>
  )
}

export default index
