import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './models/students.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rizz: Students = {studenti:[]};

  constructor(private http: HttpClient) {
    this.getData();
  }

  public getData(): void {
    const url =
      'https://5000-studerriccardo-server-k0a5iqm3gnb.ws-eu105.gitpod.io/';

    this.http.get<Students>(url).subscribe((response) => {
      let ris = response;
      console.log(ris);
      this.rizz = ris
    });
    
  }
}
