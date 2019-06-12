import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyCommonModule } from './my-common/my-common.module';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { appRoutes } from './routes';
import { MyReuseStrategy } from 'src/app/reuseStrategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyCommonModule,
    RouterModule.forRoot(
      appRoutes,
      { 
        enableTracing: false , 
        scrollPositionRestoration: 'enabled'
      } // <-- debugging purposes only
    ),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: MyReuseStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
