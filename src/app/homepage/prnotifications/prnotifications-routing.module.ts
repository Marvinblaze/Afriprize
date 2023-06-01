import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrnotificationsComponent } from './prnotifications.component';

const routes: Routes = [{ path: '', component: PrnotificationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrnotificationsRoutingModule { }
