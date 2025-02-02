import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator'

@Pipe({
    name: 'postTitlePipe',
    pure: true,
    standalone: true
})

export class PostTitlePipe implements PipeTransform {

  @memo()
  transform(value: string): string {
    return value.trim() == "" ? "--" : value.replace(/\s/g,'-');
  }
  
}
