import { ActivatedRoute } from '@angular/router';
import { SearchService } from './../../services/search.service';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }



  search(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      this.searchService.searchAnime(formData).subscribe(
        (data) => {
          this.results = data;
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
    }

  }


}
