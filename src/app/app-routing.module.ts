import { DevListComponent } from './devList/devList.component';
import { RandomChooserComponent } from './random-chooser/random-chooser.component'; 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', component: RandomChooserComponent },
    { path: 'devList', component: DevListComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
