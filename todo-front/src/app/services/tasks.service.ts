import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import * as AppUtil from "../common/app.util";

@Injectable()
export class TasksService {
  constructor(private _http: Http) {}

  createAuthHeader(headers: Headers) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    headers.append("Authorization", `Bearer ${token}`);
  }

  saveTask(task) {
    const headers = new Headers();
    this.createAuthHeader(headers);

    return this._http
      .post("http://localhost:3000/tasks/add", task, { headers })
      .map(resp => resp.json());
  }

  getTasks(query) {
    const headers = new Headers();
    this.createAuthHeader(headers);

    return this._http
      .post("tasks/list", query, { headers })
      .map(resp => resp.json());
  }
}
