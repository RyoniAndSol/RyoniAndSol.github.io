import React ,{useEffect} from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import GroovePaper from '../Assets/GroovePaper.png';


const { kakao } = window;
const latitude=37.413185097032695
const longtitude=127.12328791696557

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-left: 42px;
  padding-right: 42px;
  padding-bottom: 42px;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 1.5vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 24px;
  text-align: center;
  
`;


const Location = () => {

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
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      {/* <KakaoMap id='myMap'/> */}
      {/* <Image src={LocationMap} /> */}
      <div id='myMap' style={{
             width: '100%', 
            height: '500px',
             objectPosition: 'center center',
             textAlign :'center',
            //  margin: '0 auto',
            
         }}></div>
        <Content>
        <br></br>
        <h3><b>코리아디자인센터 웨딩홀 (TEL 031-701-9666)</b></h3>
        경기 성남시 분당구 양현로 322(야탑동 344-1)<br/><br></br>
        지하철: 분당(2호선 선릉역환승)야탑역<br/>
        무료서틀버스: 4번출구 택시승차장 승차 (수시운행)<br/>
        주차장: 본 건물 주차장이용(500대 주차가능, 1시간30분 무료.확인도장 필수<br/>
       
        <br></br>
        <br></br>
      </Content>

    </Wrapper>
  );
};

export default Location;
