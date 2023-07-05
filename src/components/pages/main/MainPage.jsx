import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Fonts from '../../../styles/fonts';
import mainBackground from '../../../assets/main-background.png';
import Paths from '../../../constant/path';
import engLogo from '../../../assets/eng-logo.png';
import mainNotice from '../../../assets/main-notice.png';
import mainBusiness from '../../../assets/main-business.png';
import MainContent from '../../shared/MainContent';

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
					<img src={engLogo} alt='englogo' />
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

		div {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;

			> img {
				width: 30rem;
				height: auto;
			}
		}
	}
`;

export default MainPage;
