package br.com.imdbank.imdbank.controllers;

import br.com.imdbank.imdbank.model.Movie;
import br.com.imdbank.imdbank.services.ImdbApiService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/movies")
public class MovieController {

    @GetMapping("/title/{title}")
    public String getMovies(@PathVariable("title") String title){
        ImdbApiService service = new ImdbApiService();
        String movies = service.getFilms(title);
        return movies;
    }

    @GetMapping("/title/{title}/{page}")
    public String getMovies(@PathVariable("title") String title, @PathVariable("page") String page){
        ImdbApiService service = new ImdbApiService();
        String movies = service.getFilms(title,page);
        return movies;
    }

    @GetMapping("/id/{id}")
    public String getMovie(@PathVariable("id") @NonNull String id){
        ImdbApiService service = new ImdbApiService();
        String movie = service.getFilm(id);
        return movie;
    }
}
