import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'limit'
})

export class LimiteComponent implements PipeTransform{
  transform(input: any[], limit: number): any[] {
      return input.slice(0, limit);
  }
}
