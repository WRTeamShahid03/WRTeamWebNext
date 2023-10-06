import Breadcrum from '@/Components/Breadcrum'
import React from 'react'
import NewSilder from '../web-development/NewSlider'

const index = () => {
    return (
        <div className='container'>
            {/* <Breadcrum title={'App'} blueText={'Development'} contentOne={'Home'} contentTwo={'Services'} contentThree={'App Development'} /> */}
            <NewSilder/>
        </div>
    )
}

export default index
