import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule],
  templateUrl: './quotes.html',
  styleUrl: './quotes.scss',
})
export class Quotes {

constructor(private router: Router) {}

  goToProposal(plan: any) {
    this.router.navigate(['supertopup/proposal-form']);
  }

slides = [
    {
      imgSrc: 'assets/quote/slide_img1.png',
      title: 'High CSR = higher peace of mind',
      text: 'A higher Claim Settlement Ratio (ideally 95%+) means more claims get paid.'
    },
    {
      imgSrc: 'assets/quote/slide_img2.png',
      title: 'Fast Claim Processing',
      text: 'Get your claims settled quickly with our efficient service.'
    },
    {
      imgSrc: 'assets/quote/slide_img3.png',
      title: 'Expert Guidance',
      text: 'Our experts will help you choose the best insurance plan.'
    }
  ];

  plans = [
    {
      logo: 'assets/quote/national.png',
      name: 'Super Top Up Mediclaim',
      features: [
        'In-patient Treatment',
        'Organ Donor’s Medical Expenses',
        'Day Care Procedure'
      ],
      cover: '₹15 Lakhs',
      deductible: '₹3 Lakhs',
      price: '₹2,122/Year',
      tag: 'AYUSH Treatment'
    },

    {
      logo: 'assets/quotes/reliance.svg',
      name: 'Health Super Top Up',
      features: [
        'All day care treatments',
        'Upto Single private AC room',
        'AYUSH Treatment'
      ],
      cover: '₹15 Lakhs',
      deductible: '₹3 Lakhs',
      price: '₹2,912/Year',
      tag: 'Covers Maternity Benefits'
    },

    {
      logo: 'assets/quotes/icici.svg',
      name: 'Health Booster',
      features: [
        'In-patient treatment',
        'Day care procedures',
        'Donor expenses'
      ],
      cover: '₹15 Lakhs',
      deductible: '₹3 Lakhs',
      price: '₹2,833/Year',
      tag: 'Covers Maternity Benefits'
    },
      {
      logo: 'assets/quotes/icici.svg',
      name: 'Health Booster',
      features: [
        'In-patient treatment',
        'Day care procedures',
        'Donor expenses'
      ],
      cover: '₹15 Lakhs',
      deductible: '₹3 Lakhs',
      price: '₹2,833/Year',
      tag: 'Covers Maternity Benefits'
    },
      {
      logo: 'assets/quotes/icici.svg',
      name: 'Health Booster',
      features: [
        'In-patient treatment',
        'Day care procedures',
        'Donor expenses'
      ],
      cover: '₹15 Lakhs',
      deductible: '₹3 Lakhs',
      price: '₹2,833/Year',
      tag: 'Covers Maternity Benefits'
    },  {
      logo: 'assets/quotes/icici.svg',
      name: 'Health Booster',
      features: [
        'In-patient treatment',
        'Day care procedures',
        'Donor expenses'
      ],
      cover: '₹15 Lakhs',
      deductible: '₹3 Lakhs',
      price: '₹2,833/Year',
      tag: 'Covers Maternity Benefits'
    }

  ];

}
