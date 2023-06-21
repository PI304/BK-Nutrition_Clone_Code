import React, { useState } from 'react';
import styled from 'styled-components';
import mainLogo from '../../assets/main-logo.png';
import Fonts from '../../styles/fonts';
import Paths from '../../constant/path';

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
						<a href={Paths.intro}>교육팀 소개</a>
					</div>
					<div>
						<a href={Paths.intro}>연구팀 구성</a>
					</div>
					<div>
						<a href={Paths.intro}>사업성과</a>
					</div>
					<div>
						<a href={Paths.intro}>커뮤니티</a>
					</div>
					<div
						className={`dropdown-content ${showDropdown ? 'show' : ''}`}
						onMouseEnter={handleDropdownEnter}
						onMouseLeave={handleDropdownLeave}>
						<div className='grid-container'>
							<div className='grid-column'>
								<a href={Paths.intro} className='grid-item'>
									인사말
								</a>
								<a href='www.naver.com' className='grid-item'>
									목표 및 비전
								</a>
								<a href='www.naver.com' className='grid-item'>
									조직 현황
								</a>
								<a href='www.naver.com' className='grid-item'>
									찾아오시는 길
								</a>
								<div className='grid-divider' />
							</div>
							<div className='grid-column'>
								<a href='www.naver.com' className='grid-item'>
									참여교수
								</a>
								<a href='www.naver.com' className='grid-item'>
									신진 연구인력
								</a>
								<a href='www.naver.com' className='grid-item'>
									참여 대학원생
								</a>
								<div className='grid-divider' />
							</div>
							<div className='grid-column'>
								<a href='www.naver.com' className='grid-item'>
									연구 업적
								</a>
								<a href='www.naver.com' className='grid-item'>
									국제 협력
								</a>
								<a href='www.naver.com' className='grid-item'>
									산학 협력
								</a>
								<div className='grid-divider' />
							</div>
							<div className='grid-column'>
								<a href='www.naver.com' className='grid-item'>
									공지사항
								</a>
								<a href='www.naver.com' className='grid-item'>
									자료실
								</a>
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
			width: 65rem;

			> div {
				width: 100%;
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
				box-shadow: 0px 0.8rem 1rem 0px rgba(0, 0, 0, 0.2);
				z-index: 1;
				top: 7.4rem;
				color: white;
				transform: translateX(-50.6%);
			}
		}
	}
`;

const HeaderLayout = styled.div`
	// .dropdown-content {
	// 	display: none;
	// 	position: absolute;
	// 	background: rgba(0, 0, 0, 0.55);
	// 	width: 100%;
	// 	box-shadow: 0px 0.8rem 1rem 0px rgba(0, 0, 0, 0.2);
	// 	z-index: 1;
	// 	top: 7.4rem;
	// 	color: white;
	// 	transform: translateX(-50.6%);
	// }

	.dropdown-content.show {
		display: block;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, 0.5fr);
		padding: 1rem;
		width: 40%;
		transform: translateX(120%);
	}

	.grid-column {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.grid-divider {
		position: absolute; /* 절대 위치 설정 */
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 0.1rem; /* 가로 선의 너비 */
		height: 90%; /* 가로 선의 높이 */
		background-color: white; /* 가로 선의 색상 */
	}

	.grid-item {
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
`;

export default Header;
