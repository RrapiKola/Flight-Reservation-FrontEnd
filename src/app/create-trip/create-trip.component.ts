import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
 

  trip : Trip = new Trip();
  constructor(private tripService:TripService,private router:Router) { }

  ngOnInit(): void {
  }

  createTrip(){
    this.tripService.createTrip(this.trip).subscribe( data =>{
      console.log(data);
      this.goToTripList();
    },
    error => console.log(error));
  }

  goToTripList(){
    this.router.navigate(['/trip']);
  }
  
  onSubmit(){
    console.log(this.trip);
    this.createTrip();
  }

}
