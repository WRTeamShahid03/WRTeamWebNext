import Breadcrum from '@/Components/Breadcrum'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import egrocer from '../../../src/Asset/Images/web-products/eGrocer_web.png'
import egrocerSale from '../../../src/Asset/Images/Web/eGrocerSaleImg.jpg'
import elite from '../../../src/Asset/Images/web-products/eLite_Quiz_web.png'
import eliteSale from '../../../src/Asset/Images/Web/EliteQuizwebSaleImg.jpg'
import ecart from '../../../src/Asset/Images/web-products/eCart_Web.png'
import news from '../../../src/Asset/Images/web-products/News-Web.png'
import newsSale from '../../../src/Asset/Images/Web/NewsWebSaleImg.jpg'
import eshop from '../../../src/Asset/Images/web-products/eShop_web.png'
import eshopSale from '../../../src/Asset/Images/Web/eShopWebSingleSaleImg.jpg'
import ecartSingle from '../../../src/Asset/Images/web-products/eCart_Web_Single.png'
import eshopMulti from '../../../src/Asset/Images/web-products/eShop_Multi_Web.png'
import eshopMultiSale from '../../../src/Asset/Images/Web/eShopWebMultiSaleImg.jpg'
import erestro from '../../../src/Asset/Images/web-products/eRestro_Web.png'
import erestroSale from '../../../src/Asset/Images/Web/eRestroWebSaleImg.jpg'
import espeech from '../../../src/Asset/Images/web-products/eSpeech_web.png'
import ebrokerWeb from '../../../src/Asset/Images/web-products/eBroker_Web.png'
import eDemandWeb from '../../../src/Asset/Images/web-products/eDemand_Web.png'

