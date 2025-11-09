import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private cvPath = 'assets/Md.Ibrahim_Sumon_Resume.pdf';

  constructor(private http: HttpClient) {}

  downloadCv() {
    this.http.get(this.cvPath, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Md_Ibrahim_Sumon_CV.pdf';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Failed to download CV:', err);
        alert('Unable to download CV. Please try again later.');
      }
    });
  }
}
