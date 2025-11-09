import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  private cvPath = 'assets/Md.Ibrahim_Sumon_Resume.pdf';

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Validate form fields
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // Since this is a client-side only application, we'll use mailto as a fallback
    // The user can replace this with actual backend implementation later
    //const mailtoLink = this.createMailtoLink();
    
    try {
      // Open default email client with pre-filled information
      //window.location.href = mailtoLink;
      
      // Show success message
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        
        // Reset form
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 500);
    } catch (error) {
      this.isSubmitting = false;
      this.submitError = true;
      console.error('Error sending message:', error);
    }
  }

  private validateForm(): boolean {
    // Validate name
    if (!this.formData.name || this.formData.name.trim().length < 2) {
      alert('Please enter a valid name (at least 2 characters)');
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.formData.email || !emailRegex.test(this.formData.email)) {
      alert('Please enter a valid email address');
      return false;
    }

    // Validate subject
    if (!this.formData.subject || this.formData.subject.trim().length < 3) {
      alert('Please enter a valid subject (at least 3 characters)');
      return false;
    }

    // Validate message
    if (!this.formData.message || this.formData.message.trim().length < 10) {
      alert('Please enter a valid message (at least 10 characters)');
      return false;
    }

    return true;
  }

  private createMailtoLink(): string {
    const to = 'ibrahimsumon03@gmail.com';
    const subject = encodeURIComponent(`Portfolio Contact: ${this.formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\n` +
      `Email: ${this.formData.email}\n\n` +
      `Message:\n${this.formData.message}`
    );
    
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }

  downloadCv() {
    this.http.get(this.cvPath, { responseType: 'blob' }).subscribe({
      next: (blob: Blob) => {
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
      error: (err: unknown) => {
        console.error('Failed to download CV:', err);
        alert('Unable to download CV. Please try again later.');
      }
    });
  }
}
