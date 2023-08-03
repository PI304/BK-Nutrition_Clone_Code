import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paths from '../../constant/path';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import backgroundHome from '../../assets/background-home.png';
import background from '../../assets/background.png';

const Background = ({ pageId }) => {
	const pagetitles = [
		{
			id: '1',
			maintitle: '교육팀 소개',
			title: '교육팀 소개',
		},
		{
			id: '2',
			maintitle: '연구팀 구성',
			title: '연구팀 구성',
		},
		{
			id: '3',
			maintitle: '연구 업적',
			title: '사업 성과',
			subtitle: '연구 업적',
		},
		{
			id: '4',
			maintitle: '국제 협력',
			title: '사업 성과',
			subtitle: '국제 협력',
		},
		{
			id: '5',
			maintitle: '산학 협력',
			title: '사업 성과',
			subtitle: '산학 협력',
		},
		{
			id: '6',
			maintitle: '공지사항',
			title: '커뮤니티',
			subtitle: '공지사항',
		},

		{
			id: '7',
			maintitle: '자료실',
			title: '커뮤니티',
			subtitle: '자료실',
		},
	];
	const titleinfo = pagetitles.find((page) => page.id === pageId);

	return (
		<BackgroundContainer>
			<div>
				<div>
					<div>
						<p>{titleinfo.maintitle}</p>
					</div>
					<div>
						<div>
							<Link to={Paths.main}>
								<img src={backgroundHome} alt='background-home' />
							</Link>
						</div>
						<div>{titleinfo.title}</div>
						<div>{titleinfo.subtitle}</div>
					</div>
				</div>
			</div>
		</BackgroundContainer>
	);
};

const BackgroundContainer = styled.div`
	background-image: url(${background});
	width: 100%;
	height: 20rem;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-position: 50% 50%
	overflow: hidden;
	position: relative;
	display: flex;
	justify-content: center;

	> div {
		width: 120rem;
		gap: 3rem;
		display: flex;
		flex-direction: column;
		-webkit-box-pack: center;
		justify-content: end;

		> div {
			gap: 4rem;
			display: flex;
			flex-direction: column;
			justify-content: normal;
			

			> div:first-child {
				display: flex;
				justify-content: center;
				color: ${Colors.white};
				
				> p {
					${Fonts.bold40};
				}
			}
	
			> div:last-child {
				background: rgba(57, 57, 57, 0.60);
				display: flex;
				height: 4rem;
				color: ${Colors.white};
				align-items: center;
				text-align: center;
	
				> div: first-child {
					background-color: ${Colors.blue600};
					
				}
	
				> div: nth-child(2) {
					// width: 5rem;
					border-right: 0.1rem solid rgba(255, 255, 255, 0.20);
					border-left: 0.1rem solid rgba(255, 255, 255, 0.20);
					padding: 1rem

				}
	
				> div: nth-child(3) {
					
					width: 12rem;
					border-right: 0.1rem solid rgba(255, 255, 255, 0.20);
					border-left: 0.1rem solid rgba(255, 255, 255, 0.20);
					padding: 1rem
				}
			}
		}
	}
`;

export default Background;
