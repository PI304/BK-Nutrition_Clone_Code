import './styles/reset.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Main from './pages/main';
import Achievement from './pages/achievement';
import Paths from './constant/path';
import Intro from './pages/intro';
import Member from './pages/member';
import Notice from './pages/notice';
import Resource from './pages/resource';
import International from './pages/international';
import Industrial from './pages/industrial';

function App() {
    return (
        <Router>
            <Routes>
			<Route path={Paths.main} element={<Main />} />
			<Route path={Paths.intro} element={<Intro />} />
			<Route path={Paths.member} element={<Member />} />
			<Route path={Paths.notice} element={<Notice />} /> 
			<Route path={Paths.resource} element={<Resource />} /> 
			<Route path={Paths.achievement} element={<Achievement />} />
			<Route path={Paths.international} element={<International />} />
			<Route path={Paths.industrial} element={<Industrial />} />
			
            </Routes>
        </Router>

    );
}

export default App;
