import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  page = true;

  ngOnInit() {
     firebase.initializeApp({
      apiKey: "AIzaSyBB1rusLB43oxIW4r4HvxVpgTXNVTm2FTk",
      authDomain: "recipe-book-e1921.firebaseapp.com",
     });
  }

  onSelect(isValid: boolean) {
    this.page = isValid
  }
}
