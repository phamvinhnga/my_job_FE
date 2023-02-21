import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { SummernoteOptions } from 'ngx-summernote/lib/summernote-options';
import { BaseComponent } from 'src/app/module/shared/model/BaseComponent.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class PostEditComponent extends BaseComponent implements OnInit {

  summernoteOptionsSummery:SummernoteOptions = {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.summernoteOptionsSummery = _.cloneDeep(this.summernoteOptions);
    this.summernoteOptionsSummery.height = 100;
    this.summernoteOptions.height = 500;
  }

}
