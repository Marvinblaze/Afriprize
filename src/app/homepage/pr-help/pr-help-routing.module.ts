import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrHelpComponent } from './pr-help.component';

const routes: Routes = [{ path: '', component: PrHelpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrHelpRoutingModule { }
