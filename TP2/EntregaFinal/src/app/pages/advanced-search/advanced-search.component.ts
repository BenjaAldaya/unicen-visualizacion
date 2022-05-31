import { Component, OnInit } from '@angular/core';
import { Juegos } from 'src/app/games-array';
import { Categorias } from '../../category-array';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  juegos = Juegos;  
  constructor() { }

  categorias = Categorias; 

  ngOnInit(): void {
    document.getElementById('category')?.addEventListener('click', event => {
      if(document.getElementById('category2')?.classList.contains('none')){
        document.getElementById('category2')?.classList.remove('none');
        document.getElementById('category2')?.classList.add('more-category');
      }else{
        document.getElementById('category2')?.classList.remove('more-category');
        document.getElementById('category2')?.classList.add('none');
      }
    })
  }

}
