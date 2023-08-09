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
				'연세대학교 식품영양학과 영양유전학 중개연구실 교수 \n 혈액 신경세포 발달 중 영양소 및 관련 유전자의 기능 분석',
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
				'연세대학교 생활과학대학 식품영양학과 교수  \n 영양학, 분자영양학 전공 타우린의 생리활성, 기능성식품소재의 생리활성 평가 및 작용기작 규명',
		},
		{
			id: '3',
			name: '이승민',
			title: '교수',
			phone: '02-2123-3118',
			email: 'leeseungmin@yonsei.ac.kr',
			image: professorLee,
			description:
				'연세대학교 생활과학대학 식품영양학과 전임교원  \n 식품기능유전체연구실 암세포생물학, 영양생리학, 생화학, 세포생물학, 무기질영양 전공',
		},
		{
			id: '4',
			name: '김민식',
			title: '교수',
			phone: '02-2123-3119',
			email: 'm.kim@yonsei.ac.kr',
			image: professorKim,
			description: '연세대학교 생활과학대학 식품영양학과 교수  \n 식품분자미생물학 전공 ',
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
			<Background pageId='2' />
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
						<div>
							<CategoryTitle maintitle={titles[1].maintitle} subtitle={titles[1].subtitle} />
							<table>
								<thead>
									<tr>
										<th>이름</th>
										<th>직위</th>
										<th>전공</th>
										<th>연락처</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>임주원</th>
										<th>연구 교수/ 실무자</th>
										<th>웰니스융합인재 연구팀</th>
										<th>jwlim11@yonsei.ac.kr/ 02-2123-3570</th>
									</tr>
								</tbody>
							</table>
						</div>
						<div>
							<CategoryTitle maintitle={titles[2].maintitle} subtitle={titles[2].subtitle} />
							<table>
								<thead>
									<tr>
										<th>학기</th>
										<th>명단</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>2020-2</th>
										<th>참여대학원생 명단</th>
									</tr>
									<tr>
										<th>2021-1</th>
										<th>참여대학원생 명단</th>
									</tr>
									<tr>
										<th>2021-2</th>
										<th>참여대학원생 명단</th>
									</tr>
									<tr>
										<th>2022-1</th>
										<th>참여대학원생 명단</th>
									</tr>
									<tr>
										<th>2022-2</th>
										<th>참여대학원생 명단</th>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</MemberContainer>
		</Member>
	);
}

const Member = styled.div``;

const MemberContainer = styled.div`
	padding: 5rem;
	// height: 150rem;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;

	> div {
		width: 120rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		> div:first-child {
			width: 100%;
			gap: 3.5rem;
			display: flex;
			flex-direction: column;

			> div:nth-child(2) {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(2, 1fr);
				gap: 4rem;
				// padding: 5rem 0rem;
				line-height: normal;
			}

			> div:nth-child(3) {
				gap: 1rem;
				display: flex;
				flex-direction: column;

				> table {
					width: 100%;
					> thead {
						width: 100%;
						background: ${Colors.gray};
						height: 6rem;
						text-align: center;

						> tr {
							> th {
								${Fonts.bold24}
								width: 10rem;
								line-height: normal;
								vertical-align: middle;
							}
						}
					}

					> tbody {
						width: 100%;
						border-bottom: 1px solid ${Colors.gray};
						height: 5rem;
						text-align: center;

						> tr {
							> th {
								${Fonts.regular18}
								line-height: normal;
								height: 100%;
								vertical-align: middle;
							}
						}
					}
				}
			}
			> div:nth-child(4) {
				gap: 1rem;
				display: flex;
				flex-direction: column;
				> table {
					width: 100%;
					> thead {
						width: 100%;
						background: ${Colors.gray};
						height: 6rem;
						text-align: center;

						> tr {
							> th {
								${Fonts.bold16}
								line-height: normal;
								vertical-align: middle;
							}
						}
					}

					> tbody {
						width: 100%;
						height: 25rem;
						text-align: center;

						> tr {
							border-bottom: 1px solid ${Colors.gray150};
							> th {
								vertical-align: middle;
								${Fonts.regular16}
							}
						}
					}
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
