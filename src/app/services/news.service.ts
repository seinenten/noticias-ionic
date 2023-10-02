import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, News } from '../interfaces/news.interface';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'

const apiKey = environment.apiKey;
const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

    getTopHeadLines():Observable<Article[]>{ 

      const url = '/everything?q=tesla&sortBy=publishedAt';

      return this.http.get<News>(`${base_url}${url}&apiKey=${apiKey}`)
                  .pipe( 
                    map( resp => resp.articles )
                  )

    }



}
