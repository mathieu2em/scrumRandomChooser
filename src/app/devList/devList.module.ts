import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevListRoutingModule } from './devList-routing.module';

import { DevListComponent } from './devList.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DevListComponent],
  imports: [CommonModule, SharedModule, DevListRoutingModule]
})
export class DevListModule {}
