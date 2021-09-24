import React from "react";
// import PropTypes from 'prop-types';
import axios from "axios";
import Movie from './movie';
import "./css/Movie.css"

class App extends React.Component {
  // return 이 없다. React.component에 render method를 가져온다. class-는 클래스인데 보여주기 위해서는 render method안에 넣어줘야한다. 리엑트는 자동으로 class component안에 render method를 자동으로 렌더링한다
  state = {
    //변하는 state는 여기에 넣는다. 바꾸고싶은 데이터를 넣는거다.
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // 시간이 걸리기 때문에 async - await / wait for axios to finish. 
    
    this.setState({
      movies,
      isLoading: false
    })
  }

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {
      movies,
      isLoading
    } = this.state;
    return (
    <div> 
      {isLoading ? (
        <div className = "loader">
          <span className ="loader__text">loading</span>
        </div>
        ) : ( 
          <div className = "movies">
            {movies.map(movie => (
            <Movie 
              key = {movie.id}
              id = {movie.id} 
              year = {movie.year} 
              title = {movie.title}
              summary = {movie.summary} 
              poster = {movie.medium_cover_image}
              genres = {movie.genres}
            />
            ))}
          </div> 
        )
      } 
    </div>
  )
  // react component does
  // mouting - being born
  // Updating - updating
  // Unmounting- when component dies. when page changes
  // construnctor - con
  }
}

export default App;