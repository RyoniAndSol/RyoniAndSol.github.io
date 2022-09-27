import Disqus from 'disqus-react'
import React from 'react';
import styled from 'styled-components';

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


function Visitor() {

    const [useGuest,setGuest]= React.useState(false);

    return (
        <Wrapper>
            <button onClick={()=>{setGuest(current=>!current)}}>방명록 열기</button>
            {useGuest == true ? <Disqus.DiscussionEmbed shortname={discusShortName} config={discusConfig}/> : null}
        </Wrapper>
    );
  }
  
  export default Visitor;