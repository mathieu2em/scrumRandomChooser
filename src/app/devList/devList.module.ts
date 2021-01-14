import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './devList-routing.module';

import { DevListComponent } from './devList.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DevListComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
