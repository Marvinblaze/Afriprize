import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword.component';

const routes: Routes = [
  { path: '', component: ForgetpasswordComponent },
  {
    path: 'forgetverification',
    loadChildren: () =>
      import('./forgetverification/forgetverification.module').then(
        (m) => m.ForgetverificationModule
      ),
  },
  { path: 'newpassword', loadChildren: () => import('./newpassword/newpassword.module').then(m => m.NewpasswordModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetpasswordRoutingModule {}
