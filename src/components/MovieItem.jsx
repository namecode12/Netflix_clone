import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 20%;
  padding-bottom:10%;
  height:0;
  position:relative;
  & > div{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color:#aaa;

    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

const Movieitem = props => {
  return (
    <Wrapper>
      <div>movieitem</div>
    </Wrapper>
  );
};

export default Movieitem;