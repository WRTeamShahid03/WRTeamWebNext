import Breadcrum from '@/Components/Breadcrum'
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { LiaStarSolid } from 'react-icons/lia';
import { BsStarHalf } from 'react-icons/bs';
import { RiShoppingCartFill } from 'react-icons/ri';
import Link from 'next/link';
import ebroker from '../../../src/Asset/Images/app-products/01_eBroker app.jpg'
import edemand from '../../../src/Asset/Images/app-products/02_eDemand app.jpg'
import egrocer from '../../../src/Asset/Images/app-products/03_eGrocer app.jpg'
import eschool from '../../../src/Asset/Images/app-products/04_eSchool app.jpg'
import erestro from '../../../src/Asset/Images/app-products/05-eRestro App.jpg'
import espeech from '../../../src/Asset/Images/app-products/06_eSpeech App.jpg'
import primeWeb from '../../../src/Asset/Images/app-products/07-Prime Web.jpg'
import eshop from '../../../src/Asset/Images/app-products/08_eShop multi app.jpg'
import smartKit from '../../../src/Asset/Images/app-products/09_SmartKit Pro App.jpg'
import ticTac from '../../../src/Asset/Images/app-products/10_Tic Tac Toe app.jpg'
import elite from '../../../src/Asset/Images/app-products/11_Elite Quiz App.jpg'
import qearner from '../../../src/Asset/Images/app-products/12_Qearner app.jpg'
import ebook from '../../../src/Asset/Images/app-products/13_eBook app.jpg'
import news from '../../../src/Asset/Images/app-products/14_News App.jpg'
import ecart from '../../../src/Asset/Images/app-products/15_eCart App Multi.jpg'
import eshopSingle from '../../../src/Asset/Images/app-products/16_eShop_Single-admin_Store.jpg'
import ecartSingle from '../../../src/Asset/Images/app-products/17_eCart admin(single).jpg'
import eshopSingleApp from '../../../src/Asset/Images/app-products/18_eShop App single.jpg'
import radioApp from '../../../src/Asset/Images/app-products/19_Radio Online app.jpg'
import quiz from '../../../src/Asset/Images/app-products/20_Quiz Online (iOS).jpg'
import quizAndroid from '../../../src/Asset/Images/app-products/21_Quiz Online (Android).jpg'
import ecartApp from '../../../src/Asset/Images/app-products/22_eCart App Single.jpg'
import quotes from '../../../src/Asset/Images/app-products/23_Quotes app.jpg'
import Head from 'next/head';
import Image from 'next/image';


