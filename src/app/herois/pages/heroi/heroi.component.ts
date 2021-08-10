import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styles: [
  ]
})
export class HeroiComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params
       .subscribe( ({ id }) =>  console.log( id ) );

  }

}
