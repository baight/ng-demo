import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaightComponentModule } from 'npm-pod/baight-ng-component/baight-component.module';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    BaightComponentModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    BaightComponentModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  declarations: []
})
export class MyCommonModule { }
