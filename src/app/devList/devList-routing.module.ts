import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DevListComponent } from './devList.component';

const routes: Routes = [
  {
    path: 'devList',
    component: DevListComponent
  }
];

// For routing.
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevListRoutingModule {}
