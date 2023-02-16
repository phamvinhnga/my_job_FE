import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { FormsModule } from '@angular/forms';
import { AppLayoutModule } from './layout/app.layout.module';
import { PostComponent } from './components/post/post.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SliderComponent } from './components/slider/slider.component';
import { ManagerAboutUsComponent } from './components/about-us/about-us.component';
import { ManagerMenuComponent } from './components/menu/menu.component';
import { ManagerFooterComponent } from './components/footer/footer.component';
import { ManagerHeaderComponent } from './components/header/header.component';
import { LocaltionComponent } from './components/localtion/localtion.component';
import { ShopComponent } from './components/shop/shop.component';
import { AccountComponent } from './components/account/account.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [
    CmsComponent,
    PostComponent,
    SliderComponent,
    ManagerAboutUsComponent,
    ManagerMenuComponent,
    ManagerFooterComponent,
    ManagerHeaderComponent,
    LocaltionComponent,
    ShopComponent,
    AccountComponent,
    AccountInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    CmsRoutingModule,
    DialogModule,
    ConfirmDialogModule,
    AppLayoutModule,
    EditorModule
  ],
  exports:[
  ],
  providers:[
    ConfirmationService,
    MessageService
  ]
})
export class CmsModule { }
