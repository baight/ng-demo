import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyQueen, Queen, setGlobalQueen } from './queen';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { BaightCommon } from 'npm-pod/baight-ng/baight-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'duck';
  @ViewChild("alertContainer", { read: ViewContainerRef })
  rootContainer: ViewContainerRef;

  // 判断是正在重定向，以防死循环
  private isRedirecting = false
  constructor(private httpClient: HttpClient, private resolver: ComponentFactoryResolver, public router: Router){ }

  private subscription: Subscription
  ngOnInit(){
    let queen = new MyQueen(this.httpClient, this.router, this.rootContainer, this.resolver)
    queen.request.createHttpOptions = ()=>{
      let token = Queen.getToken()
      if (token) {
        return {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'token': token
          })
        };
      }
      else {
        return {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
      }
    }
    queen.request.createNg2FileUploader = ()=>{
      return new FileUploader({    
        url: BaightCommon.joinPath(Queen.request.baseUrl, "/api/contractFile/upload"),  
        method: "POST",    
        itemAlias: "uploadedfile",
        autoUpload: false,
        headers: [{name:"token", value:Queen.getToken()}
      ]
      });
    }
    queen.request.baseUrl = "http://contract.hndcit.com:9097"
    setGlobalQueen(queen)

    // 监听url变化
    Queen.router.events.subscribe(event => {
      if(event instanceof NavigationStart && !this.isRedirecting) {
        this.isRedirecting = true
      }
      else if(event instanceof NavigationEnd) {
        this.updateTabButton()
        this.isRedirecting = false
      }
    });

    this.subscription = Queen.broadcast$.subscribe(mission=>{
      if (mission == 'login') {
        this.updateTabButton()
      }
    })

    if (Queen.isDebug) {
      console.log(Queen.getLoginUser())
      console.log(Queen.getToken())
    }
    this.updateTabButton()

    // 检测token 是否过期
    if (Queen.getToken()) {
    }
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  updateTabButton() {
  }
}
