import React from "react";
import Banner from "../components/Banner";
import Preview from "../components/Preview";
import MovieContainer from "../components/MovieContainer";
import axios from "axios";
import styled from "styled-components"
import withLayout from "../components/withLayout";
const MovieContainerWrapper = styled.div`
  & > *:not(:last-child){
    margin-bottom:25px;
  }
`;
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular_movies: [],
      week_movies: []
    };
  }

  componentDidMount(){
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr")
    .then(response =>{
      console.log("pop", response)
      this.setState({popular_movies: response.data.results});
    })
    .catch(err => {
      console.log("err",err);
    });
    
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr")
    .then(response =>{
      console.log("week", response)
      this.setState({week_movies: response.data.results});
    })
    .catch(err => {
      console.log("err",err);
    });
    

  }
  render() {
    return (
      <div>
        
        <Preview />
        <MovieContainerWrapper style={{ marginTop: "43%",overflowX: "hidden",width: "100%",overflowY:"hidden"}}>
        <MovieContainer 
        title="인기있는 영화"
        movies={this.state.popular_movies}/>
        <MovieContainer 
        title="이 주의 영화"
        movies={this.state.week_movies}/>
        </MovieContainerWrapper>
      </div>
    );
  }
}

export default withLayout(Main);