import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { SummernoteOptions } from 'ngx-summernote/lib/summernote-options';
import { MessageService } from 'primeng/api';
import { BaseComponent } from 'src/app/module/shared/model/base.component.model';
import { FileModel } from 'src/app/module/shared/model/file.model';
import { PostInputModel, PostOutputModel } from 'src/app/module/shared/model/post.model';
import { PostService } from 'src/app/module/shared/service/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [PostService]
})
export class PostEditComponent extends BaseComponent implements OnInit {

  summernoteOptionsSummery:SummernoteOptions = {};
  displayBasic = false;

  constructor(
    private readonly postService:PostService,
    private readonly router:Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly messageService:MessageService
  ) {
    super();
    this.summernoteOptionsSummery = _.cloneDeep(this.summernoteOptions);
    this.summernoteOptionsSummery.height = 100;
    this.summernoteOptions.height = 500;
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params['id'] || 0);
    this.getById(id);
  }

  get thumbnail() : FileModel | undefined{
    if(!this.form || !this.form.controls['thumbnail'].value){
      return undefined;
    }
    return this.form.controls['thumbnail'].value;
  }

  formValidation(key:string) : boolean{
    if(!this.form || !this.form.controls[key]){
      return false;
    }
    return this.form.controls[key].errors && this.form.controls[key].touched ? true : false;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  save(){
    if(this.form?.invalid){
      return;
    }
    const input = PostOutputModel.fromJS(this.form?.value);
    input.thumbnail = this.listFileImage.length > 0 ? this.listFileImage[0] : undefined;
    const $api = input.id == 0 ? this.postService.create(input) : this.postService.update(input);
    return $api.subscribe(res => {
      this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Xóa bài viết', life: 3000});
      this.router.navigateByUrl('cms/post');
    });
  }

  private getById(id:number){
    if(id != 0){
      this.title = 'Sửa bài viết';
      this.postService.getById(id).subscribe(res => {
        this.buildForm(res);
      })
    }
    else{
      this.title = 'Thêm bài viết';
      this.buildForm();
    }
  }

  private buildForm(data?:PostOutputModel | undefined){
    this.form = new FormGroup({
      id: new FormControl(data ? data.id : 0, Validators.required),
      title: new FormControl(data ? data.title : null, Validators.required),
      content: new FormControl(data ? data.content : null),
    });
    if(data?.thumbnail){
      this.listFileImage.push(data.thumbnail);
    }
  }
}