const Index = () => {

    const [sortOption, setSortOption] = useState('lowToHigh');

    const cardData = [
        {
            id: 0,
            img: ebroker,
            sales: '202',
            rating: '(4.9)',
            title: 'eBroker - Real Estate Property Buy-Rent-Sell Flutter app with Laravel Admin Panel',
            text: 'Flutter,Laravel,Codeigniter',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/oqe11O'

        },
        {
            id: 1,
            img: edemand,
            sales: '168',
            rating: '(4.8)',
            title: 'eDemand-Multi Vendor On Demand Handy Services, Handyman with Flutter App | Admin panel',
            text: 'Codeigniter,Flutter',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/KjKLxn'

        },
        {
            id: 2,
            img: egrocer,
            sales: '187',
            rating: '(4.9)',
            title: 'eGrocer - Online Multi Vendor Grocery Store, eCommerce Marketplace Flutter Full App with Admin Panel',
            text: 'Flutter,Codeigniter',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/DK0gQn'

        },
        {
            id: 3,
            img: eschool,
            sales: '257',
            rating: '(4.9)',
            title: 'eSchool - School Management System with Student | Parents | Teacher Flutter App | Laravel Admin',
            text: 'Flutter,Laravel',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/babzGx'

        },
        {
            id: 4,
            img: erestro,
            sales: '145',
            rating: '(4.6)',
            title: 'eRestro - Multi Restaurant Flutter App | Food Ordering App with Admin Panel & Restaurant Panel',
            text: 'Flutter,Codeigniter',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/QyPrNA'

        },
        {
            id: 5,
            img: espeech,
            sales: '79',
            rating: '(0)',
            title: 'eSpeech - AI Text to Speech Flutter Full App',
            text: 'Flutter,Codeigniter',
            price: '$29',
            salePrice: '$14',
            link: 'https://1.envato.market/R5PjOg'

        },
        {
            id: 6,
            img: primeWeb,
            sales: '1021',
            rating: '(4.6)',
            title: 'Prime Web - Convert Website to a Flutter App | Web View App | Web to App',
            text: 'Flutter',
            price: '$19',
            salePrice: '$9',
            link: 'https://1.envato.market/y2g3m2'

        },
        {
            id: 7,
            img: eshop,
            sales: '921',
            rating: '(4.9)',
            title: 'eShop-Multi Vendor eCommerce App & eCommerce Vendor Marketplace Flutter App',
            text: 'Flutter,CodeIgniter',
            price: '$69',
            salePrice: '$34',
            link: 'https://1.envato.market/R5PjZN'

        },
        {
            id: 8,
            img: smartKit,
            sales: '397',
            rating: '(4.2)',
            title: 'SmartKit Pro - Flutter Biggest UI Kit | Flutter 3.0 UI kit | Ready to Use',
            text: 'Flutter',
            price: '$29',
            salePrice: '$14',
            link: 'https://1.envato.market/KjKLZx'

        },
        {
            id: 9,
            img: ticTac,
            sales: '194',
            rating: '(4.2)',
            title: 'Tic Tac Toe - The Classic Flutter Tic Tac Toe Game',
            text: 'Flutter',
            price: '$19',
            salePrice: '$9',
            link: 'https://1.envato.market/vNzrJA'

        },
        {
            id: 10,
            img: elite,
            sales: '1173',
            rating: '(4.7)',
            title: 'Elite Quiz - Trivia Quiz | Quiz Game - Flutter Full App + Admin Panel',
            text: 'Flutter,CodeIgniter',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/6eWKYN'

        },
        {
            id: 11,
            img: qearner,
            sales: '331',
            rating: '(4.8)',
            title: 'Qearner - Quiz App | Android Quiz game with Earning System + Admin panel',
            text: 'Php',
            price: '$39',
            salePrice: '$19',
            link: 'https://1.envato.market/6eWKNG'

        },
        {
            id: 12,
            img: ebook,
            sales: '105',
            rating: '(5.0)',
            title: 'Flutter Offline eBook App',
            text: 'Flutter',
            price: '$19',
            salePrice: '$9',
            link: 'https://1.envato.market/1re3vg'

        },
        {
            id: 13,
            img: news,
            sales: '590',
            rating: '(4.9)',
            title: 'News App and Web -Flutter News App for Android and IOS App | News Website with Admin panel',
            text: 'Flutter',
            price: '$39',
            salePrice: '$19',
            link: 'https://1.envato.market/rQ4323'

        },
        {
            id: 14,
            img: ecart,
            sales: '597',
            rating: '(4.7)',
            title: 'eCart - Multi Vendor eCommerce System',
            text: 'Php',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/zNg326'
        },
        {
            id: 15,
            img: eshopSingle,
            sales: '141',
            rating: '(5.0)',
            title: 'eShop - Ecommerce Admin / Store Manager app',
            text: 'Flutter',
            price: '$19',
            salePrice: '$9',
            link: 'https://1.envato.market/21kqdQ'
        },
        {
            id: 16,
            img: eshopSingleApp,
            sales: '693',
            rating: '(4.9)',
            title: 'eShop- eCommerce Single Vendor App | Shopping eCommerce App with Flutter',
            text: 'Flutter,CodeIgniter',
            price: '$49',
            salePrice: '$24',
            link: 'https://1.envato.market/VmaeNE'
        },
        {
            id: 17,
            img: radioApp,
            sales: '192',
            rating: '(4.3)',
            title: 'Radio Online - Flutter Full App',
            text: 'Flutter,CodeIgniter',
            price: '$19',
            salePrice: '$9',
            link: 'https://1.envato.market/eKvGzO'
        },
        {
            id: 18,
            img: quiz,
            sales: '330',
            rating: '(4.4)',
            title: 'Quiz Online - Full IOS Quiz App + Admin panel',
            text: 'Php',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/75e7Pg'
        },
        {
            id: 19,
            img: quizAndroid,
            sales: '2746',
            rating: '(4.8)',
            title: 'Quiz Online | Trivia Quiz | Android Quiz Game + Admin Panel',
            text: 'Php',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/NkBVLV'
        },
        {
            id: 20,
            img: ecartApp,
            sales: '1117',
            rating: '(4.8)',
            title: 'eCart - Grocery, Food Delivery, Fruits & Vegetable store, Full Android Ecommerce App',
            text: 'Php,Laravel',
            price: '$59',
            salePrice: '$29',
            link: 'https://1.envato.market/ZQb1BX'
        },
        {
            id: 21,
            img: quotes,
            sales: '159',
            rating: '(4.5)',
            title: 'Quotes - Flutter App',
            text: 'Flutter',
            price: '$19',
            salePrice: '$9',
            link: 'https://1.envato.market/QyPg1o'
        },
    ]

   // Function to handle sorting based on the selected option
  const sortProducts = (option) => {
    if (option === 'lowToHigh') {
      return cardData.slice().sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else if (option === 'highToLow') {
      return cardData.slice().sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    } else if (option === 'mostpopular') {
      return cardData.slice().sort((a, b) => parseInt(b.sales, 10) - parseInt(a.sales, 10));
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
                            <span className='commonHeadlines' data-aos="fade-right" data-aos-duration="800">We found <span>{cardData.length}</span> Products</span>
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
                                        <Card>
                                            <Image height={0} width={0} loading="lazy"  className='webProImg card-img-top' alt='product_img' src={e.img} />
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
                                                        <span>{e.price}</span>
                                                        <span>{e.salePrice}</span>
                                                    </div>
                                                </span>
                                                <Link href={e.link} target='_blank'> <span className='buyBtn'> <span><RiShoppingCartFill /></span>Buy</span></Link>
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
