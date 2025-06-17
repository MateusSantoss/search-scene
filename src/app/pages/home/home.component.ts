import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { DataTransferService } from './../../services/data-transfer.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imageUrl: any;
  results: any;
  selectedFile: File | null = null;

  constructor(

    private router: Router,
    private dataTransferService: DataTransferService // Injeta o serviço
  ) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  search(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);


      this.dataTransferService.setFormData(formData);

      localStorage.setItem('formData', JSON.stringify(formData));


      this.router.navigate(['/resultados']);
    }
  }
}
