import { Pipe, PipeTransform } from '@angular/core';

import { Heroi } from '../interfaces/heroi.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(heroi: Heroi ): string {
    return `assets/heroes/${ heroi.id }.jpg`;
  }

}
