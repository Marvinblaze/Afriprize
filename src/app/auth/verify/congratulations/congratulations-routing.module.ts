import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongratulationsComponent } from './congratulations.component';

const routes: Routes = [{ path: '', component: CongratulationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongratulationsRoutingModule { }
