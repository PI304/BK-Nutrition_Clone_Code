import styled from 'styled-components';
import Fonts from '../../../styles/fonts';

function MainPage() {
	return (
		<Main>
			<div>
				<p>main페이지</p>
			</div>
		</Main>
	);
}

const Main = styled.div`
	background-color: rgba(90, 180, 250);
	height: 10rem;

	> div > p {
		text-align: center;
		${Fonts.medium24}
	}
`;

export default MainPage;
