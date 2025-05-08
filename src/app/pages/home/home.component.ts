import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from './../../services/search.service';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { DataTransferService } from './../../services/data-transfer.service'; // Novo serviço

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imageUrl: any;
  results: any;
  selectedFile: File | null = null;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
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

      // Armazena o formData no serviço
      this.dataTransferService.setFormData(formData);

      localStorage.setItem('formData', JSON.stringify(formData));

      // Navega para a rota de resultados
      this.router.navigate(['/resultados']);
    }
  }
}
