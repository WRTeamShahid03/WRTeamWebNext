import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import ReactPaginate from 'react-paginate';
import teamDefaultImg from '../Asset/Images/teamDefaultImg.png';
import Image from 'next/image';

const Team = () => {
    const [currentPage, setCurrentPage] = useState(0); // Start from the first page

    const teamData = [
        {
            id: 0,
            name: "Harish Vekariya",
            work: "Co-founder",
            img: teamDefaultImg
        },
        {
            id: 1,
            name: "Jaydeep Goswami",
            work: "Co-founder",
            img: teamDefaultImg
        },
        {
            id: 2,
            name: "Ketan Thakkar",
            work: "Co-founder",
            img: teamDefaultImg
        },
        {
            id: 3,
            name: "Hemal Gondalia",
            work: "Co-founder",
            img: teamDefaultImg
        },
        {
            id: 4,
            name: "Bhavna Mepani",
            work: "QA",
            img: teamDefaultImg
        },
        {
            id: 5,
            name: "Bharavi Vaghjiyani",
            work: "Service Lead",
            img: teamDefaultImg
        },
        {
            id: 6,
            name: "Asgar Luhar",
            work: "Design Lead",
            img: teamDefaultImg
        },
        {
            id: 7,
            name: "Kishan Mevada",
            work: "Product Lead",
            img: teamDefaultImg
        },
        {
            id: 8,
            name: "Veena Hirani",
            work: "PHP Gem / Team Lead",
            img: teamDefaultImg
        },
        {
            id: 9,
            name: "Rupesh Gondariya",
            work: "PHP Expert / Team Lead",
            img: teamDefaultImg
        },
        {
            id: 10,
            name: "Priyansh Parmar",
            work: "Flutter Gem / Team Lead",
            img: teamDefaultImg
        },
        {
            id: 11,
            name: "Jignesh Majethiya",
            work: "Flutter Gem / Team Lead",
            img: teamDefaultImg
        },
        {
            id: 12,
            name: "Vimal Gondariya",
            work: "Flutter Gem / Team Lead",
            img: teamDefaultImg
        },
        {
            id: 13,
            name: "Sagar Gor",
            work: "PHP Champ / Team Lead",
            img: teamDefaultImg
        },
        {
            id: 14,
            name: "Priyanka Pindoriya",
            work: "PHP Gem",
            img: teamDefaultImg
        },
        {
            id: 15,
            name: "Devanshi Gor",
            work: "Flutter Champ",
            img: teamDefaultImg
        },
        {
            id: 16,
            name: "Hency Pithadiya",
            work: "Flutter Champ",
            img: teamDefaultImg
        },
        {
            id: 17,
            name: "Nikita Bhanderi",
            work: "Flutter Champ",
            img: teamDefaultImg
        },
        {
            id: 18,
            name: "Vijya Hirani",
            work: "PHP Expert",
            img: teamDefaultImg
        },
        {
            id: 19,
            name: "Sumit Mayani",
            work: "Front End Expert",
            img: teamDefaultImg
        },
        {
            id: 20,
            name: "Jayna Bhudiya",
            work: "PHP Gem",
            img: teamDefaultImg
        },
        {
            id: 21,
            name: "Laxmi Hirani",
            work: "UI/UX Designer",
            img: teamDefaultImg
        },
        {
            id: 22,
            name: "Payal Patel",
            work: "Flutter champ",
            img: teamDefaultImg
        },
        {
            id: 23,
            name: "Divy Jani",
            work: "UI/UX Designer",
            img: teamDefaultImg
        },
        {
            id: 24,
            name: "Zeel Jangam",
            work: "UI/UX Designer",
            img: teamDefaultImg
        },
        {
            id: 25,
            name: "Harshil Pindoriya",
            work: "Flutter champ",
            img: teamDefaultImg
        },
        {
            id: 26,
            name: "Dixita Khetani",
            work: "PHP Gem",
            img: teamDefaultImg
        },
        {
            id: 27,
            name: "Harshad Pindoriya",
            work: "PHP Gem",
            img: teamDefaultImg
        },
        {
            id: 28,
            name: "Ruchita Davda",
            work: "PHP Gem",
            img: teamDefaultImg
        },
        {
            id: 29,
            name: "Dimple Solanki",
            work: "PHP Gem",
            img: teamDefaultImg
        },
        {
            id: 30,
            name: "Shakir Memon",
            work: "PHP Gem",
            img: teamDefaultImg
        },
        {
            id: 31,
            name: "Anish Sumra",
            work: "Flutter champ",
            img: teamDefaultImg
        },
        {
            id: 32,
            name: "Mahesh Kerai",
            work: "PHP Gem",
            img: teamDefaultImg
        },
    ]

    const itemsPerPage = 8;
    const totalPages = Math.ceil(teamData.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const visibleTeamData = teamData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = selectedPage => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <section id="team">
            <div className="teamWrapper container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="teamUpperDiv">
                            <h4 className="common_span">
                                Expert<span> Team</span>
                            </h4>
                            <span
                                className="comman_Headlines"
                                data-aos="fade-right"
                                data-aos-duration="800"
                            >
                                Catalyzing Global Reach The
                                <span> Expert Team Powering IT Solutions Worldwide</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="teamSlider">
                            <div className="row">
                                {visibleTeamData.map(ele => (
                                    <div className="col-sm-12 col-md-6 col-lg-3" key={ele.id}>
                                        <div className="card text-white">
                                            <Image height={0} width={0} loading="lazy"
                                                src={ele.img || teamDefaultImg}
                                                className="card-img-top"
                                                alt="teamImg"
                                            />
                                            <div className="card-img-overlay">
                                                <div className="teamDeatails">
                                                    <p className="card-title teamName">{ele.name}</p>
                                                    <span className="card-text teamWork">{ele.work}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="navigation-buttons">
                                    <ReactPaginate
                                        pageCount={totalPages}
                                        pageRangeDisplayed={3}
                                        marginPagesDisplayed={1}
                                        forcePage={currentPage}
                                        onPageChange={handlePageChange}
                                        containerClassName="pagination"
                                        activeClassName="active"
                                        pageClassName="page-item"
                                        previousLabel={<FaAngleLeft color="white" size={22} />}
                                        nextLabel={<FaAngleRight color="white" size={22} />}
                                        previousClassName="page-item"
                                        nextClassName="page-item"
                                        previousLinkClassName="page-link"
                                        nextLinkClassName="page-link"
                                        pageLinkClassName="page-link"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Team;
