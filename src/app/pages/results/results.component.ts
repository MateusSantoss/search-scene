import { DataTransferService } from './../../services/data-transfer.service';
import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-results',
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  constructor(private searchService: SearchService, private route: ActivatedRoute,
    private dataTransferService: DataTransferService) {
      this.dataTransferService = dataTransferService;
     }
  results: any;
  formData: FormData = new FormData(); // Obtém o formData do serviço ou cria um novo vazio
  isLoading: boolean = false; // Variável para controlar o estado de carregamento

  ngAfterViewInit() {
    this.isLoading = true; // Inicia o carregamento
    this.formData = this.dataTransferService.getFormData() || new FormData(); // Obtém o formData do serviço ou cria um novo vazio
    this.searchService.searchAnime(this.formData).subscribe(
      (data) => {
        this.results = data.result;
        console.log(data);
        this.isLoading = false; // Finaliza o carregamento
      },
      (error) => {
        console.error(error);
        this.isLoading = false; // Finaliza o carregamento mesmo em caso de erro
      }
    );
  }

}
