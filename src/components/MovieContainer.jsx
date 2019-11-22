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
      transform: ${props => `translateX(-${props.translate}px);`} ;
      transition: 0.3s;
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
    cursor: pointer;

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
    const [page, setPage] = React.useState(1);
    const [sliderwidth, setSliderWidth] = React.useState(0);
    const slider = React.useRef(undefined);

    React.useEffect(() => {
        setSliderWidth(slider.current.offsetWidth);
    }, [])

    const onClickleft = () => {
        if (page > 1)
            setPage(page - 1);
        console.log(page);
    };
    const onClcikRight = () => {
        if (page < props.movies.length / 5)
            setPage(page + 1);
        console.log(page);
    }
    return (

        <Wrapper translate={(page - 1) * (sliderwidth + 10)}>
            <div className="title">{props.title}</div>
            <div className="container">
                <BtnLeft onClick={onClickleft}>{"<"}</BtnLeft>
                <BtnRight onClick={onClcikRight}>></BtnRight>
                <div className="slider" ref={slider}>
                    {(props.movies || []).map(value => (
                        <Movieitem title={value} />
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default MovieContainer;