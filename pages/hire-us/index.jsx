import Breadcrum from '@/Components/Breadcrum'
import React from 'react'
import technicalExperties from '../../src/Asset/Images/Technical Expertise.png'
import QualityAssurance from "../../src/Asset/Images/Quality Assurance.png"
import CustomerSupport from '../../src/Asset/Images/Excellent Customer Support.png'
import ClientSatisfaction from '../../src/Asset/Images/Client Satisfaction.png'

import flutter from '../../src/Asset/Icons/FlutterColor.png'
import react from '../../src/Asset/Icons/ReactColor.png'
import vue from '../../src/Asset/Icons/VueColor.png'
import node from '../../src/Asset/Icons/NodeColor.png'
import laravel from '../../src/Asset/Icons/Laravel.svg'
import android from '../../src/Asset/Icons/Android.svg'
import ios from '../../src/Asset/Icons/iOS.svg'

const index = () => {

    const CardData = [
        {
            id: 0,
            img: technicalExperties,
            title: "Technical Expertise",
            desc: "Our experienced developers ensure innovative app & website crafting.",
        },
        {
            id: 1,
            img: QualityAssurance,
            title: "Quality Assurance",
            desc: "Thorough testing guarantees a seamless, glitch-free, responsive app & website.",
        },
        {
            id: 2,
            img: CustomerSupport,
            title: "Customer Support",
            desc: "We're about relationships. Our dedicated support team is here for you.",
        },
        {
            id: 3,
            img: ClientSatisfaction,
            title: "Client Satisfaction",
            desc: "Our track record reflects our commitment to exceed expectations.",
        },
    ]
    return (
        <>
            <Breadcrum title="Hire" blueText="Us" contentOne="Home" contentTwo="Hire Us" />

            <section id='whyHireUs'>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="hireUpperDiv">
                                <h4 className='common_span'> Why Hire<span> Us</span></h4>
                                <span className='hireHeadlines' data-aos="fade-right" data-aos-duration="1000">We Are <span>Experts</span> Dedicated to Making Your Concept  <span>Come True!</span></span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">

                            <div className="row whyHireCards">
                                {
                                    CardData.map((e) => {
                                        return <div className="col-sm-12 col-md-6 col-lg-3" key={e.id}>
                                            <div class="card">
                                                <span className='contactCardSpan'> <img class="card-img-top" src={e.img.src} alt="Card image cap" className='card1Img' /> </span>
                                                <div class="card-body ">
                                                    <h5 class="card-title card1Title">{e.title}</h5>
                                                    <p class="card-text card1Text">{e.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section id='hireUs'>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="hireUpperDiv">
                                <h4 className='common_span'>Hire<span> Us</span></h4>
                                <span className='hireHeadlines' data-aos="fade-right" data-aos-duration="1000">Need <span>Assistance</span> With Your Project?</span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="hireLowerDiv">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <span className='hireLowerDivHeadline'>
                                            <span>We stay on top of the latest tech advancements to ensure your project is completed quickly and uses best of the software and frameworks suitable for your project.</span></span>
                                    </div>

                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <div className="hireUsCardWrapper">

                                            <div className="hireUsCard">
                                                <span className='flutter'> <img src={flutter.src} alt="" /> </span>
                                                <span className='title'>Flutter</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='react'> <img src={react.src} alt="" /> </span>
                                                <span className='title'>React Js</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='vue'> <img src={vue.src} alt="" /> </span>
                                                <span className='title'>Vue Js</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='node'> <img src={node.src} alt="" /> </span>
                                                <span className='title'>Node Js</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='laravel'> <img src={laravel.src} alt="" /> </span>
                                                <span className='title'>Laravel</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='android'> <img src={android.src} alt="" /> </span>
                                                <span className='title'>Android</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='ios'> <img src={ios.src} alt="" /> </span>
                                                <span className='title'>iOS</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-6">

                                        <div className="formDiv">

                                            <div className="mb-3 row">
                                                <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                                                </div>

                                                <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"></input>
                                                </div>
                                                <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Phone" />
                                                </div>

                                                <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                    <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                                        <option selected>Your Budget</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>

                                                <div className="mb-3 mt-4">
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Your Message'></textarea>
                                                </div>

                                                <button className='homeCommon_btn'>Submit</button>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id='success'>
                <div className="container">
                <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="hireUpperDiv">
                                <span className='hireHeadlines' data-aos="fade-right" data-aos-duration="1000">4 Steps to <span>Success</span> With <span>WRTeam</span></span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">

                            <div className="row whyHireCards">
                                {
                                    CardData.map((e) => {
                                        return 
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index
