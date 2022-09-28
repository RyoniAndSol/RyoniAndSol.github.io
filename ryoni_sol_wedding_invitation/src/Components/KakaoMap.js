import React, {useEffect} from 'react'

const { kakao } = window;
const latitude=37.413185097032695
const longtitude=127.12328791696557

const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
         // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(latitude, longtitude); 
		
        const options = {
			center: markerPosition,
			level: 3
		};
        const map = new kakao.maps.Map(container, options);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({position: markerPosition});

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        var iwContent = '<div style="padding:5px;">코리아디자인센터 <br>웨딩홀</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성하고 지도에 표시합니다
    var infowindow = new kakao.maps.InfoWindow({
        map: map, // 인포윈도우가 표시될 지도
        position : markerPosition, 
        content : iwContent,
        removable : iwRemoveable
    });

    infowindow.open(map, marker); 


    }, []);

    return (
        <div></div>
        // <div id='myMap' style={{
        //     width: '60%', 
        //     height: '500px',
        //     objectPosition: 'center center',
        //     textAlign :'center',
        // }}></div>
    );
}

export default MapContainer; 