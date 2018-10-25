import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../users/user.class';
@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  transform(users: User[], property?: string): User[] {
    let sortProperty = 'Id';
    if (property != null) {
      sortProperty = property;
    }
    console.log('Sort users by: ', sortProperty);
    return users.sort(compareFn);

    function compareFn(a: User, b: User) {
      let x = a[sortProperty];
      let y = b[sortProperty];
      if (!isNumber(a[sortProperty])) {
        x = a[sortProperty].toUpperCase();
        y = b[sortProperty].toUpperCase();
      }
      if (x === y) {
        return 0;
      }
      return (x > y) ? 1 : -1;
    }

    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  }

}
