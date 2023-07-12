import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

function SideBar() {
	return (
		<SideBarContainer>
			<div>교육팀 소개</div>
			<div>
				<a href='#Greeting'>
					<div>인사말</div>
				</a>
				<a href='#Goal'>
					<div>목표 및 비전</div>
				</a>
				<a href='#Group'>
					<div>조직현황</div>
				</a>
				<a href='#Map'>
					<div>찾아오시는 길</div>
				</a>
			</div>
		</SideBarContainer>
	);
}

const SideBarContainer = styled.div`
	position: sticky;
	top: 10rem;
	align-self: start;
	> div:first-child {
		${Fonts.bold16}
		line-height: 4rem;
		border-bottom: 0.15rem solid ${Colors.blue500};
		margin: 0 0 1rem 0;
	}
	> div:last-child {
		> a {
			> div {
				${Fonts.regular14}
				line-height: 3rem;
			}
		}
	}
`;

export default SideBar;
