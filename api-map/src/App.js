import React, { useEffect } from 'react';
const KakaoMap = () => {
  useEffect(() => {
    // 카카오맵 API 스크립트 동적으로 로드
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=자바스크립트API키&autoload=false';
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 지도 중심 좌표 (서울)
          level: 3, // 초기 지도 확대 레벨
        };
        // 지도 생성
        const map = new window.kakao.maps.Map(container, options);
        // 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.978); // 마커 좌표 (서울)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정
  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};
export default KakaoMap;
