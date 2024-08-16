import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
  standalone: true,
})
export class FilesizePipe implements PipeTransform {
  transform(sizeInBytes: number, decimalPoints: number = 2): string {
    //filesize pipe....
    if (sizeInBytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(sizeInBytes) / Math.log(k));

    const size = parseFloat(
      (sizeInBytes / Math.pow(k, i)).toFixed(decimalPoints)
    );

    return `${size} ${sizes[i]}`;
  }
}
