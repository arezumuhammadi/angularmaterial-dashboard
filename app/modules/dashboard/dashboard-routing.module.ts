import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './navigation/components/address/address.component';
import { DashboardComponent } from './navigation/components/dashboard/dashboard.component';
import { DragdropComponent } from './navigation/components/dragdrop/dragdrop.component';
import { TableComponent } from './navigation/components/table/table.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
     
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'drag',
        component: DragdropComponent
      },
      {
        path: 'address',
        component: AddressComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
