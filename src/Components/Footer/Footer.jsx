// import '../../../public/Css/footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { BsArrowRightCircle, BsFillTelephoneFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { DiEnvato } from "react-icons/di";

import { AiOutlineMail } from "react-icons/ai";

import navLogo from '../../Asset/navLogo.svg'
import GetInTouch from "../GetInTouch";
import { useRouter } from "next/router";
// import Image from 'next/image';
// import { BiRightArrow } from 'react-icons/bi';

const Footer = () => {

   const router = useRouter()
   const { pathname } = router;

   // Check if the current route contains "contact-us"
   const isContactUsPage = pathname.includes("contact-us");
   console.log(isContactUsPage)

   return (
      <>
         <footer id='footer'>
         {!isContactUsPage && <GetInTouch />}

            <div className={`container footerContainer  ${isContactUsPage ? "footerTopPad " : ""}`}>
               <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-2">
                     <div className="cont logoCont">
                        <div className="footLogo">
                           
                        <img src={navLogo.src} alt='navLogo' />

                        </div>
                        <span>WRTeam has creative and dedicated group of developers who are mastered in apps Developments and Web development with a nice in delivering quality solutions to customers across the globe.</span>
                        <div className='socialIcons'>
                           <span id='followSpan'>Follow Us</span>
                           <span className='icons'>
                              <BsFacebook />
                              <FaInstagram />
                              <BsLinkedin />
                              <PiYoutubeLogoFill />
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-2">
                     <div className="cont productCont">
                        <span className='footercontHeading'>Menu Links</span>
                        <div className="flinks">
                           <span className='footerArrow'> < BsArrowRightCircle size={18} /></span>
                           <span className='footerLinks'> About Us</span>

                        </div>

                        <div className="flinks">

                           <span className='footerArrow'> < BsArrowRightCircle size={18} /></span>
                           <span className='footerLinks'> Blogs</span>

                        </div>

                        <div className="flinks">

                           <span className='footerArrow'> < BsArrowRightCircle size={18} /></span>
                           <span className='footerLinks'> Career</span>
                        </div>

                        <div className="flinks">
                           <span className='footerArrow'> < BsArrowRightCircle size={18} /></span>
                           <span className='footerLinks'>Hire Us</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-2">

                     <div className="cont companyCont">
                        <span className='footercontHeading'>Services</span>

                        <div className="flinks">
                           <span className="footerArrow"> < BsArrowRightCircle size={18} /></span>
                           <span className="footerLinks"> Web Development</span>
                        </div>

                        <div className="flinks">
                           <span className="footerArrow"> < BsArrowRightCircle size={18} /></span>
                           <span className="footerLinks"> App Development</span>
                        </div>

                        <div className="flinks">
                           <span className="footerArrow"> < BsArrowRightCircle size={18} /></span>
                           <span className="footerLinks"> UI/UX Design Service</span>
                        </div>

                        <div className="flinks">
                           <span className="footerArrow"> < BsArrowRightCircle size={18} /></span>
                           <span className="footerLinks"> Digital Marketing Service</span>
                        </div>
                     </div>

                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-2">

                     <div className="cont policyCont">
                        <span className='footercontHeading'>Product</span>

                        <div className="flinks">
                           <span className='footerArrow'> < BsArrowRightCircle size={18} /> </span>
                           <span className='footerLinks'> Web Products</span>
                        </div>

                        <div className="flinks">
                           <span className='footerArrow'> < BsArrowRightCircle size={18} /></span>
                           <span className='footerLinks'>  App Products</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-2" id='reachus_sect'>

                     <div className="cont reachusCont">
                        <span className='footercontHeading'>Get in Touch</span>

                        <div className="contactDetails">

                           <div className="footContCards">
                              <div className="contIconDiv">
                                 <span className='contactIcons'>  <BsFillTelephoneFill size={22} /> </span>
                              </div>
                              <div className="contactContent">
                                 <span className='footerLinks'> Call </span>
                                 <span className='footerLinks'>+91 97979 45459 </span>
                              </div>
                           </div>

                           <div className="footContCards">
                              <div className="contIconDiv">
                                 <span className='contactIcons'><AiOutlineMail size={22} />  </span>
                              </div>
                              <div className="contactContent">
                                 <span className='footerLinks'> Mail </span>
                                 <span className='footerLinks'>Support@wrteam.in  </span>
                              </div>
                           </div>

                           <div className="footContCards">
                              <div className="contIconDiv">
                                 <span className='contactIcons' id='locationIcon'> <FaLocationDot size={22} /> </span>
                              </div>
                              <div className="contactContent">
                                 <span className='footerLinks'> Office Address </span>
                                 <span className='footerLinks'>  #262-263, Time Square Empire, SH 42 Mirjapar Highway, Bhuj - Kutch 370001 Gujarat India.
                                 </span>
                              </div>
                           </div>



                        </div>

                     </div>
                  </div>
               </div>
               <div className="copyRight ">
                  <span>Copyright © 2023 WRTeam | Powered by WRTeam</span>
                  <span>Terms of Use | Privacy Policy | Copyright & Disclaimer</span>
               </div>
            </div>


         </footer>
      </>
   )
}

export default Footer
