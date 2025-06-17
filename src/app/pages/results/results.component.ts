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
  formData: FormData = new FormData();
  isLoading: boolean = false;

  ngAfterViewInit() {
    this.isLoading = true;
    this.formData = this.dataTransferService.getFormData() || new FormData();
    this.searchService.searchAnime(this.formData).subscribe(
      (data) => {
        this.results = data.result;
        console.log(data);
        this.isLoading = false;
      },
      (error: any) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

}
