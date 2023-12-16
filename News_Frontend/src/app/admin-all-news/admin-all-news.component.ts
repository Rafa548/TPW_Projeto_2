import {Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { ApiDataService } from '../api-data.service';
import {NgForOf, NgIf} from "@angular/common";
import {news} from '../interfaces'

@Component({
  selector: 'app-admin-all-news',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './admin-all-news.component.html',
  styleUrl: './admin-all-news.component.css'
})


export class AdminAllNewsComponent {
  news: news[] = [];
  ApiDataService = inject(ApiDataService);


  constructor(private router: Router) {
    this.ApiDataService.getNews().then((news : news[]) => {
      this.news = news;
    });
  }

  navigateToNewDetails(newsId: number) {
    this.router.navigate(['admin/new', newsId]); // Navigate to a route like '/class/1' based on the class ID
  }

  deleteNew(event: Event, id: number) {
    event.stopPropagation();
    //console.log("hello")
    this.ApiDataService.deleteNew(id).then((response : any) => {
      this.ApiDataService.getNews().then((news : news[]) => {
        this.news = news;
      });
    });
  }

}