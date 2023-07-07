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
		// align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;


		> div:first-child {
				align-items: center;
				display: flex;
				justify-content: center;
				
				> img {
					max-width: 100%;
				}
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
				text-align: center;
			}
			
			> p:last-child {
				line-height: 130%;
				color: #6b748b;
				display: flex;
				${Fonts.regular10}
				justify-content: center;
				line-height: 130%;
				text-align: center;
			}
			}
		}
	}

`;

export default Footer;
