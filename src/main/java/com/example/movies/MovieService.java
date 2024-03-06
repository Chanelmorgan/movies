package com.example.movies;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    private MovieRepository movieRepository;
    public List<Movie> allMovies(){
        return movieRepository.findAll();

    }

    public Optional<Movie> singleMovie(ObjectId id){
        return  movieRepository.findById(id);
    }
}
