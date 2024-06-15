import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe',
  standalone: true
})
export class StatusPipePipe implements PipeTransform {
  transform(status: any, ...args: unknown[]): any {
    return status == '0' ? "PENDING" : status == '1' ? "IN PROGRESS" : "COMPLETED";
  }
}
