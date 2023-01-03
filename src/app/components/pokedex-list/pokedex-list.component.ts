import { Component, Inject } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { LISTADO } from 'src/app/app.module';


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
  constructor(private pokedexService:PokedexService,
    @Inject(LISTADO) public listApp: string
    ){

  }
  ngOnInit(): void {
    this.pokedexService.getAll().subscribe((data:any)=>{
     this.pokedex=data
     console.log(this.pokedex)
    })
   }
}
