import { Component, EventEmitter, Output } from '@angular/core';
import { UploadfileService } from '../../service/UploadFileService/uploadfile.service';
import { File } from '../../../Model/File';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrl: './uploadfile.component.css'
})
export class UploadfileComponent {
  file: File | undefined;

  constructor(private uploadFileService: UploadfileService) { }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  createNewFile() {
    if (this.file) {
      const formData = new FormData();
      formData.append('file', this.file.name);

      this.uploadFileService.uploadFile(formData).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error('Erreur createNewFile', error);
          if (error instanceof HttpErrorResponse) {
            console.log('Réponse d\'erreur:', error.error);
          }
        }
      });
    }
  }

}

