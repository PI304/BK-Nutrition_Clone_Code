import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paths from '../../constant/path';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import memberEmail from '../../assets/member-email.png';
import memberPhone from '../../assets/member-phone.png';
import memberHome from '../../assets/member-home.png';

const ProfessorInfo = ({ name, title, phone, email, Home, description, image }) => (
	<ProfessorCard>
		<div>
			<div>
				<img src={image} alt='professor-img' />
			</div>
			<div>
				<div>{title}</div>
				<div>{name}</div>
				<div>
					<img src={memberPhone} alt='member-phone' />
					<div>{phone}</div>
				</div>
				<div>
					<img src={memberEmail} alt='member-email' />
					<div>{email}</div>
				</div>
			</div>
			<div>
				<Link to={Paths.member}>
					<img src={memberHome} alt='member-home' />
				</Link>
			</div>
			<div>{description}</div>
		</div>
	</ProfessorCard>
);

const ProfessorCard = styled.div`

				> div {
					width: 58rem;
					// height: 30rem;
					display: flex;
					flex-direction: row;
					-webkit-box-pack: center;
					-webkit-box-align: center;
					${Fonts.bold12}
					box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
					align-items: stretch;
					// align-content: center;
					flex-wrap: wrap;
					justify-content: space-around;

					> div:first-child {
						width: 20rem;
						height: 23rem;

						> img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					> div:nth-child(2) {
						width: 32.5rem;
						height: 23rem;
						gap: 1rem;
						// background-color: pink;
						display: flex;
						justify-content: center;
						flex-direction: column;
						padding: 4rem 2rem;

						> div:first-child {
							${Fonts.bold18}
						}

						> div:nth-child(2) {
							${Fonts.bold32}
						}

						> div:nth-child(3) {
							display: flex;
							gap: 1.5rem;
							align-items: center;


							> div {
								${Fonts.medium16}	
							}

							> img {
								width: 3rem;
								height: 2.37rem;
							}
						}

						> div:nth-child(4) {
							display: flex;
							gap: 1.5rem;
							align-items: center;
							
							> div {
								${Fonts.medium16}
							}

							> img {
								width: 3rem;
								height: 2.37rem;
							}
						}
					}

					> div:nth-child(4) {
						background-color: ${Colors.gray};
						height: 7rem;
						width: 100%;
						align-items: center;
						padding: 1rem 2rem;
						line-height: normal;
					}
				}

				> div:nth-child(2) {
					background-color: ${Colors.gray};
					line-height: normal;
				}
			}
		}
	}
`;

export default ProfessorInfo;
