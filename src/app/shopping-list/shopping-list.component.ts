import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingedients: Ingridient[] = [
    new Ingridient('Apples', 6),
    new Ingridient('Tomatoes', 3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
