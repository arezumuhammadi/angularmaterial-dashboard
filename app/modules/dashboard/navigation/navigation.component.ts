import { Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  navLinks: Array<any> = [
    {icon: 'dashboard', path: '/dashboard/dashboard', label: 'Dashboard'},
    {icon: 'home', path: '/dashboard/table', label: 'Table'},
    {icon: 'event', path: '/dashboard/drag', label: 'Drag Drop'},
    {icon: 'address', path: '/dashboard/address', label: 'Address'},
  ]


}
