import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategorysService } from '../categorys.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }

  
}
