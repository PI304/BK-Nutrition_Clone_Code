import styled from 'styled-components';
import Fonts from '../../../styles/fonts';
import Colors from '../../../styles/colors';
import Group from '../../../assets/intro-group.png';

function IntroPage() {
	return (
		<IntroContainer>
			<GreetingBox>
				<Title>인사말</Title>
				<div>
					<p>
						<strong>Brain Korea 21 FOUR 웰니스 융합인재 양성팀</strong>은 국내외적으로 연구 활동 및
						교육 활동이 활발한 교수들로 구성되어 있습니다.
					</p>
					<p>
						Brain Korea 21 FOUR 웰니스 융합인재 양성팀은 학문 후속세대에게{' '}
						<strong>국제적 수준의 교육/연구를 제공</strong>하여,{' '}
						<strong>사회 문제 해결과 미래 웰니스 식품영양기술의 신산업화</strong>를 통해 건강한 사회
						구현에 기여하고 <strong>글로벌 임팩트를 발휘하는 대학원</strong>으로 발돋움함과 동시에{' '}
						<strong>미래지향적인 융합혁신인재 양성과 배출의 요람</strong>으로서 그 역할을 다하고자
						합니다.
					</p>
					<p>
						글로벌 웰니스문제 해결을 위한 교육과 연구에 관심을 가지고 있는 여러분이 많이 참여하시어
						맞춤 영양, 항노화, 건강기능식품, 오믹스, 식품안전 등
						<strong>
							활용 가능한 미래 식품영양 지식과 기술을 통한 국민건강 및 인류복지 실현에 함께 공헌
						</strong>
						할 수 있기를 바랍니다.
					</p>
				</div>
			</GreetingBox>
			<Line />
			<GoalBox>
				<Title>목표 및 비전</Title>
				<div>
					<h2>웰니스 융합인재 양성팀의 비전</h2>
					<p>
						웰니스 항상성 유지를 통해 미래 인류 건강을 지속하기 위한 융합형 혁신인재를 양성하고,
						글로벌 식품영양 문제 해결을 위한 세계 수준의 교육을 주도하며, 미래 식품영양기술의
						국제화와 신산업화를 통해 사회 문제를 해결하는 한편, 미래 지속 가능한 식품영양 기술개발을
						통한 건강한 사회 구현에 기여하는, 혁신적 글로벌 중심 대학원으로서 입지를 확고히 하는
						것이다.
					</p>
				</div>
				<div>
					<h2>웰니스 융합인재 양성팀의 목표</h2>
					<p>아아</p>
				</div>
			</GoalBox>
			<Line />
			<GroupBox>
				<Title>조직현황</Title>
				<img src={Group} alt='Group' />
			</GroupBox>
		</IntroContainer>
	);
}

const IntroContainer = styled.section`
	margin: 5rem auto;
	width: 120rem;
	display: flex;
	flex-direction: column;
	gap: 5rem;
`;
const Title = styled.div`
	${Fonts.bold40}
`;
const Line = styled.div`
	width: 30rem;
	margin: 0 auto;
	border-top: 0.3rem solid ${Colors.line};
`;

const GreetingBox = styled.div`
	> div:last-child {
		width: 83.8rem;
		${Fonts.regular16}
		padding: 0px 0px 0px 80px;
		> p {
			margin: 2rem 0;
			> strong {
				${Fonts.bold16};
			}
		}
	}
`;

const GoalBox = styled.div`
	display: none;
`;

const GroupBox = styled.div`
	> img {
		height: 70rem;
		margin: 1rem 0 0 10rem;
	}
`;
export default IntroPage;
