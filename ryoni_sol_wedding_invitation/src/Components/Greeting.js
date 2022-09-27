import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from '../Config';
import GroovePaper from '../Assets/GroovePaper.png';

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Gretting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>초대합니다</Title>
      </Divider>
      <Content>
        Do you remember? <br/>
        같은 팀에서 같은 춤을 추며 만난 둘이<br/>
        평생의 파트너로서,<br/>
        인생의 춤을 함께 추고자 합니다.<br/>
        두 사람이 하나 되는 인생의 무도회에<br/>
        여러분을 모시고 싶습니다.<br/>
        귀한 걸음 하시어 축복해 주세요.<br/>
        <br></br>
        <br></br>
      </Content>
      <GroomBride>
        <b>{GROOM_FATHER_NAME}</b> · <b>{GROOM_MOTHER_NAME}</b>의 아들 <b>{GROOM_NAME}</b>
        <br />
        <b>{BRIDE_FATHER_NAME}</b> · <b>{BRIDE_MOTHER_NAME}</b>의 <span style={{padding: "5px"}}></span>딸<span style={{padding: "5px"}}></span>  <b>{BRIDE_NAME}</b>
        <br></br>
        <br></br>
      </GroomBride>
    </Wrapper>
  );
};

export default Gretting;
