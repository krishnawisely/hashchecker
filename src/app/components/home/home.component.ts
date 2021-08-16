import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ServiceInfoModel } from 'src/app/model/service-info/service-info.model';
import { HashCheckService } from 'src/app/services/hash-check.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private hashService: HashCheckService
  ) { }

  hashStatus: any;
  env!: string;
  compareToEnv!: string;
  envs!: string [];
  finalResult!: any[];
  services!: string[];
  isOnline!: boolean;

  ngOnInit(): void {
    this.isOnline = false;
    this.finalResult = [];
    this.services = ['batch','security','org','curriculum'];
    this.envs = ['app-ms','preview-ms','dev2-ms','dev-ms'];
  }

  getResult() {
    this.isOnline = window.navigator.onLine;
    if(!this.isOnline) {
      alert('Oops! connection lost');
      return;
    }
    console.log(this.env, this.compareToEnv);
    this.finalResult = [];
    this.getServiceInfo(this.env,this.compareToEnv, this.services);
  }

  getServiceInfo(env: string, compareToEnv: string, services: string[]) {
    services.forEach( service => {
    this.hashService.getServiceInfo(env, service).subscribe( res  => {
      let serviceRes: ServiceInfoModel = res;
      this.hashService.getServiceInfo(compareToEnv, service).subscribe( compareToRes => {
        let compareToServiceRes: ServiceInfoModel = compareToRes;
        if(serviceRes.gitHash === compareToServiceRes.gitHash) {
          this.finalResult.push(
            {
              'serviceName': service,
              'isMatched': true
            }
          );
          console.log(this.finalResult);
        } else {
          this.finalResult.push(
            {
              'serviceName': service,
              'isMatched': false
            }
          );
          console.log(this.finalResult);
        }
      }, err => {
        console.log("something went wrong!");
      });
    });
  });
  }

}
