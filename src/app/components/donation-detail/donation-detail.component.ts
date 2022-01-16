import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonationService } from 'src/app/services/donation.service';
import { Donation } from '../../common/donation';
import { Location } from '@angular/common';

@Component({
  selector: 'app-donation-detail',
  templateUrl: './donation-detail.component.html',
  styleUrls: ['./donation-detail.component.css']
})
export class DonationDetailComponent implements OnInit {

  donation: Donation = new Donation();

  constructor(private donationService: DonationService,
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getDonationById();
  }

  getDonationById(): void {
    const donationId = this.route.snapshot.paramMap.get('id')!;

    this.donationService.getDonationById(donationId).subscribe(
      donation => this.donation = donation
    );
  }

  goBack(): void {
    this.location.back();
  }
}
