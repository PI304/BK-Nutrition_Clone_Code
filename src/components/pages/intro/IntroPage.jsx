import styled from 'styled-components';
import Fonts from '../../../styles/fonts';
import Colors from '../../../styles/colors';
import Group from '../../../assets/intro-group.png';
import Vision from '../../../assets/intro-vision.png';
import KakaoMap from '../../shared/KakaoMap';
import Phone from '../../../assets/intro-phone.png';
import Location from '../../../assets/intro-location.png';
import SideBar from '../../shared/SideBar';

function IntroPage() {
	return (
		<IntroLayout>
			<IntroContainer>
				<SideBar />
				<ContentContainer>
					<GreetingBox>
						<Title id='Greeting'>인사말</Title>
						<div>
							<p>
								<Strong>Brain Korea 21 FOUR 웰니스 융합인재 양성팀</Strong>은 국내외적으로 연구 활동
								및 교육 활동이 활발한 교수들로 구성되어 있습니다.
							</p>
							<p>
								Brain Korea 21 FOUR 웰니스 융합인재 양성팀은 학문 후속세대에게{' '}
								<Strong>국제적 수준의 교육/연구를 제공</Strong>하여,{' '}
								<Strong>사회 문제 해결과 미래 웰니스 식품영양기술의 신산업화</Strong>를 통해 건강한
								사회 구현에 기여하고 <Strong>글로벌 임팩트를 발휘하는 대학원</Strong>으로 발돋움함과
								동시에 <Strong>미래지향적인 융합혁신인재 양성과 배출의 요람</Strong>으로서 그 역할을
								다하고자 합니다.
							</p>
							<p>
								글로벌 웰니스문제 해결을 위한 교육과 연구에 관심을 가지고 있는 여러분이 많이
								참여하시어 맞춤 영양, 항노화, 건강기능식품, 오믹스, 식품안전 등
								<Strong>
									활용 가능한 미래 식품영양 지식과 기술을 통한 국민건강 및 인류복지 실현에 함께 공헌
								</Strong>
								할 수 있기를 바랍니다.
							</p>
						</div>
					</GreetingBox>
					<Line />
					<GoalBox>
						<Title id='Goal'>목표 및 비전</Title>
						<div>
							<div>
								<div>
									<SubTitle>웰니스 융합인재 양성팀의 비전</SubTitle>
									<p>
										웰니스 항상성 유지를 통해 미래 인류 건강을 지속하기 위한 융합형 혁신인재를
										양성하고, 글로벌 식품영양 문제 해결을 위한 세계 수준의 교육을 주도하며, 미래
										식품영양기술의 국제화와 신산업화를 통해 사회 문제를 해결하는 한편, 미래 지속
										가능한 식품영양 기술개발을 통한 건강한 사회 구현에 기여하는, 혁신적 글로벌 중심
										대학원으로서 입지를 확고히 하는 것이다.
									</p>
								</div>
								<div>
									<SubTitle>웰니스 융합인재 양성팀의 목표</SubTitle>
									<div>
										<ol>
											<li>
												글로벌 웰니스문제 해결을 위한 <Strong>혁신적 융합 전문인력 양성</Strong>
											</li>
											<li>
												글로벌 웰니스융합문제 해결을 위한{' '}
												<Strong>국제적 수준의 교육 연구 주도</Strong>
											</li>
											<li>
												<Strong>미래식품영양기술의 국제화 및 신산업화</Strong>를 통한 사회적 기여
												달성
											</li>
										</ol>
										<ul>
											<li>
												<Strong>
													목표 달성을 위한 과학기술·산업·사회 문제 해결 관련 교육
													<br /> 프로그램 운영
												</Strong>
											</li>
										</ul>
										<ol>
											<li>교육연구팀의 사회문제해결 관련 교과목 운영</li>
											<li>
												연세대 대학원의 과학기술·산업·사회 문제 해결 관련 공통
												<br />
												교육과정 운영
											</li>
											<li>사회문제해결 관련 교과목 개발 및 운영</li>
											<li>문제해결 역량 개발을 위한 비교과 프로그램 개발 및 운영</li>
										</ol>
									</div>
								</div>
							</div>
							<img src={Vision} alt='Vision' />
						</div>
					</GoalBox>
					<Line />
					<GroupBox id='Group'>
						<Title>조직현황</Title>
						<img src={Group} alt='Group' />
					</GroupBox>
					<Line />
					<MapBox>
						<Title id='Map'>찾아오시는 길</Title>
						<div>
							<KakaoMap />
							<div>
								<img src={Location} alt='' />
								<p>서울특별시 서대문구 연세로 50 삼성관 110호 BK21 FOUR 웰니스 융합인재양성팀</p>
							</div>
							<div>
								<img src={Phone} alt='' />
								<p>02-2123-3570</p>
							</div>
						</div>
					</MapBox>
				</ContentContainer>
			</IntroContainer>
		</IntroLayout>
	);
}

const IntroLayout = styled.section`
	margin: 5rem auto;
	width: 120rem;
`;

const IntroContainer = styled.div`
	display: grid;
	grid-template-columns: 10rem 120rem;
	gap: 5rem;
`;
const ContentContainer = styled.div`
	width: 120rem;
	display: flex;
	flex-direction: column;
	gap: 5rem;
	line-height: 2.2rem;
	text-align: justify;
`;
const Strong = styled.strong`
	${Fonts.bold16};
`;
const Title = styled.div`
	${Fonts.bold40}
`;
const Line = styled.div`
	width: 30rem;
	margin: 0 auto;
	border-top: 0.3rem solid ${Colors.line};
`;
const SubTitle = styled.h3`
	${Fonts.bold30}
	&::after {
		content: '';
		display: block;
		width: 49rem;
		border-top: 0.35rem solid ${Colors.black};
		margin: 2rem 0 0 3rem;
	}
`;
const GreetingBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	> div:last-child {
		width: 75.86rem;
		margin: 0 0 0 9rem;
		${Fonts.regular16}
		> p {
			margin: 2rem 0;
		}
	}
`;

const GoalBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8rem;
	> div {
		display: flex;
		flex-direction: row;
		gap: 8rem;
		> div {
			width: 65rem;
			margin: 0 0 0 8rem;
			> div:first-child {
				> p {
					margin: 3rem;
					width: 49rem;
				}
			}
			> div:last-child {
				> div {
					margin: 3rem;
					width: 50rem;
					display: flex;
					flex-direction: column;
					gap: 2rem;
					> ol {
						> li {
							list-style: decimal;
							list-style-position: inside;
							line-height: 150%;
						}
					}
					> ul {
						> li {
							list-style: disc;
							list-style-position: inside;
							line-height: 150%;
						}
					}
				}
			}
		}
		> img {
			height: 63rem;
		}
	}
`;

const GroupBox = styled.div`
	> img {
		height: 70rem;
		margin: 1rem 0 0 10rem;
	}
`;

const MapBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	> div:last-child {
		margin: 3rem 0 0 9rem;
		> div {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 2rem;
			> img {
				height: 6rem;
			}
			> p {
				${Fonts.bold16}
			}
		}
		> div:nth-child(2) {
			margin: 1.5rem 0 0 0;
		}
	}
`;

export default IntroPage;
