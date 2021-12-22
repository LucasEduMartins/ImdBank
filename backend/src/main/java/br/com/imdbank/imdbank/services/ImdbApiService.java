package br.com.imdbank.imdbank.services;

import com.sun.org.apache.xerces.internal.util.URI;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriBuilder;

import java.util.ArrayList;

public class ImdbApiService {
    final String API_KEY = "9ed9f4d9";
    final String BASE_URL = "http://www.omdbapi.com/";
    final String KEY_OPTION = "apiKey=" + API_KEY;
    final String TITLE_OPTION = "s=";
    final String ID_OPTION = "i=";
    final String PAGE_OPTION = "page=" ;

    public ResponseEntity<String> request(String uri){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForEntity(uri, String.class);
    }

    public String getFilms(String title)  {
        String uri = BASE_URL + "?" + TITLE_OPTION + title + "&" + KEY_OPTION;

        ResponseEntity<String> response = request(uri);
        return response.getBody();
    }

    public String getFilms(String title, String page) {
        String uri = BASE_URL + "?" + TITLE_OPTION + title + "&" + PAGE_OPTION + page + "&" + KEY_OPTION;

        ResponseEntity<String> response = request(uri);
        return response.getBody();
    }

    public String getFilm(String id) {
        String uri = BASE_URL + "?" + ID_OPTION + id + "&" + KEY_OPTION;

        ResponseEntity<String> response = request(uri);
        return response.getBody();
    }
}
