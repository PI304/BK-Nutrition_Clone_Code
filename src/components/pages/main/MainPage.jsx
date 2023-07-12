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


function MainPage() {
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
					<div>
						<img src={prevBtn} alt='prev-button' />
					</div>

					<Link to={Paths.intro}>
						<img src={engLogo} alt='eng-logo' />
					</Link>
					<Link to={Paths.intro}>
						<img src={footerLogo1} alt='footer-1' />
					</Link>
					<Link to={Paths.intro}>
						<img src={footerLogo2} alt='footer-2' />
					</Link>

					<div>
						<img src={nextBtn} alt='next-button' />
					</div>
				</div>

				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='10'
						height='11'
						viewBox='0 0 10 11'
						fill='none'>
						<path
							d='M9.5 5.12898C9.5 7.61304 7.48546 9.6271 5 9.6271C2.51454 9.6271 0.5 7.61304 0.5 5.12898C0.5 2.64491 2.51454 0.630859 5 0.630859C7.48546 0.630859 9.5 2.64491 9.5 5.12898Z'
							stroke='#333333'
						/>
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='10'
						height='11'
						viewBox='0 0 10 11'
						fill='none'>
						<path
							d='M9.5 5.12898C9.5 7.61304 7.48546 9.6271 5 9.6271C2.51454 9.6271 0.5 7.61304 0.5 5.12898C0.5 2.64491 2.51454 0.630859 5 0.630859C7.48546 0.630859 9.5 2.64491 9.5 5.12898Z'
							stroke='#333333'
						/>
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='10'
						height='11'
						viewBox='0 0 10 11'
						fill='black'>
						<path
							d='M9.5 5.12898C9.5 7.61304 7.48546 9.6271 5 9.6271C2.51454 9.6271 0.5 7.61304 0.5 5.12898C0.5 2.64491 2.51454 0.630859 5 0.630859C7.48546 0.630859 9.5 2.64491 9.5 5.12898Z'
							stroke='#333333'
						/>
					</svg>
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
					z-index: 1;
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
`;

const Carousel = styled.div`
    display: flex;
    flex-direction: column;

		> div: first-child {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			align-content: center;
			gap: 7rem;
			padding: 2rem;
			align-items: center;

			> img {
				width: 30rem;
				height: auto;
			}

			> div {
				img {
					height: 2.2rem;
					width: 1rem;
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

export default MainPage;
