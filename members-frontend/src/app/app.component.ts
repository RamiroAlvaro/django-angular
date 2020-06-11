import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-frontend';

  selectedMember = {id: 0, name: '', surname: ''};

  members = [
    {id: 1, name: 'Ramiro', surname: 'Alvaro', phone: '+5531991387178', photo: 'http://www.minhaapp.com/photo1.jpg'},
    {id: 2, name: 'Mateus', surname: 'Alvaro', phone: '+5531991387179', photo: 'http://www.minhaapp.com/photo2.jpg'},
    {id: 3, name: 'Ana', surname: 'Coda', phone: '+5531991387170', photo: 'http://www.minhaapp.com/photo3.jpg'},
];

constructor(private api: ApiService, private router: Router) {
  this.getMembers();
}
getMembers = () => {
  this.api.getAllMembers().subscribe(
    data => {
      this.members = data
    },
    error => {
      console.log('Aconteceu um erro', error.message);
    }
  );
}

memberClicked = (member) => {
   this.router.navigate(['member-detail', member.id]);
}
}
