import Disqus from 'disqus-react'
import React from 'react';
import styled from 'styled-components';
import { Divider,Button } from 'antd';

const discusShortName='https-ryoniandsol-github-io'
const discusConfig=
{
  url: "https://ryoniandsol.github.io"
}

const Wrapper = styled.div`
  background: #efebe9;
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

const GuestButton = styled(Button)`
  background: #53acee;
  border-color: #53acee;
  color: #ffffff;
  &:hover {
    background-color: #9fcbed !important;
    border-color: #9fcbed !important;
    color: #ffffff !important;
  }
  &:focus {
    background-color: #9fcbed !important;
    border-color: #9fcbed !important;
    color: #ffffff !important;
  }
`;

function Visitor() {

    const [useGuest,setGuest]= React.useState(false);

    return (
        <Wrapper>
          <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>방명록</Title>
        </Divider>
            <GuestButton onClick={()=>{setGuest(current=>!current)}}>{useGuest==true? "방명록 닫기":"방명록 열기"}</GuestButton>
            <br></br>
            <br></br>
            {useGuest == true ? <Disqus.DiscussionEmbed shortname={discusShortName} config={discusConfig}/> : null}
        </Wrapper>
    );
  }
  
  export default Visitor;