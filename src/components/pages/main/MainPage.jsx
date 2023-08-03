import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Fonts from '../../../styles/fonts';
import mainBackground from '../../../assets/main-background.png';
import Paths from '../../../constant/path';
import engLogo from '../../../assets/eng-logo.png';
import footerLogo1 from '../../../assets/footer-1.png';
import footerLogo2 from '../../../assets/footer-2.png';
import rndLogo from '../../../assets/rnd-logo.png';
import prevBtn from '../../../assets/prev-button.png';
import nextBtn from '../../../assets/next-button.png';
import mainNotice from '../../../assets/main-notice.png';
import mainBusiness from '../../../assets/main-business.png';
import MainContent from '../../shared/MainContent';
import Footer from '../../shared/Footer';
import CarouselBtn from '../../../styles/svg';

function MainPage() {
	const carouselRef = useRef(null);
	const [currentSlide, setCurrentSlide] = useState(0);

	const carouselImages = [
		{ id: 1, image: engLogo, alt: 'eng-logo' },
		{ id: 2, image: footerLogo1, alt: 'footer-1' },
		{ id: 3, image: footerLogo2, alt: 'footer-2' },
		{ id: 4, image: rndLogo, alt: 'rnd-logo' },
	];

	const TOTAL_SLIDES = carouselImages.length;

	const goToNextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % TOTAL_SLIDES);
	};

	const goToPrevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
	};

	// const preparedCarouselImages = [
	// 	...carouselImages.map((item) => ({ ...item, id: `prepared_${item.id}` })),
	// 	...carouselImages.map((item) => ({ ...item, id: `prepared_${item.id}_1` })),
	// 	...carouselImages.map((item) => ({ ...item, id: `prepared_${item.id}_2` })),
	// ];

	const path = [
		{
			id: '1',
			name: '연세대학교 식품영양학과',
			link: 'https://www.yonsei.ac.kr/sc/index.jsp',
		},
		{
			id: '2',
			name: '연세대학교',
			link: 'https://che.yonsei.ac.kr/che/departments/food_intro.do',
		},
		{
			id: '3',
			name: '연세대학교 연구처',
			link: 'https://research.yonsei.ac.kr/research/index.do',
		},
		{
			id: '4',
			name: 'BrainKorea21 FOUR',
			link: 'https://bk21four.nrf.re.kr/',
		},
	];

	const preparedCarouselImages = carouselImages.map((item) => ({
		...item,
		id: `prepared_${item.id}`,
		link: path.find((p) => p.id === item.id)?.link,
	}));

	const repeatedCarouselImages = preparedCarouselImages.concat(preparedCarouselImages);

	const currentImage = repeatedCarouselImages[currentSlide];

	return (
		<Main>
			<MainBackground>
				<div>
					<div>
						<p>
							BK21 FOUR Project for
							<br />
							Wellness Integrated Talents
						</p>
						<p>연세대학교 BK21 FOUR 웰니스 융합 인재 양성팀</p>
						<div>
							<div>
								<button type='button'>
									<Link to={Paths.intro}>교육팀 소개</Link>
								</button>
							</div>
							<div>
								<button type='button'>
									<Link to={Paths.resource}>사업 신청서</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</MainBackground>

			<MainBoard>
				<MainContent title='NOTICE' />
				<MainContent title='BUSINESS' />
			</MainBoard>

			<Carousel>
				<div>
					<button type='button' className='prev-button' onClick={goToPrevSlide}>
						<img src={prevBtn} alt='prev-button' />
					</button>
					<div>
						<div>
							<div style={{ transform: `translate(-${currentSlide * 37}rem, 0)` }}>
								{preparedCarouselImages.map((item, index) => (
									<ImageWrapper key={item.id}>
										<Link to={path[index].link}>
											<img
												src={item.image}
												alt={item.alt}
												className={index === currentSlide ? 'center' : ''}
											/>
										</Link>
									</ImageWrapper>
								))}
							</div>
						</div>
					</div>

					<button type='button' className='next-button' onClick={goToNextSlide}>
						<img src={nextBtn} alt='next-button' />
					</button>
				</div>

				<div>
					{carouselImages.map((item, index) => (
						<CarouselBtn key={item.alt} active={index === currentSlide} />
					))}
				</div>
			</Carousel>
		</Main>
	);
}

const Main = styled.main`
	background-color: white;
	height: 116.5rem;
	display: flex;
	flex-direction: column;
	gap: 5rem;
`;

const MainBackground = styled.div`
		width: 100%;
		height: 46rem;
		overflow: hidden;
		position: relative;
		background-image: url(${mainBackground});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-position-x: center;
		background-position-y: top;
		display: flex;
		align-items: center;


		> div {
			display: flex;
			justify-content: flex-end;
			width: 120rem;
			margin: 0 auto;

			> div:first-child {
				display: flex;
				position: relative;
				flex-direction: column;
				justify-content: center;
				align-items: flex-end;

				> p:first-child {
					color: white;
					display: flex;
					// width: 100%;
					line-height: 5.809rem;
					z-index: 0;
					text-align: end;
					${Fonts.bold48}
				}

				>p: nth-child(2) {
					line-height: 2.178rem;
					// width: 100%;
					color: white;
					display: flex;
					z-index: 1;
					${Fonts.medium18}
					text-align: center;
					padding: 2rem 0 2rem 0;
				}

				> div:last-child {
					display: flex;
					gap: 2rem;
					justify-content: flex-end;

					>div: first-child {
						width: 12rem;
						height: 3rem;

						> button {
							width: 100%;
							height: 100%;
							background-color: #003777;
							border-radius: 1rem;
							text-align: center;
							color: white;
							${Fonts.medium14}
						}
					}

					>div: nth-child(2) {
						width: 12rem;
						height: 3rem;

						> button {
							width: 100%;
							height: 100%;
							background-color: #003777;
							border-radius: 1rem;
							text-align: center;
							color: white;
							${Fonts.medium14}
						}
					}
				}
			}
		}
	}
`;

const MainBoard = styled.div`
	display: flex;
	justify-content: center;
	gap: 4rem;
	flex-wrap: wrap;
`;

const Carousel = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 6.8rem;
	overflow: hidden;
	align-items: center;

	> div {
		width: 120rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		> div: nth-child(2) {
			width: 104rem;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;
			padding: 2rem 0rem;
			overflow: hidden; 
	
			> div: first-child {
				display: flex;
				width: 104rem;
				justify-content: flex-start;
				// overflow: hidden;
	
				> div {
				display: flex;
				transition: transform 0.3s ease;
				gap: 7rem;
				// overflow: hidden;
				justify-content: flex-start;
				}
			}
	
			> button {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				// width: 3rem;
				height: 3rem;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				background-color: transparent;
				transition: background-color 0.2s ease;
				cursor: pointer;
				border: none;
				z-index: 1;
			}
	
	
			.prev-button {
				left: 0rem;
			}
	
			.next-button {
				right: 0rem;
			}
		}
}

		> div: last-child {
			padding: 2rem;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			align-content: center;
			gap: 1rem;
		}
	}

`;

const ImageWrapper = styled.div`
	transition: transform 0.3s ease;
	display: flex;
	align-items: center;

	img {
		width: 30rem;
		height: auto;
		object-fit: cover;
	}
`;

export default MainPage;
