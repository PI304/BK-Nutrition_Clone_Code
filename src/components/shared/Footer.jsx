import styled from 'styled-components';
import footerLogo from '../../assets/footer-3.png';
import Fonts from '../../styles/fonts';

function Footer() {
	return (
		<FooterContainer>
			<div>
				<div>
					<img src={footerLogo} alt='footer-3' />
				</div>
				<div>
					<p>서울시 서대문구 연세로 50 연세대학교 식품영양학과 웰니스 융합인재 양성팀</p>
					<p>
						COPYRIGHTS (C) 2013 YONSEI UNIV FOUR PROJECT FOR WELLNESS INTEGRTED TALENTS.
						<br />
						ALL RIGHTS RESERVED.
					</p>
				</div>
			</div>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	height: 20rem;
	display: flex;
	align-items: center;
	background-color: #052040;
	justify-content: center;

	> div {
		width: 120rem;
		height: 100%;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;


		> div:first-child {
				align-items: center;
				display: flex;
				justify-content: center;
				
		}


		> div:last-child {

			// width: 47.1rem;
			height: 5rem;
			white-space: pre-wrap;

			> p:first-child {
				width: 100%;
				color: white;
				display: flex;
				${Fonts.regular14}
				justify-content: center;
				line-height: 150%;
			}
			
			> p: last-child {
				
				line-height: 130%;
				color: #6b748b;
				display: flex;
				font-size: 0.8rem;
				${Fonts.regular10}
				justify-content: center;
				line-height: 130%;
				text-align: center;
			}
			}
		}
	}

	// > div {
	// 	font-family: 'Inter';
	// 	font-weight: 400;
	// 	line-height: 2.1rem;
	// }

	// > div #copyright1 {
	// 	color: white;
	// 	display: flex;
	// 	font-size: 1.4rem;
	// 	justify-content: center;
	// }
	// // nth-child로 했을 때 스타일 적용 안 됨

	// > div .copyright2 {
	// 	color: #6b748b;
	// 	display: flex;
	// 	font-size: 0.8rem;
	// 	justify-content: center;
	// }
`;

export default Footer;
