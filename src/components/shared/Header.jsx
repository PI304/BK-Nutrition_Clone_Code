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
					<Link to={Paths.main}>
						<img src={mainLogo} alt='main-logo' />
					</Link>
				</div>
				<div onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
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
				</div>
			</div>
			{showDropdown && (
				<Dropdown onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
					<div>
						<div>
							<div>
								<Link to={Paths.intro}>인사말</Link>
								<Link to={Paths.intro}>목표 및 비전</Link>
								<Link to={Paths.intro}>조직 현황</Link>
								<Link to={Paths.intro}>찾아오시는 길</Link>
								<div />
							</div>
							<div>
								<Link to={Paths.member}>참여교수</Link>
								<Link to={Paths.member}>신진 연구인력</Link>
								<Link to={Paths.member}>참여 대학원생</Link>
								<div />
							</div>
							<div>
								<Link to={Paths.achievement}>연구 업적</Link>
								<Link to={Paths.international}>국제 협력</Link>
								<Link to={Paths.industrial}>산학 협력</Link>
								<div />
							</div>
							<div>
								<Link to={Paths.notice}>공지사항</Link>
								<Link to={Paths.resource}>자료실</Link>
							</div>
						</div>
					</div>
				</Dropdown>
			)}
		</HeaderContainer>
	);
}
const HeaderContainer = styled.header`
	height: 9rem;
	display: flex;
	justify-content: center;

	> div:first-child {
		width: 120rem;
		display: flex;
		justify-content: space-between;

		> div:first-child {
			width: 27rem;
			height: 9rem;
			display: flex;

			> a {
				> img {
					object-fit: contain;
					width: 27rem;
				}
			}
		}

		> div:nth-child(2) {
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
		}
	}
`;

const Dropdown = styled.div` 
		position: absolute;
		background: rgba(0, 0, 0, 0.55);
		width: 100%;
		box-shadow: 0px 0.8rem 1rem 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		top: 9rem;
		color: white;
		// transform: translateX(-0%);
		height: 13rem;
		display: flex;
		justify-content: center;

		> div {
			width: 120rem;
			height: 13rem;
			display: flex;
			justify-content: flex-end;

			> div {
				display: flex;
				width: 56rem;
				gap: 8rem;
				position: absolute;
				padding: 1.6rem 0rem;
				justify-content: center;

				> div {
					display: flex;
					flex-direction: column;
					position: relative;
					align-items: center;
					gap: 1rem;
					// width: 13rem;
					
					> 	div: last-child {
						position: absolute;
						right: 0rem;
						transform: translatex(4rem);
						width: 0.05rem; 
						height: 10rem;
						background-color: white; 
					}

					> a {
						color: white;
						display: flex;
						align-items: center;
						justify-content: center;
						line-height: 1.7rem;
						${Fonts.medium14};
					}					
					}
				}
			}
		}
`;

export default Header;
