import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(20% - 8px);
  padding-bottom:10%;
  height:0;
  position:relative;
  margin-right:10px;
  transition:0.3s;
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
  & > img{
    width:100%;
    height:100%;
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
  &:hover{
    transform: scale(1.1);
    z-index:100;
  }
`;

const Movieitem = props => {
  console.log(props.title)
  const src = "http://image.tmdb.org/t/p/w185" + props.title.backdrop_path;
  return (
    <Wrapper>
      <img src={src} alt=""/>
    </Wrapper>
  );
};

export default Movieitem;