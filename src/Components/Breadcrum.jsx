import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'

const Breadcrum = ({ title, blueText, contentOne, contentTwo, contentThree }) => {
    return (
        <div className='breadcrum'>
            <div className="lines">
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
                <span className='line4'></span>
                <span className='line5'></span>
            </div>
            <div className="container breadcrumContent">
                <h1 data-aos="fade-down" data-aos-duration="1000">{title} <span>{blueText}</span></h1>
                <div className='pageName' data-aos="fade-left" data-aos-duration="1000">
                    <span>{contentOne} </span>
                    <span> <AiOutlineDoubleRight size={20} /> </span>
                    <span>{contentTwo}</span>
                    {
                        contentThree ?
                            <>
                                <span> <AiOutlineDoubleRight size={20} /> </span>
                                <span>{contentThree}</span></> : ""

                    }

                </div>

            </div>
        </div>
    )
}

export default Breadcrum
