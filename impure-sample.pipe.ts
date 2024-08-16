import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureSample',
  standalone: true,
})
export class ImpureSamplePipe implements PipeTransform {
  transform(users: any[], searchTerm: string) {
    //impure pipe example which is also act as a small data search
    if (!users || !searchTerm) {
      return users;
    } else {
      return users.filter((user) =>
        user.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
