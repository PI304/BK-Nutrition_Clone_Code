import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import Paths from '../../constant/path';
import mainNotice from '../../assets/main-notice.png';
import mainBusiness from '../../assets/main-business.png';
import mainMoreInfo from '../../assets/main-moreinfo.png';

function MainContent({ title }) {
	return (
		<MainContainter>
			<Notice>
				<Link to={title === 'NOTICE' ? Paths.notice : Paths.achievement}>
					{title}
					<img src={mainMoreInfo} alt='main-moreinfo' />
				</Link>
				<div>
					<Link to={title === 'NOTICE' ? Paths.notice : Paths.achievement}>
						<img src={title === 'NOTICE' ? mainNotice : mainBusiness} alt='main-notice' />
					</Link>
					<div>
						<p>공지사항입니다.</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						</p>
						<p>2023.07.11</p>
					</div>
				</div>
				<div>
					<ul>
						<li>
							BK21 FOUR 웰니스 공지사항입니다.
							<div>23.07.10</div>
						</li>
						<li>
							BK21 FOUR 웰니스 공지사항입니다.
							<div>23.07.10</div>
						</li>
						<li>
							BK21 FOUR 웰니스 공지사항입니다.
							<div>23.07.10</div>
						</li>
						<li>
							BK21 FOUR 웰니스 공지사항입니다.
							<div>23.07.10</div>
						</li>
					</ul>
				</div>
			</Notice>
		</MainContainter>
	);
}

const MainContainter = styled.div`
	display: flex;
`;

const Notice = styled.div`
	
		// background-color: rgba(200, 200, 255);
		width: 58rem;
		height: 40rem;
		display: flex;
		flex-direction: column;

		>a {
			${Fonts.bold20};
			color: ${Colors.blue700};
			height: 3rem;
			border-bottom: solid 1px ${Colors.gray500};
			gap: 50rem;
			display: flex;
			align-items: baseline;

			> img {
				// width: 0.6rem;
				// height: 1.2rem;
			}
		}

		> div: nth-child(2) {
			display: flex;
			padding: 2rem 1rem;
			gap: 4rem;
			border-bottom: solid 1px ${Colors.gray500};
			
			> div {
				display: flex;
				width: 30.9rem;
				flex-direction: column;
				align-items: flex-start;
				gap: 5px;
				
				> p:first-child{
					${Fonts.bold20};
					color: ${Colors.gray900};
					line-height: normal;
				}

				> p:nth-child(2) {
					${Fonts.regular14};
					line-height: 1.694rem;
					color: ${Colors.gray900};
				}

				> p:last-child {
					${Fonts.medium12};
					color: ${Colors.gray800};
				}
			}
	
		}

		> div: last-child {
			
			> ul {
				> li {
					border-bottom: solid 1px ${Colors.gray300};
					${Fonts.regular16};
					width: 58rem;
					height: 4rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 1.1rem;

					> div {
						${Fonts.regular12};
						color: ${Colors.gray800};
					}
				}
			}
		}
		
		
	}
`;

export default MainContent;
