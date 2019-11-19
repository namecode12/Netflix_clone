import React from "react";
import Banner from "../components/Banner.jsx"
import Preview from "../components/Preview.jsx"
import MovieContainer from "../components/MovieContainer.jsx"
class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
        <div style={{marginTop: "45%"}}>
            <Banner/>
            <Preview/>
            
            <MovieContainer/>
        </div>
        );
    }
}

export default Main;