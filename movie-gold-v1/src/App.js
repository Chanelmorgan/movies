import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig'; 
api.defaults.baseURL = 'http://localhost:8080';
import { useState, useEffect } from 'react';

function App() {
  const [Movies, setMovies] = useState(); 
  
  const getMovies = async () => { 
  
    try{ 
      const response = await api.get("/api/v1/movies"); 
      console.log(response.data); 
      setMovies(response.data)
    }catch(err){
      console.log(err); 
    } 
  }

  useEffect(() => { 
    getMovies();
  }, [])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
