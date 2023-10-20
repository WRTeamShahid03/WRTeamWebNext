import React, { useRef, useState } from 'react'
import Breadcrum from '@/Components/Breadcrum'
import trianglePattern from '../../src/Asset/Icons/Triangle Pattern.png'
import dotsPattern from '../../src/Asset/Icons/Dots Pattern.png'
import ourValues from '../../src/Asset/Images/our_values.png'
import Link from 'next/link'
import { BsArrowRightCircle } from 'react-icons/bs'
import { FiUploadCloud } from 'react-icons/fi'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'


const index = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [experience, setExperience] = useState('')
    const [qualification, setQualification] = useState('')
    const [applyFor, setApplyFor] = useState('')
    const [fileDataUrl, setFileDataUrl] = useState(null);
    const form = useRef();


    const handleFileChange = (event) => {
        const file = event.target.files[0];

        // Check if a file is selected
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // After reading the file, set it in the state
                setSelectedFile(file);
                setFileDataUrl(reader.result);
            };

            // Read the file as a data URL
            reader.readAsDataURL(file);
        } else {
            // No file selected, reset the state
            setSelectedFile(null);
            setFileDataUrl(null);
        }
    };

    const workListData = [
        {
            id: 0,
            srn: '01',
            text: 'Competitive Salary and Incentives'
        },
        {
            id: 1,
            srn: '02',
            text: 'Collaborative Work ulture'
        },
        {
            id: 2,
            srn: '03',
            text: 'Learning and Growth'
        },
        {
            id: 3,
            srn: '04',
            text: 'Flexible Timings'
        },
        {
            id: 4,
            srn: '05',
            text: 'Birthday Celebrations'
        },
        {
            id: 5,
            srn: '06',
            text: 'Rewards, Recognition and Appreciation'
        },
        {
            id: 6,
            srn: '07',
            text: 'SatFun activities'
        },
    ]

    const jobCardData = [
        {
            id: 0,
            title: 'Senior Software Engineer',
            text: 'Experience: 5+ years',
            link: ''
        },
        {
            id: 1,
            title: 'Network Administrator',
            text: 'Experience: 3+ years',
            link: ''
        },
        {
            id: 2,
            title: 'Data Scientist',
            text: 'Experience: 2+ years',
            link: ''
        },
        {
            id: 3,
            title: 'Cybersecurity Analyst',
            text: 'Experience: 3+ years',
            link: ''
        },
        {
            id: 4,
            title: 'Front-End Developer',
            text: 'Experience: 2+ years',
            link: ''
        },
        {
            id: 5,
            title: 'DevOps Engineer',
            text: 'Experience: 4+ years',
            link: ''
        },
    ]


    const sendEmail = (e) => {
        e.preventDefault();
        if (!name || !number || !email || !qualification || !applyFor || !experience) {
            toast.error('Fill out the form first')
        }
        else {
            emailjs.sendForm('service_f0zhqhh', 'template_4gxxd1i', form.current, 'RITTN3aEr8VNyLQdN')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            toast.success('Submited Successfully !')
            setName('')
            setEmail('')
            setNumber('')
            setExperience('')
            setQualification('')
            setApplyFor('')
            setFileDataUrl('')
        }

    };
    return (
        <div className='careerPage'>
            <Breadcrum title='Career' contentOne='Home' contentTwo='Career' />

            <section id='empire' className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="emipreHeadlines">
                            <span className="common_span">
                                Work <span> With Us</span>
                            </span>
                            <span className="commonHeadlines" data-aos="fade-right" data-aos-duration="1000" >
                                Join Our <span>Empire</span>
                            </span>

                            <span className='commonPara'>
                                WRTeam invites all aspiring and experienced IT professionals to join and become a part of our family and give the right direction to their career. We're a leading web & mobile app development company, offering the best App development solutions at reasonable prices. Our motto is to grow together, and we focus on the holistic development of your career along with the growth of the company.
                            </span>
                        </div>
                    </div>
                </div>

            </section>

            <section id='wrTeamWork'>
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="wrTeamLeftDiv">
                                <span className='common_span'>Work With <span>Us</span> </span>
                                <h3 data-aos="fade-right" data-aos-duration="1000" className='comman_Headlines'>Why Work With <span>WRTeam </span></h3>

                                <p className='firstP comman_para'>We value creativity, collaboration, and continuous learning</p>

                                <div className="workList">
                                    {
                                        workListData.map((e) => {
                                            return <div className="list" key={e.id} data-aos="fade-left" data-aos-duration="2000">
                                                <span>{e.srn}</span>
                                                <span>{e.text}</span>
                                            </div>
                                        })

                                    }

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="wrTeamRightDiv" >

                                <div className="rightDivImg" data-aos="fade-down-left" data-aos-duration="2000">

                                    <img src={ourValues.src} alt="" />

                                </div>

                                <div data-aos="fade-left" data-aos-duration="2000">

                                    <img src={trianglePattern.src} alt="trianglePattern" className='trianglePattern2' />
                                </div>
                                <img src={dotsPattern.src} alt="dotsPattern" className='dotsPattern' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='jobOpening' className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="jobHeadlines">
                            <span className='common_span'><span>Work</span> With Us</span>
                            <h3 className='commonHeadlines' data-aos="fade-right" data-aos-duration="1000" >Current <span> Job Openings</span> At WRTeam</h3>
                            <span className='commonPara'>Explore our current opportunities and fill in the necessary details to apply for the desired profile. We'll be in touch with you very soon. If you don't hear from us within 7 days, you can reach us at <span className='mailHR'>hr@wrteam.com</span></span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row jobCards">
                            {
                                jobCardData.map((e) => {
                                    return <div className="col-sm-12 col-md-6 col-lg-4" key={e.id}>
                                        <div className="card" data-aos="fade-up" data-aos-duration="2000">
                                            <div className="cardBody">
                                                <span className='card-title'>{e.title}</span>
                                                <span className='card-text'>{e.text}</span>
                                            </div>
                                            <Link href='...'> <span className='applyBtn'>Apply Now < BsArrowRightCircle /> </span></Link>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>


            <section id='applyNow' className='container'>
                <div className="wrapper">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="applyHeadlines">
                                <h3 data-aos="fade-down" data-aos-duration="1000" className='comman_Headlines'>Apply<span> Now</span></h3>

                                <span className='commonPara'>Explore our current opportunities and fill in the necessary details to apply for the desired profile. We'll be in touch with you very soon. If you don't hear from us within 7 days, you can reach us at <span className='mailHR'>hr@wrteam.com</span></span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="formDiv">

                                <form ref={form} onSubmit={sendEmail}>

                                    <div className="mb-3 row">
                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" className="form-control" name='full_name' id="exampleFormControlInput1" placeholder="Write Your Name Full Name" onChange={(e) => setName(e.target.value)} value={name} />
                                        </div>

                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <label htmlFor="name">Email</label>
                                            <input type="email" className="form-control" name='email' id="exampleFormControlInput1" placeholder="Write Your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <label htmlFor="name">Contact Number</label>
                                            <input type="text" className="form-control" name='contact_number' id="exampleFormControlInput1" placeholder="Write Your Phone Number" onChange={(e) => setNumber(e.target.value)} value={number} />
                                        </div>

                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <label htmlFor="name">Qualification</label>
                                            <input type="text" className="form-control" name='qualification' id="exampleFormControlInput1" placeholder="Write Your Qualification" onChange={(e) => setQualification(e.target.value)} value={qualification} />
                                        </div>

                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <label htmlFor="name">Apply For</label>
                                            <select className="form-select form-select-md mb-3" name='apply_for' aria-label=".form-select-lg example" onChange={(e) => setApplyFor(e.target.value)} value={applyFor} >
                                                <option selected>Select Apply For</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <label htmlFor="name">Experience</label>
                                            <select className="form-select form-select-md mb-3" name='experience' aria-label=".form-select-lg example" onChange={(e) => setExperience(e.target.value)} value={experience} >
                                                <option defaultValue selected>Select Your Experience</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="item-wrapper one col-sm-12 col-md-12 col-lg-12">
                                            <div className="item">
                                                {selectedFile ? <p className='fileName'>Uploaded File: {selectedFile.name}</p> : <p className='fileName'>Upload File</p>}
                                                <div className="item-inner">
                                                    <div className="item-content">
                                                        <div className="image-upload">
                                                            {selectedFile ? (
                                                                <div className="img-uploaded">
                                                                    <img src={fileDataUrl} alt="" />
                                                                </div>
                                                            ) : (
                                                                <label style={{ cursor: "pointer" }} htmlFor="file_upload">
                                                                    <div className="h-100">
                                                                        <div className="dplay-tbl">
                                                                            <div className="dplay-tbl-cell">
                                                                                <FiUploadCloud size={30} color='#545A6880' />
                                                                                <h6 className="mt-10 mb-70 filePlaceholder">Choose A File Or Drag It Here.</h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            )}

                                                            <input
                                                                data-required="image"
                                                                type="file"
                                                                name="file_uploaded"
                                                                id="file_upload"
                                                                className="image-input"
                                                                onChange={handleFileChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <button type='submit' className='homeCommon_btn'>Submit</button>
                                        </div>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default index
