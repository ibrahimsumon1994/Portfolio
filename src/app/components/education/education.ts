import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

interface Certification {
  title: string;
  organization: string;
  issueDate: string;
  credentialId: string;
  certificateUrl: string;
  logo: string;
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education implements OnInit {
  certifications: Certification[] = [
    {
      title: 'C# (Basic)',
      organization: 'HackerRank',
      issueDate: 'Feb 2022',
      credentialId: '47BCA5AB934A',
      certificateUrl: 'https://www.hackerrank.com/certificates/47bca5ab934a',
      logo: 'hackerrank'
    },
    {
      title: 'Getting Started with Azure DevOps Boards',
      organization: 'Coursera',
      issueDate: 'Feb 2022',
      credentialId: 'YDFPMYT48E6D',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/YDFPMYT48E6D',
      logo: 'coursera'
    },
    {
      title: 'SQL (Basic)',
      organization: 'HackerRank',
      issueDate: 'Feb 2022',
      credentialId: 'ADC06CD649CF',
      certificateUrl: 'https://www.hackerrank.com/certificates/adc06cd649cf',
      logo: 'hackerrank'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    // Listen for fragment changes to scroll to certifications section
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment === 'certifications') {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor('certifications');
        }, 100);
      }
    });
  }
}
