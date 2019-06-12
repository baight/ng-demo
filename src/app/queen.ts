import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router} from '@angular/router';
import { UserInfo } from './model/user-info';
import { BaightComponentQueen } from 'npm-pod/baight-ng-component/baight-component-queen';
import { HttpClient } from '@angular/common/http';

export class MyQueen extends BaightComponentQueen {
    constructor(httpClient: HttpClient, public router: Router, container: ViewContainerRef, resolver: ComponentFactoryResolver) {
        super(httpClient, router, container, resolver)
    }

    getLoginUser(): UserInfo {
        return <UserInfo>super.getLoginUser()
    }
    getCacheUesr() : UserInfo{
        return <UserInfo>super.getCacheUesr()
    }
    stringToUserInfo(str:string){
        let obj = JSON.parse(str);
        let userInfo : UserInfo = new UserInfo()
        userInfo.fromObject(obj);
        return userInfo
    }
}

export let Queen : MyQueen

export function setGlobalQueen(queen:MyQueen){
    Queen = queen
}
