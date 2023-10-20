import Breadcrum from '@/Components/Breadcrum'
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import egrocer from '../../../src/Asset/Images/eGrocer_web.png'
import elite from '../../../src/Asset/Images/eLite_Quiz_web.png'
import ecart from '../../../src/Asset/Images/eCart_Web.png'
import news from '../../../src/Asset/Images/News-Web.png'
import eshop from '../../../src/Asset/Images/eShop_web.png'
import ecartSingle from '../../../src/Asset/Images/eCart_Web_Single.png'
import eshopMulti from '../../../src/Asset/Images/eShop_Multi_Web.png'
import erestro from '../../../src/Asset/Images/eRestro_Web.png'
import espeech from '../../../src/Asset/Images/eSpeech_web.png'
import { LiaStarSolid } from 'react-icons/lia';
import { BsStarHalf } from 'react-icons/bs';
import { RiShoppingCartFill } from 'react-icons/ri';
import Link from 'next/link';


const Index = () => {

    const [sortOption, setSortOption] = useState('lowToHigh');

    const cardData = [
        {
            id: 0,
            img: egrocer,
            sales: '133',
            rating: '(4.8)',
            title: 'eGrocer - Online Multi Vendor Grocery Store, eCommerce Marketplace...',
            text: 'PHP,React JS',
            price: '$59',
            link: ''

        },
        {
            id: 1,
            img: elite,
            sales: '353',
            rating: '(4.7)',
            title: 'Elite Quiz - Trivia Quiz | Quiz Game - Web Version',
            text: 'Codeigniter, React JS',
            price: '$19',
            link: ''

        },
        {
            id: 2,
            img: ecart,
            sales: '330',
            rating: '(4.6)',
            title: 'eCart Web - Multi Vendor eCommerce Marketplace',
            text: 'PHP, Laravel',
            price: '$29',
            link: ''

        },
        {
            id: 3,
            img: news,
            sales: '523',
            rating: '(4.9)',
            title: 'News Web - News Website with Admin panel',
            text: 'React JS',
            price: '$39',
            link: ''

        },
        {
            id: 4,
            img: eshop,
            sales: '516',
            rating: '(4.9)',
            title: 'eShop Web- eCommerce Single Vendor Website | eCommerce...',
            text: 'PHP, Codeigniter',
            price: '$39',
            link: ''

        },
        {
            id: 5,
            img: ecartSingle,
            sales: '587',
            rating: '(4.9)',
            title: 'eCart Web- eCommerce Store Website with Laravel',
            text: 'PHP, Laravel',
            price: '$19',
            link: ''

        },
        {
            id: 6,
            img: eshopMulti,
            sales: '433',
            rating: '(4.6)',
            title: 'eShop Web - Multi Vendor eCommerce Marketplace / CMS',
            text: 'PHP, CodeIgniter',
            price: '$49',
            link: ''

        },
        {
            id: 7,
            img: erestro,
            sales: '40',
            rating: '(5.0)',
            title: 'eRestro Multi Restaurant Web - Online Multi-Vendor & Restaurant...',
            text: 'React JS',
            price: '$19',
            link: ''

        },
        {
            id: 8,
            img: espeech,
            sales: '159',
            rating: '(5.0)',
            title: 'eSpeech - AI Text to Speech Marketplace with SaaS',
            text: 'PHP, CodeIgniter',
            price: '$49',
            link: ''

        },
    ]

    const sortProducts = (option) => {
        if (option === 'lowToHigh') {
            return cardData.slice().sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
        } else if (option === 'highToLow') {
            return cardData.slice().sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
        }
    };

    // Function to handle select change event
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };
    return (
        <>

            <Breadcrum title='App' blueText='Products' contentOne={'Home'} contentTwo={'Products'} contentThree={'App Products'}/>
            <section id='webPro' className='container'>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="webProHeadingDiv">
                            <span className='commonHeadlines' data-aos="fade-right" data-aos-duration="1000">We found <span>9</span> Products</span>
                            <div className="sortBy">
                                <span>Sort By :</span>
                                <select
                                    className="form-select form-select-md"
                                    aria-label=".form-select-lg example"
                                    onChange={handleSortChange}
                                    value={sortOption}
                                >
                                    <option value="lowToHigh">Price: Low to High</option>
                                    <option value="highToLow">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row cardsWrapper">
                            {
                                sortProducts(sortOption).map((e) => {
                                    return <div className="col-sm-12 col-md-6 col-lg-3" key={e.id}>
                                        <Card>
                                            <Card.Img variant="top" className='webProImg' src={e.img.src} />
                                            <Card.Body>
                                                <div className="ratingDiv">
                                                    <span className='sales'>{e.sales} Sales</span>
                                                    <span className='rating'> <span>
                                                        <LiaStarSolid size={20} color='#FFA800' />
                                                        <LiaStarSolid size={20} color='#FFA800' />
                                                        <LiaStarSolid size={20} color='#FFA800' />
                                                        <LiaStarSolid size={20} color='#FFA800' />
                                                        <BsStarHalf size={18} color='#FFA800' />
                                                    </span>{e.rating}</span>
                                                </div>
                                                <Card.Title>{e.title}</Card.Title>
                                                <Card.Text>
                                                    {e.text}
                                                </Card.Text>
                                            </Card.Body>
                                            <hr />
                                            <div className="cardFooter">
                                                <span className='priceDiv'>
                                                    <span>Price</span>
                                                    <span>{e.price}</span>
                                                </span>
                                                <Link href={e.link}> <span className='buyBtn'> <span><RiShoppingCartFill /></span>Buy</span></Link>
                                            </div>
                                        </Card>
                                    </div>
                                })
                            }

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Index
