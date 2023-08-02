import React from 'react';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import backgroundHome from '../../assets/background-home.png';
import background from '../../assets/background.png';

const Background = () => (
	<MemberBackground>
		<div>
			<div>
				<div>
					<p>연구팀 구성</p>
				</div>
				<div>
					<div>
						<img src={backgroundHome} alt='background-home' />
					</div>
					<div>Title</div>
					<div>Subtitle</div>
				</div>
			</div>
		</div>
	</MemberBackground>
);

const MemberBackground = styled.div`
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
					width: 5rem;
					border-right: 0.1rem solid rgba(255, 255, 255, 0.20);
					border-left: 0.1rem solid rgba(255, 255, 255, 0.20);
					padding: 1rem

				}
	
				> div: last-child {
					
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
