import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public logedUser: string = 'hello';
  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) {

  }

  ngOnInit() {
    // if(sessionStorage.getItem('isLogin')) this.logedUser = sessionStorage.getItem('isLogin');
  }

  public onToggleSidenav = () => {
  }
  public route(navigateto) {
    this.router.navigate([navigateto]);
  }
  public logout() {
    sessionStorage.removeItem('isLogin');
    this.router.navigate(['']);
  }
}
