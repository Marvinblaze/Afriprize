import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {
  


  logo1 = "../../../../assets/images/1 13.svg";

  constructor(
    private router: Router,
   
  ) {}


ngOnInit(): void {
    
  }

  goto(event: any) {
    this.router.navigate(['homepage']);
  }
}
