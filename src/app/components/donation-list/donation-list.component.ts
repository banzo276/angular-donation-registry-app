import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/services/donation.service';
import { Donation } from '../../common/donation';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

  donations: Donation[] = [];

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.getDonations();
  }

  getDonations(): void {
    this.donationService.getDonations().subscribe(
      donations => this.donations = donations
    );
  }

}
