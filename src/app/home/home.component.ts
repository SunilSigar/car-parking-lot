import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  N;
  M;
  availableCarDetails = [];
  availableSlots = new Array<any>(this.N);
  carColors = ['Black', 'White', 'Blue', 'Red'];
  newCarNumber;
  newCarColor;

  constructor() { }

  ngOnInit() {
  }
  addParkingDetails() {
    // this.availableSlots = new Array<any>(this.N);
    // console.log(this.availableSlots);
    // this.availableSlots.fill('A');
    // console.log(this.availableSlots);
    for(let i=0;i<this.N; i++){
      this.availableSlots[i] = 'A';
    }
    let MValue = this.M;
    while (MValue > 0) {
      const carNum = Math.floor(Math.random() * 1000) + 1000;
      const colorCode = Math.floor(Math.random() * 4);
      const slotnumber = this.M - MValue;
      this.availableCarDetails.push(
        { 'regno': 'KA-01-TY-' + carNum, 'color': this.carColors[colorCode], 'slotno': slotnumber + 1 });
      this.availableSlots[slotnumber] = 'N';
      MValue--;
    }
    console.log(this.availableSlots);
  }
  addIncomingCarDetails() {
    const slotno = this.availableSlots.indexOf('A') + 1;
    this.availableCarDetails.push(
      { 'regno': this.newCarNumber, 'color': this.newCarColor, 'slotno': slotno });
    this.availableSlots[slotno - 1] = 'N';
  }
  removeCar(index, slotno) {
    console.log(index);
    this.availableCarDetails.splice(index, 1);
    this.availableSlots[slotno - 1] = 'A';
  }

}
