import Breadcrum from '@/Components/Breadcrum'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'

// Images
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

import creativity from '../../src/Asset/Images/Creativity.png'
import trust from '../../src/Asset/Images/Trust.png'
import quality from '../../src/Asset/Images/Quality.png'
import teamWork from '../../src/Asset/Images/Team Work.png'

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

    const Card2Data = [
        {
            id: 0,
            img: creativity,
            title: "Creativity",
            desc: "Creativity directly related to Revolutionize your Great Idea to Big Thing! Thinking creatively opens up the possibilities.",
        },
        {
            id: 1,
            img: trust,
            title: "Trust",
            desc: "Trust is not only related to giving a 100% refund policy, it's all about an effort to make it happen.",
        },
        {
            id: 2,
            img: quality,
            title: "Quality",
            desc: "Quality is the only thing that team is not ready to compromise with that, We believe delivering in high quality.",
        },
        {
            id: 3,
            img: teamWork,
            title: "Team Work",
            desc: "Our creative team is our power. WRTeam means we work together to bring real value through our projects.",
        },
    ]

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [budget, setBudget] = useState('')

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (!name || !number || !email || !budget || !message) {
            toast.error('Fill out the form first')
        }
        else {
            emailjs.sendForm('service_f0zhqhh', 'template_zxke4jz', form.current, 'RITTN3aEr8VNyLQdN')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            toast.success('Submited Successfully !')
            setName('')
            setNumber('')
            setEmail('')
            setBudget('')
            setMessage('')
        }

    };


    return (
        <>
            <Breadcrum title="Hire" blueText="Us" contentOne="Home" contentTwo="Hire Us" />

            <section id='whyHireUs'>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="hireUpperDiv">
                                <h4 className='common_span'> Why Hire<span> Us</span></h4>
                                <span className='hireHeadlines' data-aos="fade-right" data-aos-duration="800">We Are <span>Experts</span> Dedicated to Making Your Concept  <span>Come True!</span></span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">

                            <div className="row whyHireCards">

                                <span></span>
                                {
                                    CardData.map((e) => {
                                        return <div className="col-sm-12 col-md-6 col-lg-3" key={e.id}>
                                            <div className="card">
                                                <span className='contactCardSpan'> <img className="card-img-top card1Img" src={e.img.src} alt="Card image cap" /> </span>
                                                <div className="card-body ">
                                                    <h5 className="card-title card1Title">{e.title}</h5>
                                                    <p className="card-text card1Text">{e.desc}</p>
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
                                <span className='hireHeadlines' data-aos="fade-right" data-aos-duration="800">Need <span>Assistance</span> With Your Project?</span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="hireLowerDiv">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <span className='hireLowerDivHeadline'>
                                            <span>We stay on top of the latest tech advancements to ensure your project is completed quickly and uses best of the Apps & Webs Solutions and frameworks suitable for your project.</span></span>
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

                                            <form ref={form} onSubmit={sendEmail}>

                                                <div className="mb-3 row">
                                                    <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" name='full_name' onChange={(e) => setName(e.target.value)} value={name}/>
                                                    </div>

                                                    <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" name='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                                                    </div>
                                                    <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Phone" name='contact_number' onChange={(e) => setNumber(e.target.value)} value={number}/>
                                                    </div>

                                                    <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example" name='budget' onChange={(e) => setBudget(e.target.value)} value={budget}>
                                                            <option selected>Your Budget</option>
                                                            <option value="$500">Less than $500</option>
                                                            <option value="$500-$1000">$500-$1000</option>
                                                            <option value="$1000-$1500">$1000-$1500</option>
                                                            <option value="$1500">Above $1500</option>
                                                        </select>
                                                    </div>

                                                    <div className="mb-3 mt-4">
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" name='message' placeholder='Your Message' onChange={(e) => setMessage(e.target.value)} value={message}/>
                                                    </div>

                                                    <button type='submit' className='homeCommon_btn'>Submit</button>
                                                </div>
                                            </form>
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
                            <div className="hireUpperDiv" data-aos="fade-right" data-aos-duration="800">
                                <span className='commonHeadlines' >4 Steps to <span>Success</span> With <span>WRTeam</span></span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 lowerDiv">

                            <span className='cardsdot'></span>
                            <div className="row successCards">
                                {
                                    Card2Data.map((e) => {
                                        return <div className="col-sm-12 col-md-6 col-lg-3" key={e.id}>
                                            <div className="card">
                                                <span className=''> <img className="card-img-top" src={e.img.src} alt="Card image cap" /> </span>
                                                <div className="card-body ">
                                                    <h5 className="card-title">{e.title}</h5>
                                                    <p className="card-text">{e.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <span className='cardsdot2'></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index
