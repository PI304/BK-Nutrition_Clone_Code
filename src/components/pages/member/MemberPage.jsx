import styled from 'styled-components';
import background from '../../../assets/background.png';
import Colors from '../../../styles/colors';
import Fonts from '../../../styles/fonts';
import backgroundHome from '../../../assets/background-home.png';
import memberHome from '../../../assets/member-home.png';
import memberEmail from '../../../assets/member-email.png';
import memberPhone from '../../../assets/member-phone.png';
import ProfessorInfo from '../../shared/ProfessorInfo';
import Background from '../../shared/Background';
import professorRyu from '../../../assets/profile-ryu.png';
import professorKim from '../../../assets/profile-kim.png';
import professorLee from '../../../assets/profile-lee.png';
import professorPark from '../../../assets/profile-park.png';

function MemberPage() {
	const professors = [
		{
			id: '1',
			name: '류문선',
			title: '교수/팀장',
			phone: '02-2123-3126',
			email: 'msryu@yonsei.ac.kr',
			description:
				'연세대학교 식품영양학과 영양유전학 중개연구실 교수 혈액, 신경세포 발달 중 영양소 및 관련 유전자의 기능 분석',
			image: professorRyu,
		},
		{
			id: '2',
			name: '박태선',
			title: '교수',
			phone: '02-2123-3123',
			email: 'tspark@yonsei.ac.kr',
			image: professorPark,
			description:
				'연세대학교 생활과학대학 식품영양학과 교수/ 영양학, 분자영양학 전공 타우린의 생리활성, 기능성식품소재의 생리활성 평가 및 작용기작 규명',
		},
		{
			id: '3',
			name: '이승민',
			title: '교수',
			phone: '02-2123-3118',
			email: 'leeseungmin@yonsei.ac.kr',
			image: professorLee,
			description:
				'연세대학교 생활과학대학 식품영양학과 전임교원 식품기능유전체연구실 암세포생물학, 영양생리학, 생화학, 세포생물학, 무기질영양 전공',
		},
		{
			id: '4',
			name: '김민식',
			title: '교수',
			phone: '02-2123-3119',
			email: 'm.kim@yonsei.ac.kr',
			image: professorKim,
			description: '연세대학교 생활과학대학 식품영양학과 교수  식품분자미생물학 전공 ',
		},
	];

	const titles = [
		{
			id: '1',
			maintitle: '신진 웰니스 융합인재양성팀',
			subtitle: '참여교수 인력',
		},
		{
			id: '2',
			maintitle: '웰니스융합인재 연구팀',
			subtitle: '신진 연구 인력',
		},
		{
			id: '3',
			maintitle: 'BK21 FOUR',
			subtitle: '참여 대학원생',
		},
	];

	return (
		<Member>
			<Background />
			<MemberContainer>
				<div>
					<div>
						<CategoryTitle maintitle={titles[0].maintitle} subtitle={titles[0].subtitle} />
						<div>
							{professors.map((professor) => (
								<ProfessorInfo
									key={professor.id}
									name={professor.name}
									title={professor.title}
									phone={professor.phone}
									email={professor.email}
									image={professor.image}
									description={professor.description}
								/>
							))}
						</div>
						<CategoryTitle maintitle={titles[1].maintitle} subtitle={titles[1].subtitle} />

						<CategoryTitle maintitle={titles[2].maintitle} subtitle={titles[2].subtitle} />
					</div>
				</div>
			</MemberContainer>
		</Member>
	);
}

const Member = styled.div``;

const MemberContainer = styled.div`
	padding: 5rem;
	height: 150rem;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;

	> div {
		width: 120rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		> div {

			> div:nth-child(2) {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(2, 1fr);
				gap: 3rem;

				// > div:first-child {
				// 	width: 58rem;
				// 	height: 30rem;
				// 	display: flex;
				// 	flex-direction: row;
				// 	-webkit-box-pack: center;
				// 	-webkit-box-align: center;
				// 	${Fonts.bold12}
				// 	box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
				// 	align-items: stretch;
				// 	// align-content: center;
				// 	flex-wrap: wrap;
				// 	justify-content: space-around;

				// 	> div:first-child {
				// 		width: 20rem;

				// 		background-color: skyblue;
				// 	}

				// 	> div:nth-child(2) {
				// 		width: 32.5rem;
				// 		height: 23rem;
				// 		gap: 2rem;
				// 		background-color: pink;
				// 		display: flex;
				// 		justify-content: center;
				// 		flex-direction: column;
				// 		padding: 2rem;

				// 		> div:first-child {
				// 		}

				// 		> div:nth-child(2) {
				// 		}

				// 		> div:nth-child(3) {
				// 			display: flex;
				// 			gap: 1.5rem;
				// 			align-items: center;
				// 		}

				// 		> div:nth-child(4) {
				// 			display: flex;
				// 			gap: 1.5rem;
				// 			align-items: center;
				// 		}
				// 	}

					// > div:nth-child(4) {
					// 	// background-color: ${Colors.gray};
					// 	height: 7rem;
					// 	align-items: center;
					// 	padding: 1rem 2rem;
					// 	line-height: normal;
					// 	// color: gray;
					// }
				}

				> div:nth-child(2) {
					// background: #e4e9f0;
					padding: 5rem 0rem;
					line-height: normal;
				}
			}
		}
	}
`;

const CategoryTitle = ({ maintitle, subtitle }) => (
	<MemberPageTitle>
		<div>
			<div>{maintitle}</div>
			<div>{subtitle}</div>

			<Line />
		</div>
	</MemberPageTitle>
);

const Line = styled.div`
	width: 40rem;
	height: 0.3rem;
	background-color: black;
`;

const MemberPageTitle = styled.div`
	> div {
		// width: 42rem;
		height: 10rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		> div:first-child {
			${Fonts.bold26}
		}
		> div:nth-child(2) {
			${Fonts.bold40}
		}
	}
`;

export default MemberPage;
