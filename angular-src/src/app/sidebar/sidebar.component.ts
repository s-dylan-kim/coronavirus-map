import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HistoryUploadService } from "../location-history-upload/history-upload.service"
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  form: FormGroup;
  progress = 0;

  constructor(
    public fb: FormBuilder,
    public historyUploadService: HistoryUploadService
  ) {
    this.form = this.fb.group({
      history: [null]
    })
  }

  ngOnInit(): void {
  }

  onFileUpload(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      history: file
    });
    this.form.get('history').updateValueAndValidity()
  }

  submitFile() {
    console.log("boo!");
  //   this.historyUploadService.uploadFile(
  //     this.form.value.history
  //   ).subscribe((event: HttpEvent<any>) => {
  //     switch (event.type) {
  //       case HttpEventType.Sent:
  //         console.log('Request has been made!');
  //         break;
  //       case HttpEventType.ResponseHeader:
  //         console.log('Response header has been received!');
  //         break;
  //       case HttpEventType.UploadProgress:
  //         this.progress = Math.round(event.loaded / event.total * 100);
  //         console.log(`Uploaded! ${this.progress}%`);
  //         break;
  //       case HttpEventType.Response:
  //         console.log('User successfully created!', event.body);
  //         setTimeout(() => {
  //           this.progress = 0;
  //         }, 1500);

  //     }
  //   })
  }
}
