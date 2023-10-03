// import '../../../public/Css/header.css'
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import navLogo from '../../Asset/wrteam logo.svg';
import { IoIosCall } from "react-icons/io";
import { AiFillPlusCircle } from 'react-icons/ai';
import Link from 'next/link';


const Header = () => {

  const [show, setShow] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);

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

  const handlers1 = {
    onMouseEnter: () => setMenuOpen1(true),
    onMouseLeave: () => setMenuOpen1(false),
  };
  const handlers2 = {
    onMouseEnter: () => setMenuOpen2(true),
    onMouseLeave: () => setMenuOpen2(false),
  };



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
                  <Link className="nav-link" href="/"> Home</Link>

                  <Link className='nav-link' href='/about-us'> About Us </Link>

                  <Dropdown title="Products" id="basic-nav-dropdown" onMouseEnter={handlers1.onMouseEnter}
                    onMouseLeave={handlers1.onMouseLeave}
                    show={menuOpen1}>
                    <Dropdown.Toggle id="dropdown-basic">
                      <span>Products <AiFillPlusCircle size={19} id='plusIcon' /></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" className='navItem1'> Web Products</Dropdown.Item>
                      <Dropdown.Item href="#/action-1" className='navItem2'>App Products</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  
                  <Dropdown title="Services" id="basic-nav-dropdown" onMouseEnter={handlers2.onMouseEnter}
                    onMouseLeave={handlers2.onMouseLeave}
                    show={menuOpen2}>
                    <Dropdown.Toggle id="dropdown-basic">
                      <span>Services <AiFillPlusCircle size={19} id='plusIcon' /></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" className='navItem3'> Web Development</Dropdown.Item>
                      <Dropdown.Item href="#/action-1" className='navItem4'>App Development</Dropdown.Item>
                      <Dropdown.Item href="#/action-1" className='navItem5'> UI/UX Design Service</Dropdown.Item>
                      <Dropdown.Item href="#/action-1" className='navItem6'> Digital Marketing Service</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Link className="nav-link" href="/blogs">Blogs</Link>

                  <Link className="nav-link" href="/career">Career</Link>

                  <Link className="nav-link" href="/contact-us/" style={{ textDecoration: "none" }}  >
                    <div className="contactNum">
                      <span id='callIcon'><IoIosCall size={28} /></span>
                      <div className="number">
                        <span>Hot Line Numbae</span>
                        <span>+91 12345 67890</span>
                      </div>
                    </div>
                  </Link>

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
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/AboutUs">About Us</Link>

          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">
              Web Products
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              App Products
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              App Development
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              UI/UX Design Service
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Digital Marketing Service
            </NavDropdown.Item>
          </NavDropdown>

          <Link className="nav-link" href="/Blogs">Blogs</Link>
          <NavDropdown title="About us" id="basic-nav-dropdown">
            <NavDropdown.Item href="/career">
              Career
            </NavDropdown.Item>
          </NavDropdown>

          <Link className="nav-link" href="/contact-us/" style={{ textDecoration: "none" }}  >
            <div className="contactNum">
              <span id='callIcon'><IoIosCall size={28} /></span>
              <div className="number">
                <span>Hot Line Numbae</span>
                <span>+91 12345 67890</span>
              </div>
            </div>
          </Link>

          <div id="rightSide">

            <Link href="/hire-us"> <button className="homeCommon_btn"> Hire Us </button> </Link>

          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
