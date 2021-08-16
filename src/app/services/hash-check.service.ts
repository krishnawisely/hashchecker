import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServiceInfoModel } from '../model/service-info/service-info.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HashCheckService {

  constructor(
    private http: HttpClient
    ) { }

    baseUrl: string = 'https://{{subdomain}}.revature.com/';
    path: string = "{{service}}/status/info";

  getServiceInfo(subDomain: string, serviceName: string): Observable<ServiceInfoModel> {
    const url = this.baseUrl.replace('{{subdomain}}',subDomain) + this.path.replace('{{service}}',serviceName);
    return this.http.get<any>(url).pipe(map( res => res.data as ServiceInfoModel));
  }
}
