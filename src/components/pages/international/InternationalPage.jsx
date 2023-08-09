import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fonts from '../../../styles/fonts';
import Colors from '../../../styles/colors';
import DoublePrevButton from '../../../assets/notice-double-prev-button.png';
import PrevButton from '../../../assets/notice-prev-button.png';
import NextButton from '../../../assets/notice-next-button.png';
import DoubleNextButton from '../../../assets/notice-double-next-button.png';
import Paths from '../../../constant/path';
import Background from '../../shared/Background';

function InternationalPage() {
	return (
		<InternationalSection>
			<Background pageId='4' />
			<InternationalLayout>
				<SelectContainer>
					<div>
						<div>
							<Link to={Paths.achievement}>연구업적</Link>
						</div>
						<div>
							<Link to={Paths.international}>국제 협력</Link>
						</div>
						<div>
							<Link to={Paths.industrial}>산학 협력</Link>
						</div>
					</div>
					<select>
						<option>최신순 정렬</option>
					</select>
				</SelectContainer>
				<InternationalTable>
					<thead>
						<tr>
							<th>번호</th>
							<th>제목</th>
							<th>작성자</th>
							<th>날짜</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labo
							</td>
							<td>관리자</td>
							<td>2022-00-00</td>
						</tr>
					</tbody>
				</InternationalTable>
				<InternationalBar>
					<img src={DoublePrevButton} alt='DoublePrevButton' />
					<img src={PrevButton} alt='PrevButton' />
					<div>
						<div>1</div>
						<div>2</div>
						<div>3</div>
					</div>
					<img src={NextButton} alt='NextButton' />
					<img src={DoubleNextButton} alt='DoubleNextButton' />
				</InternationalBar>
			</InternationalLayout>
		</InternationalSection>
	);
}

const InternationalSection = styled.section`
	width: 100%;
`;

const InternationalLayout = styled.div`
	margin: 5rem auto;
	width: 120rem;
`;

const SelectContainer = styled.div`
	width: 120rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	> div {
		display: flex;
		flex-direction: row;
		> div {
			width: 15rem;
			height: 5rem;
			${Fonts.bold20};
			display: flex;
			justify-content: center;
			align-items: center;
		}
		> div:nth-child(1) {
			background-color: ${Colors.table1};
			border-radius: 1.5rem 0.5rem 0 0;
		}
		> div:nth-child(2) {
			color: ${Colors.white};
			background-color: ${Colors.table2};
			border-radius: 0.5rem 0.5rem 0 0;
		}
		> div:nth-child(3) {
			background-color: ${Colors.table1};
			border-radius: 0.5rem 1.5rem 0 0;
		}
	}
	> select {
		${Fonts.regular14};
		color: ${Colors.select};
		width: 13rem;
		height: 3rem;
		border: 0.1rem solid ${Colors.gray300};
		padding: 0 0 0 0.5rem;
		margin: 1rem 0;
	}
`;
const InternationalTable = styled.table`
	width: 120rem;
	bodder-collapse: collapse;
	text-align: center;
	> thead {
		> tr {
			> th {
				${Fonts.bold16}
				padding: 1.2rem 0;
				background-color: ${Colors.table1};
			}
			> th:nth-child(1) {
				width: 12.4rem;
			}
			> th:nth-child(2) {
				width: 74rem;
			}
			> th:nth-child(3) {
				width: 12.3rem;
			}
			> th:nth-child(4) {
				width: 21.1rem;
			}
		}
	}
	> tbody {
		> tr {
			> td {
				${Fonts.regular16}
				padding: 1.2rem 0;
				border-bottom: 0.1rem solid ${Colors.gray300};
			}
		}
	}
`;
const InternationalBar = styled.div`
	margin: 5rem auto 0;
	width: 19.8rem;
	display: flex;
	> div {
		width: 9rem;
		display: flex;
		justify-content: space-evenly;
		> div {
			${Fonts.regular14}
			width: 2rem;
			height: 2.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		> div:nth-of-type(1) {
			${Fonts.bold14}
			border-bottom: 0.1rem solid ${Colors.black};
		}
	}
`;

export default InternationalPage;
