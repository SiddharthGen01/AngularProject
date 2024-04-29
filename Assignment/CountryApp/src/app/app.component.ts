import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countries: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://restcountries.com/v3.1/all')
      .subscribe(
        (response) => {
          this.countries = response;
        },
        (error) => {
          console.log('Error fetching countries:', error);
        }
      );
  }
}
