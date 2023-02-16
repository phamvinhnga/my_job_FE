import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SummernoteOptions } from 'ngx-summernote/lib/summernote-options';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  config: any = {
    airMode: false,
    tabDisable: true,
    popover: {
      table: [
        ["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]],
        ["delete", ["deleteRow", "deleteCol", "deleteTable"]]
      ],
      image: [
        ["image", ["resizeFull", "resizeHalf", "resizeQuarter", "resizeNone"]],
        ["float", ["floatLeft", "floatRight", "floatNone"]],
        ["remove", ["removeMedia"], ["insert", ["picture"]]]
      ],
      link: [["link", ["linkDialogShow", "unlink"]]],
      air: [
        [
          "font",
          [
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "superscript",
            "subscript",
            "clear"
          ]
        ]
      ]
    },
    height: "200px",
    uploadImagePath: "/api/upload",
    toolbar: [
      ["misc", ["codeview", "undo", "redo", "codeBlock"]],
      [
        "font",
        [
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "superscript",
          "subscript",
          "clear"
        ]
      ],
      ["fontsize", ["fontname", "fontsize", "color"]],
      ["para", ["style0", "ul", "ol", "paragraph", "height"]],
      ["insert", ["table", "picture", "link", "video", "hr"]],
      ["customButtons", ["testBtn"]]
    ],
    codeviewFilter: true,
    codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml|.*onmouseover)[^>]*?>/gi,
    codeviewIframeFilter: true
  };

  customers: any[] = [];

  constructor(
    private http: HttpClient,
    private confirmationService:ConfirmationService,
    private messageService:MessageService
    ) { }

  ngOnInit() {
    for(let i = 0; i < 1; i++){
      this.customers.push({
        name: '22asd asd asd '
      })
    }
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
