import { Pipe, PipeTransform } from '@angular/core';

import { Heroi } from '../interfaces/heroi.interface';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {

  transform(heroi: Heroi): string {

    console.log('Processou');
    
    if (!heroi.id && !heroi.alt_img) {
      return 'assets/no-image.png'
    } else if (heroi.alt_img) {
      return heroi.alt_img;
    }

    return `assets/heroes/${ heroi.id }.jpg`;
  }

}
