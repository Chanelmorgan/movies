import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig'; 
api.defaults.baseURL = 'http://localhost:8080';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Header from './components/header/Header';


function App() {
  const [movies, setMovies] = useState(); 
  const[movie, setMovie] = useState(); 
  const[reviews, setReviews] = useState();
  
  const getMovies = async () => { 
  
    try{ 
      const response = await api.get("/api/v1/movies"); 
      console.log(response.data); 
      setMovies(response.data)
    }catch(err){
      console.log(err); 
    } 
  }

  const getMovieData = async (movieId) => {  


    try{
      const response = await api.get("/api/v1/movies");

      const singleMovie = response.data; 
      setMovie(singleMovie); 
      setReview(singleMovie.reviews);

    }catch (err){
      console.log(err); 
    }

  }

  useEffect(() => { 
    getMovies();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}> 
        <Route path="/" element={<Home movies={movies}/>}></Route>
        <Route path="/Trailer/:ytTrailerId" element={<Trailer></Trailer>}></Route>
        <Route path="/Reviews/:movieId" element= {<Reviews getMovieData ={getMovieData} reviews ={reviews} setReviews ={setReviews}/>}></Route>
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
