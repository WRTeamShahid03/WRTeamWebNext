// import '../../../public/Css/header.css'
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import navLogo from '../../Asset/wrteam logo.svg';
import { IoIosCall } from "react-icons/io";

import Link from 'next/link';
import { useRouter } from 'next/router';
import ProductDropdown from './ProductDropdown';
import ServiceDropdown from './ServiceDropdown';
import Image from 'next/image';



const Header = () => {

  const router = useRouter();
  const [show, setShow] = useState(false);
  // const [menuOpen1, setMenuOpen1] = useState(false);
  // const [menuOpen2, setMenuOpen2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [headerTop, setHeaderTop] = useState(0);
  const [scroll, setScroll] = useState(0);


  useEffect(() => {

    const nav = typeof document !== 'undefined' && document.querySelector(".nav");
    setHeaderTop(nav.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  // const handlers1 = {
  //   onMouseEnter: () => setMenuOpen1(true),
  //   onMouseLeave: () => setMenuOpen1(false),
  // };
  // const handlers2 = {
  //   onMouseEnter: () => setMenuOpen2(true),
  //   onMouseLeave: () => setMenuOpen2(false),
  // };


  return (
    <>

      <Navbar expand="lg" id="header" className={`nav ${scroll > headerTop ? "sticky " : ""}`}>

        <div className='container'>
          <div className="row">
            <div className="col-sm-5 col-md-5 col-lg-5">
              <div id="leftSide">
                <div className="navLogo">
                  <Navbar.Brand href="/">  <Image height={0} width={0} loading="lazy"  src={navLogo} alt="navLogo" /> </Navbar.Brand>
                </div>
              </div>
            </div>
            <div className="col-sm-7 col-md-7 col-lg-7">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link className={`nav-link ${router.pathname === '/' ? 'navActive' : ''}`} href="/"> Home</Link>

                  <Link className={`nav-link ${router.pathname === '/about-us' ? 'navActive' : ''}`} href='/about-us'> About Us </Link>

                  <ProductDropdown setShow={setShow}/>

                  <ServiceDropdown setShow={setShow}/>

                  {/* <Link className={`nav-link ${router.pathname === '/blogs' ? 'navActive' : ''}`} href="/blogs">Blogs</Link> */}

                  <Link className={`nav-link ${router.pathname === '/career' ? 'navActive' : ''}`} href="/career">Career</Link>

                  <Link className={`nav-link ${router.pathname === '/contact-us' ? 'navActive' : ''}`} href="/contact-us">Contact Us</Link>
                 
                  {/* <Link className="nav-link" href="/contact-us/" style={{ textDecoration: "none" }}  >
                    <div className="contactNum">
                      <span id='callIcon'><IoIosCall size={28} /></span>
                      <div className="number">
                        <span>Hot Line Number</span>
                        <span>+91 12345 67890</span>
                      </div>
                    </div>
                  </Link> */}

                  <div id="rightSide">

                    <Link href="/hire-us"> <button className="homeCommon_btn"> Hire Us </button> </Link>

                  </div>
                </Nav>

              </Navbar.Collapse>
            </div>
          </div>
          <span onClick={handleShow} id='hamburg'><GiHamburgerMenu size={36} /></span>
        </div>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement='end'
        scroll={true}
        backdrop={true}>
        <Offcanvas.Header closeButton className='btn-close-white'>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto">
            <Link className={`nav-link ${router.pathname === '/' ? 'navActive' : ''}`} href="/" onClick={() => setShow(false)}> Home</Link>

            <Link className={`nav-link ${router.pathname === '/about-us' ? 'navActive' : ''}`} href='/about-us' onClick={() => setShow(false)}> About Us </Link>

            <ProductDropdown setShow={setShow} />

            <ServiceDropdown setShow={setShow}/>

            <Link className={`nav-link ${router.pathname === '/career' ? 'navActive' : ''}`} href="/career" onClick={() => setShow(false)}>Career</Link>

            <Link className={`nav-link ${router.pathname === '/contact-us' ? 'navActive' : ''}`} href="/contact-us" onClick={() => setShow(false)}>Contact Us</Link>


            {/* <Link className="nav-link" href="/contact-us/" style={{ textDecoration: "none" }} onClick={() => setShow(false)} >
              <div className="contactNum">
                <span id='callIcon'><IoIosCall size={28} /></span>
                <div className="number">
                  <span>Hot Line Number</span>
                  <span>+91 12345 67890</span>
                </div>
              </div>
            </Link> */}

            <div id="rightSide">

              <Link href="/hire-us" onClick={() => setShow(false)}> <button className="homeCommon_btn"> Hire Us </button> </Link>

            </div>
          </Nav>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
