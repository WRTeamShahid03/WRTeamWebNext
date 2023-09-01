import React from 'react'
import getTouch from '../Asset/Images/getTouch.png'

const GetInTouch = () => {
  return (
    <div className="getInTouch container" style={{
        background: `url(${getTouch.src})`,
        backgroundSize: 'cover'
    }}>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="getTouchText">
                    <span className='getTouchTitle'>GET TO MEET OUR EXPERT</span>
                    <span className='getTouchDesc'>Tell us about the hurdles you're currently facing in your business</span>
                </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-2">
                <div className="getTouchBtn">
                    <button className='homeCommon_btn'>Get In Touch</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch
