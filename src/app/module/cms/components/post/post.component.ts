import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BaseComponent } from 'src/app/module/shared/model/base.component.model';
import { BasePageOutputModel } from 'src/app/module/shared/model/base.model';
import { PostOutputModel } from 'src/app/module/shared/model/post.model';
import { PostService } from 'src/app/module/shared/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent extends BaseComponent implements OnInit {

  data!: BasePageOutputModel<PostOutputModel>;

  constructor(
    private confirmationService:ConfirmationService,
    private messageService:MessageService,
    private postService:PostService,
    ) {
    super();
  }

  ngOnInit() {
    this.postService.getList({}).subscribe(res => {
      this.data = res;
    })
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
