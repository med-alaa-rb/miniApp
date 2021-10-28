import { Component } from '@angular/core';
import { HttpService } from './http.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniapp';

  isShowDiv = false;
  userStory: any

  constructor(
    private _http: HttpService,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}


  userName(x : any) {
    this._http.checkUsername(x)?.subscribe(async (res) => {
      if(!res) {
       this._http.userName = x
       console.log(this._http.userName)
       this.snackBar.open("name cheked succesfully!!");
        setTimeout(() => this.snackBar.dismiss(), 3000);
      }
      else {
        this.snackBar.open("name already exist");
        setTimeout(() => this.snackBar.dismiss(), 3000);
      }
    })
  }

  getAndSendVal(fav: any, choice: any, area: any) {
    for (var i = 0 ; i < arguments.length; i++) {
      if(!arguments[i]) {
        this.snackBar.open("all field must be filled");
        setTimeout(() => this.snackBar.dismiss(), 3000);
        return;
       }
      }
    if(this._http.userName) {
      var name = this._http.userName
      var obj = {name, fav, choice, area}
      console.log(obj);
      this._http.saveToDb(obj).subscribe(async (res)=> {
        console.log(res)
      })
    }
    else {
      this.snackBar.open("add and valid your username");
        setTimeout(() => this.snackBar.dismiss(), 3000);
        return;
    }
  }

  next() {
    this.isShowDiv = !this.isShowDiv;
  }

  searchVal(name: any) {
    if(!name) {
      this.snackBar.open("add a username");
      setTimeout(() => this.snackBar.dismiss(), 3000);
      return;
    }
    else {
      this._http.retrieveFromDb(name).subscribe(async (res: any)=> {
        if(!res) {
          this.snackBar.open("search another please!!");
          setTimeout(() => this.snackBar.dismiss(), 3000);
          return;
        }
        else {
          this.userStory = res["post"]
          console.log(this.userStory);
        }
      })
    }
  }

}
