import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  userName: any;
  facColor: any;

  constructor(private http: HttpClient) {}
  ROOT_URL = 'http://localhost:2700';



  checkUsername(username: string) {
    if (!username) return
    else {
      return this.http.get(this.ROOT_URL + `/api/data/checkname/${username}`)
    }
  }

  saveToDb(obj: any) {
    return this.http.post(this.ROOT_URL + "/api/miniappserver/postUserInfo", obj)
  }
  retrieveFromDb(name: any) {
    return this.http.get(this.ROOT_URL + `/api/data/getUserProfile/${name}`)
  }

}
