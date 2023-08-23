import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'

const Breadcrum = ({title,contentOne,contentTwo}) => {
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
                <h1>About <span>Us</span></h1>
                <span className='pageName'>
                    <span>{contentOne} </span>
                    <span> <AiOutlineDoubleRight size={20} /> </span>
                    <span>{contentTwo}</span></span>
            </div>
        </div>
    )
}

export default Breadcrum