import { LiaStarSolid } from 'react-icons/lia';
import { BsStarHalf } from 'react-icons/bs';
import { RiShoppingCartFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-hot-toast';



const WebProducts = () => {

    const [sortOption, setSortOption] = useState('mostpopular');

    const cardData = [
        {
            id: 0,
            img: egrocer,
            // img: egrocerSale,
            sales: '212',
            rating: '(4.8)',
            title: 'eGrocer - Online Multi Vendor Grocery Store, eCommerce Marketplace...',
            text: 'PHP,React JS',
            price: '$59',
            salePrice: '',
            link: 'https://1.envato.market/DK0gQn',
            popularity: '3'
        },
        {
            id: 1,
            img: elite,
            // img: eliteSale,
            sales: '460',
            rating: '(4.8)',
            title: 'Elite Quiz - Trivia Quiz | Quiz Game - Web Version',
            text: 'Codeigniter, React JS',
            price: '$19',
            salePrice: '',
            link: 'https://1.envato.market/LXaGzo',
            popularity: '4'
        },
        {
            id: 2,
            img: ecart,
            sales: '340',
            rating: '(4.7)',
            title: 'eCart Web - Multi Vendor eCommerce Marketplace',
            text: 'PHP, Laravel',
            price: '$59',
            salePrice: '',
            link: 'https://1.envato.market/VyNrvR',
            popularity: '7'
        },
        {
            id: 3,
            img: news,
            // img: newsSale,
            sales: '633',
            rating: '(4.9)',
            title: 'News Web - News Website with Admin panel',
            text: 'React JS',
            price: '$39',
            salePrice: '',
            link: 'https://1.envato.market/rQ4323',
            popularity: '5'
        },
        {
            id: 4,
            img: eshop,
            // img: eshopSale,
            sales: '590',
            rating: '(4.8)',
            title: 'eShop Web- eCommerce Single Vendor Website | eCommerce...',
            text: 'PHP, Codeigniter',
            price: '$39',
            salePrice: '',
            link: 'https://1.envato.market/QyPrb3',
            popularity: '6'
        },
        {
            id: 5,
            img: ecartSingle,
            sales: '594',
            rating: '(4.9)',
            title: 'eCart Web- eCommerce Store Website with Laravel',
            text: 'PHP, Laravel',
            price: '$39',
            salePrice: '',
            link: 'https://1.envato.market/9gGPz5',
            popularity: '8'
        },
        {
            id: 6,
            img: eshopMulti,
            // img: eshopMultiSale,
            sales: '524',
            rating: '(4.8)',
            title: 'eShop Web - Multi Vendor eCommerce Marketplace / CMS',
            text: 'PHP, CodeIgniter',
            price: '$49',
            salePrice: '',
            link: 'https://1.envato.market/LXEb9L',
            popularity: '9'
        },
        {
            id: 7,
            img: erestro,
            // img: erestroSale,
            sales: '53',
            rating: '(4.6)',
            title: 'eRestro Multi Restaurant Web - Online Multi-Vendor & Restaurant...',
            text: 'React JS',
            price: '$19',
            salePrice: '',
            link: 'https://1.envato.market/0ZB6XE',
            popularity: '10'
        },
        {
            id: 8,
            img: espeech,
            sales: '166',
            rating: '(0.0)',
            title: 'eSpeech - AI Text to Speech Marketplace with SaaS',
            text: 'PHP, CodeIgniter',
            price: '$29',
            salePrice: '',
            link: 'https://1.envato.market/B0Y3kx',
            popularity: '11'
        },
        {
            id: 9,
            img: ebrokerWeb,
            sales: '274',
            rating: '(4.7)',
            title: 'eBroker - Real Estate Property Buy-Rent-Sell Web Version',
            text: 'NextJs, Laravel',
            price: '$59',
            salePrice: '',
            link: 'https://1.envato.market/oqe11O',
            popularity: '11'
        },
        {
            id: 10,
            img: eDemandWeb,
            sales: '198',
            rating: '(4.8)',
            title: 'eDemand-Multi Vendor Web Version',
            text: 'PHP, CodeIgniter',
            price: '$59',
            salePrice: '',
            link: 'https://1.envato.market/KjKLxn',
            popularity: '11'
        },
    ]


    // Function to handle sorting based on the selected option
    // const sortProducts = (option) => {
    //     if (option === 'lowToHigh') {
    //         return cardData.slice().sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    //     } else if (option === 'highToLow') {
    //         return cardData.slice().sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    //     } else if (option === 'mostpopular') {
    //         return cardData.slice().sort((a, b) => parseInt(a.popularity, 10) - parseInt(b.popularity, 10));
    //     }
    // };

    const sortProducts = (option) => {
        const sortedData = cardData.slice().sort((a, b) => {
            const aPrice = parseFloat(a.price.slice(1));
            const bPrice = parseFloat(b.price.slice(1));
            const aSalePrice = parseFloat(a.salePrice.slice(1));
            const bSalePrice = parseFloat(b.salePrice.slice(1));

            switch (option) {
                case 'lowToHigh':
                    return (a.salePrice !== '' ? aSalePrice : aPrice) - (b.salePrice !== '' ? bSalePrice : bPrice);
                case 'highToLow':
                    return (b.salePrice !== '' ? bSalePrice : bPrice) - (a.salePrice !== '' ? aSalePrice : aPrice);
                case 'mostpopular':
                    return parseInt(a.popularity, 10) - parseInt(b.popularity, 10);
                default:
                    return 0;
            }
        });

        // Move items with salePrice to the beginning
        const itemsWithSalePrice = sortedData.filter((item) => item.salePrice !== '');
        const itemsWithoutSalePrice = sortedData.filter((item) => item.salePrice === '');

        return [...itemsWithSalePrice, ...itemsWithoutSalePrice];
    };

    // Function to handle select change event
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };
    return (
        <>

            <Breadcrum title='Web' blueText='Products' contentOne={'Home'} contentTwo={'Products'} contentThree={'Web Products'} />
            <section className='container webPro'>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="webProHeadingDiv">
                            <span className='commonHeadlines' >We found <span>{cardData.length}</span> Products</span>
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
                                    <option value="mostpopular">Most Popular</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row cardsWrapper">
                            {
                                sortProducts(sortOption).map((e) => {
                                    return <div className="col-sm-12 col-md-6 col-lg-3" key={e.id}>
                                        <Link href={e.link} target='_blank'>
                                            <Card>
                                                <Image height={0} width={0} loading="lazy" alt='product_img' className='webProImg card-img-top' src={e.img} />
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
                                                    {
                                                        e.title.length > 60 ? <Card.Title>{e.title.slice(0, 50)}...</Card.Title> : <Card.Title>{e.title}</Card.Title>
                                                    }
                                                    <Card.Text>
                                                        {e.text}
                                                    </Card.Text>
                                                </Card.Body>
                                                <hr />
                                                <div className="cardFooter">
                                                    <span className='priceDiv'>
                                                        <span>Price</span>
                                                        <div className='productPriceWrapper'>
                                                            {
                                                                e.salePrice === '' ?
                                                                    <span>{e.price}</span> :
                                                                    <span style={{ textDecorationLine: 'line-through' }}>{e.price}</span>
                                                            }
                                                            <span>{e.salePrice}</span>
                                                        </div>
                                                    </span>
                                                    <span className='buyBtn'> <span><RiShoppingCartFill /></span>Buy</span>
                                                </div>
                                            </Card>
                                        </Link>
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

export default WebProducts
