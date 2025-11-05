import { DataTransferService } from './../../services/data-transfer.service';
import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-results',
  imports: [NgIf, NgFor, CommonModule, RouterLink],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  constructor(private searchService: SearchService, private route: Router,
    private dataTransferService: DataTransferService) {
      this.dataTransferService = dataTransferService;
     }
  results: any;
  formData: FormData = new FormData();
  isLoading: boolean = false;
  isVideoShow: boolean  = false;

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

  playVideo(filename: string) {
  const video = document.getElementById('video-' + filename) as HTMLVideoElement;
  if (video) {
    video.play();
  }
}

pauseVideo(filename: string) {
  const video = document.getElementById('video-' + filename) as HTMLVideoElement;
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}


}
