import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetverificationComponent } from './forgetverification.component';

const routes: Routes = [{ path: '', component: ForgetverificationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetverificationRoutingModule { }
