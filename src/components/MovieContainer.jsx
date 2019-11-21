import * as React from "react";
import styled from "styled-components";
import Movieitem from "./MovieItem";

const BtnSize = "45px";

const Wrapper = styled.div`
  color: white;
  margin: 0 auto;

  width: calc(100% - (${BtnSize} + ${BtnSize}));
  overflow:visible;
  div.title {
    font-weight: bold;
  }
  div.container {
    position: relative;
  }
  div.slider {
      display: -webkit-box;
  }
`;

const BtnLeft = styled.button`
    width: ${BtnSize};
    height: 100%;
    position: absolute;
    right: 100%;
    z-index: 5;
    opacity: 0;
    border:none;
    color: white;
    outline: none;
    
    &:hover{
        opacity:1;
        background-color:rgba(0,0,0,0.5);
    }

`
const BtnRight = styled(BtnLeft)`
    left: 100%;
    right: none;

`

const MovieContainer = props => {
    return(
  
    <Wrapper>
        <div className="title">TV 프로그램 * 코미디</div>
        <div className="container">
            <BtnLeft>{"<"}</BtnLeft>
            <BtnRight>></BtnRight>
            <div className="slider">
                {[...Array(15).keys()].map(value => (
                    <Movieitem/>
                ))}
            </div>
        </div>
        </Wrapper>
  );
};

export default MovieContainer;