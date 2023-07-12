import { Map, MapMarker } from 'react-kakao-maps-sdk';

function KakaoMap() {
	return (
		<Map center={{ lat: 37.5648, lng: 126.9343 }} style={{ width: '80rem', height: '45rem' }}>
			<MapMarker position={{ lat: 37.5648, lng: 126.9343 }} />
		</Map>
	);
}
export default KakaoMap;
