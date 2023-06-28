import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainLogo from '../../assets/main-logo.png';
import Fonts from '../../styles/fonts';
import Paths from '../../constant/path';
import IntroPage from '../pages/intro/IntroPage';

function Header() {
	const [showDropdown, setShowDropdown] = useState(false);

	const handleDropdownEnter = () => {
		setShowDropdown(true);
	};

	const handleDropdownLeave = () => {
		setShowDropdown(false);
	};

	return (
		<HeaderContainer>
			<div>
				<div>
					<img src={mainLogo} alt='main-logo' />
				</div>
				<div
					className='dropdown'
					onMouseEnter={handleDropdownEnter}
					onMouseLeave={handleDropdownLeave}>
					<div>
						<Link to={Paths.intro}>교육팀 소개</Link>
					</div>
					<div>
						<Link to={Paths.member}>연구팀 구성</Link>
					</div>
					<div>
						<Link to={Paths.achievement}>사업성과</Link>
					</div>
					<div>
						<Link to={Paths.notice}>커뮤니티</Link>
					</div>
					<div
						className={`dropdown-content ${showDropdown ? 'show' : ''}`}
						onMouseEnter={handleDropdownEnter}
						onMouseLeave={handleDropdownLeave}>
						<div className='grid-container'>
							<div className='grid-column'>
								<Link to={Paths.intro} className='grid-item'>
									인사말
								</Link>
								<Link to={Paths.intro} className='grid-item'>
									목표 및 비전
								</Link>
								<Link to={Paths.intro} className='grid-item'>
									조직 현황
								</Link>
								<Link to={Paths.intro} className='grid-item'>
									찾아오시는 길
								</Link>
								<div className='grid-divider' />
							</div>
							<div className='grid-column'>
								<Link to={Paths.member} className='grid-item'>
									참여교수
								</Link>
								<Link to={Paths.member} className='grid-item'>
									신진 연구인력
								</Link>
								<Link to={Paths.member} className='grid-item'>
									참여 대학원생
								</Link>
								<div className='grid-divider' />
							</div>
							<div className='grid-column'>
								<Link to={Paths.achievement} className='grid-item'>
									연구 업적
								</Link>
								<Link to={Paths.international} className='grid-item'>
									국제 협력
								</Link>
								<Link to={Paths.industrial} className='grid-item'>
									산학 협력
								</Link>
								<div className='grid-divider' />
							</div>
							<div className='grid-column'>
								<Link to={Paths.notice} className='grid-item'>
									공지사항
								</Link>
								<Link to={Paths.resource} className='grid-item'>
									자료실
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</HeaderContainer>
	);
}
const HeaderContainer = styled.header`
	height: 9rem;
	display: flex;
	justify-content: center;

	> div {
		width: 120rem;
		display: flex;
		justify-content: space-between;

		> div:first-child {
			width: 27rem;
			height: 9rem;
			display: flex;

			> img {
				object-fit: contain;
			}
		}

		> div:last-child {
			display: flex;
			flex-wrap: nowrap;
			gap: 6rem;
			// width: 65rem;

			> div {
				// width: 100%;
				height: 100%;
				// margin: 1.6rem;
				cursor: pointer;

				> a {
					width: 100%;
					height: 100%;
					align-items: center;
					display: flex;
					justify-content: center;
					${Fonts.bold20}
				}
			}

			> div:last-child {
				// .dropdown-content 입니다
				display: none;
				position: absolute;
				background: rgba(0, 0, 0, 0.55);
				width: 100%;
				// width: 100%으로 주니 안 맞음
				box-shadow: 0px 0.8rem 1rem 0px rgba(0, 0, 0, 0.2);
				z-index: 1;
				top: 9rem;
				color: white;
				transform: translateX(-52%);
				height: 13rem;

				> div {
					// .grid-container
					display: grid;
					grid-template-columns: repeat(4, 0.5fr);
					padding: 1rem;
					width: 40%;
					transform: translateX(120%);


					> div {
						// .grid-column 
						display: flex;
						flex-direction: column;
						position: relative;
						align-items: center;
					
					> 	div {
						position: absolute; /* 절대 위치 설정 */
						right: 0;
						top: 50%;
						transform: translateY(-50%);
						width: 0.1rem; /* 가로 선의 너비 */
						height: 90%; /* 가로 선의 높이 */
						background-color: white; /* 가로 선의 색상 */
					}

					> a .grid-item {
						color: white;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 1.4rem;
						font-family: 'Inter';
						font-style: normal;
						font-weight: 500;
						line-height: 1.7rem;
						padding: 0.5rem 0.5rem;
					}
					
					}


					}
				}
			}
		}
	}
`;

const HeaderLayout = styled.div`
	.dropdown-content.show {
		display: block;
	}

	// .grid-container {
	// 	display: grid;
	// 	grid-template-columns: repeat(4, 0.5fr);
	// 	padding: 1rem;
	// 	width: 40%;
	// 	transform: translateX(120%);
	// }

	// .grid-column {
	// 	display: flex;
	// 	flex-direction: column;
	// 	position: relative;
	// }

	// .grid-item {
	// 	color: white;
	// 	display: flex;
	// 	align-items: center;
	// 	justify-content: center;
	// 	font-size: 1.4rem;
	// 	font-family: 'Inter';
	// 	font-style: normal;
	// 	font-weight: 500;
	// 	line-height: 1.7rem;
	// 	padding: 0.5rem 0.5rem;
	// }
`;

export default Header;
