import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-rayon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-rayon.component.html',
  styleUrl: './add-rayon.component.css'
})
export class AddRayonComponent implements OnInit , OnDestroy{

  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }



}
