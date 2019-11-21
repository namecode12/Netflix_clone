import React from "react";
import Banner from "../components/Banner";
import Preview from "../components/Preview";
import MovieContainer from "../components/MovieContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <Banner />
        <Preview />
        <div style={{ marginTop: "43%",overflowX: "hidden",width: "100%"}}>
        <MovieContainer 
        title="TV프로그램"
        movies={["신서유기","신서유기","신서유기","신서유기","신서유기","신서유기","신서유기","신서유기","신서유기","신서유기","신서유기"]}/>
        </div>
      </div>
    );
  }
}

export default Main;