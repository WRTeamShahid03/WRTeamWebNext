import Breadcrum from '@/Components/Breadcrum'
import React from 'react'
import location from '../../src/Asset/Icons/ic_location.svg'
import mail from '../../src/Asset/Icons/mail.svg'
import call from '../../src/Asset/Icons/phone.svg'
import contactBg from '../../src/Asset/Images/contactFormBg.png'
import socialBg from '../../src/Asset/Images/Social_BG.png'
import companyLogo from '../../src/Asset/navLogo.svg'
import { BsFacebook, BsLinkedin, BsPinterest } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'

const index = () => {

    const cardData = [
        {
            id: 0,
            img: location,
            title: "Our Address",
            desc1: "#262-263, Time Square Empire, SH 42 Mirjapar highway, ",
            desc2: "Bhuj - Kutch 370001 Gujarat India."
        },
        {
            id: 0,
            img: mail,
            title: "Email Address",
            desc1: "support@wrteam.in",
            desc2: "www.wrteam.in"
        },
        {
            id: 0,
            img: call,
            title: "Phone Number",
            desc1: "+91 97979 45459",
            desc2: "+91 97979 45459"
        },
    ]
    return (
        <>
            <Breadcrum title="Contact" blueText="Us" contentOne="Home" contentTwo="Contact Us" />

            <section id='contactUs' className='container'>
                <div className="row contactCards">
                    {
                        cardData.map((e) => {
                            return <div className="col-sm-12 col-md-12 col-lg-4">

                                <div class="card">
                                    <span className='contactCardSpan'> <img class="card-img-top" src={e.img.src} alt="Card image cap" id='contactCardIcon' /> </span>
                                    <div class="card-body ">
                                        <h5 class="card-title contactCardTitle">{e.title}</h5>
                                        <p class="card-text contactCardText1">{e.desc1}</p>
                                        <p class="card-text contactCardText2">{e.desc2}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </section>

            <section id='contactForm' style={{
                background: `#283042 url(${contactBg.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: 'darken'
            }}>
                <div className='container'>

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 formWrapper">


                                <div className="socialDiv" style={{
                                    background: `rgb(2 0 16 / 61%) url(${socialBg.src})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: "no-repeat"
                                }}>
                                    <div className="blueBg">

                                        <div className="logo">
                                            <img src={companyLogo.src} alt="" />
                                        </div>
                                        <div className="socialContent">
                                            <span className='text'>Stay connected with us on social media for the latest updates, content, and more. Follow us today!</span>
                                            <span className='icons'>
                                                <Link href="">
                                                    <span>  <BsFacebook color='white' size={30} /> </span>
                                                </Link>

                                                <Link href="">
                                                    <span>  <AiFillTwitterCircle color='white' size={34} /> </span>
                                                </Link>

                                                <Link href="">
                                                    <span>  <BsPinterest color='white' size={30} /> </span>
                                                </Link>

                                                <Link href="">
                                                    <span style={{ borderRadius: "100%" }}>  <BsLinkedin color='white' size={30} /> </span>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8 formWrapper">

                                <div className="formDiv">
                                    <span className='formHeading'>Have something to ask or share? or just want to say HI!</span>

                                    <div className="mb-3 row">
                                    <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"></input>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Phone" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Subject"></input>
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

            </section >

            <section id="map" className='container'>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6879.666659015773!2d69.63730994896257!3d23.23263359742167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e5b00000001%3A0x99eb1d2a09bf7685!2sWRTeam!5e0!3m2!1sen!2sin!4v1694243415170!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    )
}

export default index
