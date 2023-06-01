import { NgModule } from '@angular/core';
import { RouterModule, RouterLinkActive, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [{ path: '', component: ProfileComponent, children:[
] },
{
  path: 'orders',
  loadChildren: () =>
    import('./orders/orders.module').then((m) => m.OrdersModule),
},
{ path: 'Cpassword', loadChildren: () => import('./cpassword/cpassword.module').then(m => m.CpasswordModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
