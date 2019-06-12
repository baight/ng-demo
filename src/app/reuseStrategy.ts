import { ActivatedRouteSnapshot} from '@angular/router';
import { BaightRouteReuseStrategy } from 'npm-pod/baight-ng/BaightRouteReuseStrategy';

export class MyReuseStrategy extends BaightRouteReuseStrategy {
    shouldCache(route: ActivatedRouteSnapshot, path:string, pathComponents:string[]):boolean{
        return pathComponents.length == 1
    }
    static deleteHomeCache(){
        delete MyReuseStrategy.cacheRouterMap["/home"]
    }
}