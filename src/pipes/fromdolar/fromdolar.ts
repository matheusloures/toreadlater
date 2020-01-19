import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FromdolarPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'fromdolar',
})
export class FromdolarPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    var v = parseFloat(value)
    return v*4;
  }
}
