import Breadcrum from '@/Components/Breadcrum'
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { LiaStarSolid } from 'react-icons/lia';
import { BsStarHalf } from 'react-icons/bs';
import { RiShoppingCartFill } from 'react-icons/ri';
import Link from 'next/link';
import ebroker from '../../../src/Asset/Images/app-products/01_eBroker app.jpg'
import ebrokerSale from '../../../src/Asset/Images/App/ebrokerSale.jpg'
import edemand from '../../../src/Asset/Images/app-products/02_eDemand app.jpg'
import edemandSale from '../../../src/Asset/Images/App/eDemandSale.jpg'
import egrocer from '../../../src/Asset/Images/app-products/03_eGrocer app.jpg'
import egrocerSale from '../../../src/Asset/Images/App/eGrocerSale.jpg'
import eschool from '../../../src/Asset/Images/app-products/04_eSchool app.jpg'
import eschoolSale from '../../../src/Asset/Images/App/eSchoolSale.jpg'
import erestro from '../../../src/Asset/Images/app-products/05-eRestro App.jpg'
import erestroSale from '../../../src/Asset/Images/App/eRestroSale.jpg'
import espeech from '../../../src/Asset/Images/app-products/06_eSpeech App.jpg'
import primeWeb from '../../../src/Asset/Images/app-products/07-Prime Web.jpg'
import primeWebSale from '../../../src/Asset/Images/App/primewebSale.jpg'
import eshop from '../../../src/Asset/Images/app-products/08_eShop multi app.jpg'
import eshopSale from '../../../src/Asset/Images/App/eShop MultivendorSale.jpg'
import smartKit from '../../../src/Asset/Images/app-products/09_SmartKit Pro App.jpg'
import smartKitSale from '../../../src/Asset/Images/App/smartKitSale.jpg'
import ticTac from '../../../src/Asset/Images/app-products/10_Tic Tac Toe app.jpg'
import elite from '../../../src/Asset/Images/app-products/11_Elite Quiz App.jpg'
import eliteSale from '../../../src/Asset/Images/App/eliteQuizSale.jpg'
import qearner from '../../../src/Asset/Images/app-products/12_Qearner app.jpg'
import ebook from '../../../src/Asset/Images/app-products/13_eBook app.jpg'
import news from '../../../src/Asset/Images/app-products/14_News App.jpg'
import newsSale from '../../../src/Asset/Images/App/newsSale.jpg'
import ecart from '../../../src/Asset/Images/app-products/15_eCart App Multi.jpg'
import eshopSingle from '../../../src/Asset/Images/app-products/16_eShop_Single-admin_Store.jpg'
import eShopSingleSale from '../../../src/Asset/Images/App/eShopManagerSale.jpg'

import ecartSingle from '../../../src/Asset/Images/app-products/17_eCart admin(single).jpg'
import eshopSingleApp from '../../../src/Asset/Images/app-products/18_eShop App single.jpg'
import eshopSingleAppSale from '../../../src/Asset/Images/App/eShopAppSale.jpg'
import radioApp from '../../../src/Asset/Images/app-products/19_Radio Online app.jpg'
import quiz from '../../../src/Asset/Images/app-products/20_Quiz Online (iOS).jpg'
import quizAndroid from '../../../src/Asset/Images/app-products/21_Quiz Online (Android).jpg'
import ecartApp from '../../../src/Asset/Images/app-products/22_eCart App Single.jpg'
import quotes from '../../../src/Asset/Images/app-products/23_Quotes app.jpg'
import eschoolSas from '../../../src/Asset/Images/eSchoolSaas.jpg'
import erestroSingleVendr from '../../../src/Asset/Images/erestroSingleVendr.jpg'
import erestroSingleVendrSale from '../../../src/Asset/Images/App/eRestroSingleSale.jpg'

import Head from 'next/head';
import Image from 'next/image';


