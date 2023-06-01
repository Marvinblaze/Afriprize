import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

const routes: Routes = [{ path: '', component: IndexComponent }];

@NgModule({
  imports: [AccordionModule.forRoot(), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
