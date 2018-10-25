import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JsonResp } from 'src/app/json-resp.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  save(): void {
     this.usersvc.change(this.user)
      .subscribe(jsonresp => {
        console.log(jsonresp);
        if (jsonresp.rc === 200) {
            this.router.navigateByUrl('/users/list');
        }
      });
  }

  constructor(private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
      .subscribe(jsonresp => {
        console.log(jsonresp);
        this.user = jsonresp.data;
      });
  }

}
