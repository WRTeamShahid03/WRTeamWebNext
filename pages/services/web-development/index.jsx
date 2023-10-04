import Breadcrum from '@/Components/Breadcrum'
import React from 'react'
import circle from '../../../src/Asset/Images/Shape_1.svg'
import dottsShape from '../../../src/Asset/Images/Shape_2.png'
import crossShape from '../../../src/Asset/Images/Shape_3.png'
import triangle from '../../../src/Asset/Images/Shape_4.svg'
import Card from 'react-bootstrap/Card';

const index = () => {

  const benefitsCardData = [
    {
      id: 0,
      icon: '',
      title: 'Timely Updates'

    },
    {
      id: 1,
      icon: '',
      title: 'Testing & Quality Assurance'

    },
    {
      id: 2,
      icon: '',
      title: 'Ongoing Support'

    },
    {
      id: 3,
      icon: '',
      title: 'Elite Author on Codecanyon'

    },
  ]

  const processCardData = [
    {
      id: 0,
      icon: '',
      title: 'Timely Updates'

    },
    {
      id: 1,
      icon: '',
      title: 'Testing & Quality Assurance'

    },
    {
      id: 2,
      icon: '',
      title: 'Ongoing Support'

    },
    {
      id: 3,
      icon: '',
      title: 'Elite Author on Codecanyon'

    },
  ]

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
      {/* development ends */}

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
                    <div className="leftDivshapes">
                      <img src={crossShape.src} alt="" className='crossShape' />
                      <img src={dottsShape.src} alt="" className='dottsShape' />
                    </div>
                  </div>

                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 contentWrapper">
                  <div className="rightDivContent">
                    <div className="rightDivshapes">
                      <img src={circle.src} alt="" className='circleShape' />
                      <img src={triangle.src} alt="" className='triangleShape' />
                    </div>
                    <span>Back-end web development</span>
                    <p className='comman_para firstP'>Our backend web development experts focus to developing powerful, scalable server-side applications which support website functionality. We use various programming languages such as JavaScript, PHP, Ruby and frameworks such as Django, Laravel and Ruby on Rails to build secure and efficient backend solutions for your business requirements.</p>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>

      </section>
      {/* backend ends  */}

      <section id='benefits' className='container'>
        <div className="row">
          <div className="col-sm col-md-12 col-lg-6">
            <div className="benefitsHeadings">
              <span className="common_span">
                Extensive <span>Benefits</span>
              </span>
              <h3 className='comman_Headlines'>Make a Website With the Best <span>Web Development</span> Company</h3>
            </div>
          </div>

          <div className="col-sm col-md-12 col-lg-6">
            <div className="benefitsPara">
              <p className='comman_para'>Our web development service is ready to meet your unique business needs and deliver high-quality, responsive websites that are visually appealing and fully functional.</p>
            </div>
          </div>

        </div>

        <div className="row benefitsCards">
          {
            benefitsCardData.map((e) => {
              return <div className="col-sm-12 col-md-4 col-lg-3" key={e.id}>
                <Card>
                  {/* <Card.Img variant="top" src="..." /> */}
                  <span className='card-img-top'></span>
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
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="upperDivLeftContent">
                <img src="..." alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="upperDivRightContent">
              <div className="upperRightHeadings">
                <span className="common_span">
                  Our <span>Work Process</span>
                </span>
                <h3 className='comman_Headlines' data-aos="fade-right" data-aos-duration="1000">
                  Make a Website With the Best <span>Web Development</span> Company
                </h3>
              </div>

              <div className="processCardWrapper">

              <div className="processCard">
                <span className='cardIcon'></span>
                <span className='cardContent'>
                  <span className='title'>01.Idea</span>
                  <span className='comman_para'>Our web development service is ready to meet your unique business needs and deliver high-quality.</span>
                </span>
              </div>
              <div className="processCard">
                <span className='cardIcon'></span>
                <span className='cardContent'>
                  <span className='title'>01.Idea</span>
                  <span className='comman_para'>Our web development service is ready to meet your unique business needs and deliver high-quality.</span>
                </span>
              </div>
              <div className="processCard">
                <span className='cardIcon'></span>
                <span className='cardContent'>
                  <span className='title'>01.Idea</span>
                  <span className='comman_para'>Our web development service is ready to meet your unique business needs and deliver high-quality.</span>
                </span>
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
