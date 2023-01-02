import { Component } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css'],
  animations: [
    trigger('fadeIn', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(1300)
      ])
    ])
  ]
})
export class PokedexListComponent {

  pokedex:any[]=[]
  constructor(private pokedexService:PokedexService){

  }
  ngOnInit(): void {
    this.pokedexService.getAll().subscribe((data:any)=>{
     this.pokedex=data
     console.log(this.pokedex)
    })
   }
}
