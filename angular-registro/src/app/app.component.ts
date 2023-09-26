import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  public getData(): void {
    const url = 'http://example.com/api/data'; // Sostituisci con l'URL effettivo del server e dell'endpoint

    this.http.get(url).subscribe(
      (response) => {
        let ris =  response
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}