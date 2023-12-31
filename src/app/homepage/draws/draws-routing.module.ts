import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawsComponent } from './draws.component';

const routes: Routes = [{ path: '', component: DrawsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawsRoutingModule { }
