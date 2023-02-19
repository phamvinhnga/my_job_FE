import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SummernoteOptions } from 'ngx-summernote/lib/summernote-options';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BaseComponent } from 'src/app/module/shared/model/BaseComponent.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent extends BaseComponent implements OnInit {

  content = "null";
  customers: any[] = [];

  constructor(
    private http: HttpClient,
    private confirmationService:ConfirmationService,
    private messageService:MessageService
    ) {
    super();
  }

  ngOnInit() {
  }

  deleteProduct(product: any) {
    this.confirmationService.confirm({
        message: 'Bạn có chắc chắn xóa bài viết ' + product.name + '?',
        header: 'Xóa bài viết',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        }
  });
}

}
