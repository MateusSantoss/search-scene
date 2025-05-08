import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private formData: FormData | null = null;

  setFormData(data: FormData): void {
    this.formData = data;
  }

  getFormData(): FormData | null {
    const data = this.formData;
    this.formData = null;
    return data;
  }
}
