import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { FormsModule } from '@angular/forms';
import { AppLayoutModule } from './layout/app.layout.module';

@NgModule({
  declarations: [
    CmsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CmsRoutingModule,
    AppLayoutModule,
  ],
  exports:[
  ]
})
export class CmsModule { }