const Index = () => {

    const [sortOption, setSortOption] = useState('mostpopular');

    const cardData = [
        {
            id: 0,
            // img: ebroker,
            img: ebrokerSale,
            sales: '267',
            rating: '(4.9)',
            title: 'eBroker - Real Estate Property Buy-Rent-Sell Flutter app with Laravel Admin Panel',
            text: 'Flutter,Laravel,Codeigniter',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/oqe11O',
            popularity: '2'
        },
        {
            id: 1,
            // img: edemand,
            img: edemandSale,
            sales: '195',
            rating: '(4.8)',
            title: 'eDemand-Multi Vendor On Demand Handy Services, Handyman with Flutter App | Admin panel',
            text: 'Codeigniter,Flutter',
            price: '$59',
            salePrice: '$29',

            link: 'https://1.envato.market/KjKLxn',
            popularity: '5'
        },
        {
            id: 2,
            // img: egrocer,
            img: egrocerSale,
            sales: '212',
            rating: '(4.9)',
            title: 'eGrocer - Online Multi Vendor Grocery Store, eCommerce Marketplace Flutter Full App with Admin Panel',
            text: 'Flutter,Codeigniter',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/DK0gQn',
            popularity: '4'
        },
        {
            id: 3,
            // img: eschool,
            img: eschoolSale,
            sales: '277',
            rating: '(4.9)',
            title: 'eSchool - School Management System with Student | Parents | Teacher Flutter App | Laravel Admin',
            text: 'Flutter,Laravel',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/babzGx',
            popularity: '7'
        },
        {
            id: 4,
            // img: erestro,
            img: erestroSale,
            sales: '158',
            rating: '(4.6)',
            title: 'eRestro - Multi Restaurant Flutter App | Food Ordering App with Admin Panel & Restaurant Panel',
            text: 'Flutter,Codeigniter',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/QyPrNA',
            popularity: '11'
        },
        {
            id: 5,
            img: espeech,
            sales: '82',
            rating: '(0)',
            title: 'eSpeech - AI Text to Speech Flutter Full App',
            text: 'Flutter,Codeigniter',
            price: '$29',
            salePrice: '',
            link: 'https://1.envato.market/R5PjOg',
            popularity: '14'
        },
        {
            id: 6,
            // img: primeWeb,
            img: primeWebSale,
            sales: '1053',
            rating: '(4.6)',
            title: 'Prime Web - Convert Website to a Flutter App | Web View App | Web to App',
            text: 'Flutter',
            price: '$19',
            salePrice: '$9',
            link: 'https://1.envato.market/y2g3m2',
            popularity: '8'
        },
        {
            id: 7,
            // img: eshop,
            img: eshopSale,
            sales: '936',
            rating: '(4.9)',
            title: 'eShop-Multi Vendor eCommerce App & eCommerce Vendor Marketplace Flutter App',
            text: 'Flutter,CodeIgniter',
            price: '$69',
            salePrice: '$34',
            link: 'https://1.envato.market/R5PjZN',
            popularity: '7'
        },
        {
            id: 8,
            // img: smartKit,
            img: smartKitSale,
            sales: '402',
            rating: '(4.2)',
            title: 'SmartKit Pro - Flutter Biggest UI Kit | Flutter 3.0 UI kit | Ready to Use',
            text: 'Flutter',
            price: '$29',
            salePrice: '$14',
            link: 'https://1.envato.market/KjKLZx',
            popularity: '21'
        },
        {
            id: 9,
            img: ticTac,
            sales: '202',
            rating: '(4.2)',
            title: 'Tic Tac Toe - The Classic Flutter Tic Tac Toe Game',
            text: 'Flutter',
            price: '$19',
            salePrice: '',
            link: 'https://1.envato.market/vNzrJA',
            popularity: '22'
        },
        {
            id: 10,
            // img: elite,
            img: eliteSale,
            sales: '1259',
            rating: '(4.7)',
            title: 'Elite Quiz - Trivia Quiz | Quiz Game - Flutter Full App + Admin Panel',
            text: 'Flutter,CodeIgniter',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/6eWKYN',
            popularity: '1'
        },
        {
            id: 11,
            img: qearner,
            sales: '338',
            rating: '(4.8)',
            title: 'Qearner - Quiz App | Android Quiz game with Earning System + Admin panel',
            text: 'Php',
            price: '$39',
            salePrice: '',
            link: 'https://1.envato.market/6eWKNG',
            popularity: '15'
        },
        {
            id: 12,
            img: ebook,
            sales: '106',
            rating: '(5.0)',
            title: 'Flutter Offline eBook App',
            text: 'Flutter',
            price: '$19',
            salePrice: '',
            link: 'https://1.envato.market/1re3vg',
            popularity: '23'
        },
        {
            id: 13,
            // img: news,
            img: newsSale,
            sales: '633',
            rating: '(4.9)',
            title: 'News App and Web -Flutter News App for Android and IOS App | News Website with Admin panel',
            text: 'Flutter',
            price: '$39',
            salePrice: '$19',
            link: 'https://1.envato.market/rQ4323',
            popularity: '9'
        },
        {
            id: 14,
            img: ecart,
            sales: '600',
            rating: '(4.7)',
            title: 'eCart - Multi Vendor eCommerce System',
            text: 'Php',
            price: '$59',
            salePrice: '',
            link: 'https://1.envato.market/zNg326',
            popularity: '19'
        },
        {
            id: 15,
            // img: eshopSingle,
            img: eShopSingleSale,
            sales: '146',
            rating: '(5.0)',
            title: 'eShop - Ecommerce Admin / Store Manager app',
            text: 'Flutter',
            price: '$19',
            salePrice: '$9',
            link: 'https://1.envato.market/21kqdQ',
            popularity: '13'
        },
        {
            id: 16,
            // img: eshopSingleApp,
            img: eshopSingleAppSale,
            sales: '716',
            rating: '(4.9)',
            title: 'eShop- eCommerce Single Vendor App | Shopping eCommerce App with Flutter',
            text: 'Flutter,CodeIgniter',
            price: '$49',
            salePrice: '$24',
            link: 'https://1.envato.market/VmaeNE',
            popularity: '12'
        },
        {
            id: 17,
            img: radioApp,
            sales: '206',
            rating: '(4.3)',
            title: 'Radio Online - Flutter Full App',
            text: 'Flutter,CodeIgniter',
            price: '$19',
            salePrice: '',
            link: 'https://1.envato.market/eKvGzO',
            popularity: '20'
        },
        {
            id: 18,
            img: quiz,
            sales: '333',
            rating: '(4.4)',
            title: 'Quiz Online - Full IOS Quiz App + Admin panel',
            text: 'Php',
            price: '$59',
            salePrice: '',
            link: 'https://1.envato.market/75e7Pg',
            popularity: '17'
        },
        {
            id: 19,
            img: quizAndroid,
            sales: '2754',
            rating: '(4.8)',
            title: 'Quiz Online | Trivia Quiz | Android Quiz Game + Admin Panel',
            text: 'Php',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/NkBVLV',
            popularity: '16'
        },
        {
            id: 20,
            img: ecartApp,
            sales: '1119',
            rating: '(4.8)',
            title: 'eCart - Grocery, Food Delivery, Fruits & Vegetable store, Full Android Ecommerce App',
            text: 'Php,Laravel',
            price: '$59',
            salePrice: '',
            link: 'https://1.envato.market/ZQb1BX',
            popularity: '18'
        },
        {
            id: 21,
            img: quotes,
            sales: '162',
            rating: '(4.5)',
            title: 'Quotes - Flutter App',
            text: 'Flutter',
            price: '$19',
            salePrice: '',
            link: 'https://1.envato.market/QyPg1o',
            popularity: '24'
        },
        {
            id: 22,
            img: eschoolSas,
            sales: '21',
            rating: '(0)',
            title: 'eSchool SaaS - School Management System with Stu',
            text: 'Flutter',
            price: '$99',
            salePrice: '',
            link: 'https://1.envato.market/9gqdRe',
            popularity: '3'
        },
        {
            id: 23,
            // img: erestroSingleVendr,
            img: erestroSingleVendrSale,
            sales: '39',
            rating: '(5.0)',
            title: 'eRestro - Single Vendor Restaurant Flutter App | Food Ordering App with Admin Panel',
            text: 'Flutter',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/3eRoDA',
            popularity: '6'
        },
    ]

    // Function to handle sorting based on the selected option
    const sortProducts = (option) => {
        if (option === 'lowToHigh') {
            return cardData.slice().sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
        } else if (option === 'highToLow') {
            return cardData.slice().sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
        } else if (option === 'mostpopular') {
            return cardData.slice().sort((a, b) => parseInt(a.popularity, 10) - parseInt(b.popularity, 10));
        }
    };

    // Function to handle select change event
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };
    return (
        <>

            <Head>
                <title> Create Websites and mobile App with WRTeam's Digital Products</title>
                <meta name="description" content="Complete business solutions. Clean & safe code for your Ecom. business, grocery business, local business & make educational and game apps and web." />
            </Head>

            <Breadcrum title='App' blueText='Products' contentOne={'Home'} contentTwo={'Products'} contentThree={'App Products'} />
            <section className='container webPro'>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="webProHeadingDiv">
                            <span className='commonHeadlines'>We found <span>{cardData.length}</span> Products</span>
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
                                                <Image height={0} width={0} loading="lazy" className='webProImg card-img-top' alt='product_img' src={e.img} />
                                                <Card.Body>
                                                    <div className="ratingDiv">
                                                        <span className='sales'>{e.sales} Sales</span>
                                                        {e.rating === '(0)' ? '' :
                                                            <span className='rating'> <span>
                                                                <LiaStarSolid size={20} color='#FFA800' />
                                                                <LiaStarSolid size={20} color='#FFA800' />
                                                                <LiaStarSolid size={20} color='#FFA800' />
                                                                <LiaStarSolid size={20} color='#FFA800' />
                                                                <BsStarHalf size={18} color='#FFA800' />
                                                            </span>{e.rating}</span>
                                                        }

                                                    </div>
                                                    {
                                                        e.title.length >= 40 ? <Card.Title>{e.title.slice(0, 50)}...</Card.Title> : <Card.Title>{e.title}</Card.Title>
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
                                                    </span><span className='buyBtn'> <span><RiShoppingCartFill /></span>Buy</span>
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

export default Index
