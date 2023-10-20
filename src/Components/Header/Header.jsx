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
                  <Navbar.Brand href="/">  <img src={navLogo.src} alt="navLogo" /> </Navbar.Brand>
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


                  {/* <Dropdown title="Products" id="basic-nav-dropdown" onMouseEnter={handlers1.onMouseEnter}
                    onMouseLeave={handlers1.onMouseLeave}
                    show={menuOpen1}>
                    <Dropdown.Toggle id="dropdown-basic" className={`${router.pathname.startsWith('/products') ? 'navActive' : ''}`}>
                      <span>Products <AiFillPlusCircle size={19} id='plusIcon' /></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className='navItem1'>
                        <Link href="/products/web-products" className={`${router.pathname === '/products/web-products' ? 'navActive' : ''}`}>Web Products</Link>
                      </Dropdown.Item>
                      <Dropdown.Item className='navItem2'>
                        <Link href="/products/app-products" className={`${router.pathname === '/products/app-products' ? 'navActive' : ''}`}>App Products</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}


                  {/* <Dropdown title="Services" id="basic-nav-dropdown" onMouseEnter={handlers2.onMouseEnter}
                    onMouseLeave={handlers2.onMouseLeave}
                    show={menuOpen2}>
                    <Dropdown.Toggle id="dropdown-basic" className={`${router.pathname.startsWith('/services') ? 'navActive' : ''}`}>
                      <span>Services <AiFillPlusCircle size={19} id='plusIcon' /></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className='navItem3'>
                        <Link href="/services/web-development" className={`${router.pathname === '/services/web-development' ? 'navActive' : ''}`}>Web Development</Link>
                      </Dropdown.Item>
                      <Dropdown.Item className='navItem4'>
                        <Link href="/services/app-development" className={`${router.pathname === '/services/app-development' ? 'navActive' : ''}`}>App Development</Link>
                      </Dropdown.Item>
                      <Dropdown.Item className='navItem5'>
                        <Link href="/services/ui-ux-design" className={`${router.pathname === '/services/ui-ux-design' ? 'navActive' : ''}`}>UI/UX Design Service</Link>

                      </Dropdown.Item>
                      <Dropdown.Item className='navItem6'>
                        <Link href="/services/digital-marketing" className={`${router.pathname === '/services/digital-markting' ? 'navActive' : ''}`}>Digital Marketing Service</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}

                  {/* <Link className={`nav-link ${router.pathname === '/blogs' ? 'navActive' : ''}`} href="/blogs">Blogs</Link> */}
                  <Link className={`nav-link ${router.pathname === '/career' ? 'navActive' : ''}`} href="/career">Career</Link>
                  <Link className={`nav-link ${router.pathname === '/contact-' ? 'navActive' : ''}`} href="/contact-us/">Contact Us</Link>


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
            <Link className="nav-link" href="/" onClick={() => setShow(false)}> Home</Link>

            <Link className='nav-link' href='/about-us' onClick={() => setShow(false)}> About Us </Link>

            <ProductDropdown setShow={setShow} />

            <ServiceDropdown setShow={setShow}/>

            {/* <Dropdown title="Products" id="basic-nav-dropdown" onMouseEnter={handlers1.onMouseEnter}
              onMouseLeave={handlers1.onMouseLeave}
              show={menuOpen1}>
              <Dropdown.Toggle id="dropdown-basic">
                <span>Products <AiFillPlusCircle size={19} id='plusIcon' /></span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className='navItem1'>
                  <Link href="/products/web-products" onClick={() => setShow(false)}>Web Products</Link>
                </Dropdown.Item>
                <Dropdown.Item className='navItem2'>
                  <Link href="/products/app-products" onClick={() => setShow(false)}>App Products</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown title="Services" id="basic-nav-dropdown" onMouseEnter={handlers2.onMouseEnter}
              onMouseLeave={handlers2.onMouseLeave}
              show={menuOpen2}>
              <Dropdown.Toggle id="dropdown-basic">
                <span>Services <AiFillPlusCircle size={19} id='plusIcon' /></span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className='navItem3'>
                  <Link href="/services/web-development" onClick={() => setShow(false)}>Web Development</Link>
                </Dropdown.Item>
                <Dropdown.Item className='navItem4'>
                  <Link href="/services/app-development" onClick={() => setShow(false)}>App Development</Link>
                </Dropdown.Item>
                <Dropdown.Item className='navItem5'>
                  <Link href="/services/ui-ux-design" onClick={() => setShow(false)}>UI/UX Design Service</Link>

                </Dropdown.Item>
                <Dropdown.Item href="#/action-1" className='navItem6'>
                  <Link href="/services/digital-marketing" onClick={() => setShow(false)}>Digital Marketing Service</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

            <Link className="nav-link" href="/contact-us" onClick={() => setShow(false)}>Contact Us</Link>

            <Link className="nav-link" href="/career" onClick={() => setShow(false)}>Career</Link>

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
