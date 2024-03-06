package com.example.movies;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;

@Configuration
public class MongoConfig {

    @Bean
    public MongoTemplate mongoTemplate() {
        String connectionString = "mongodb+srv://chanelmorgan:jwSuO6MWnSbheXpj@cluster0.dyylawn.mongodb.net/movie-api-db";
        return new MongoTemplate(new SimpleMongoClientDatabaseFactory(connectionString));
    }
}
