import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'wordReplace'
})
export class WordReplacePipe implements PipeTransform {
  transform(value: string, replacements: {[key: string]: string}): string {
    if (!value) return '';

    let result = value;
    for (const [oldWord, newWord] of Object.entries(replacements)) {
      const regex = new RegExp('\\b' + oldWord + '\\b', 'gi');
      result = result.replace(regex, newWord);
    }
    return result;
  }
}
