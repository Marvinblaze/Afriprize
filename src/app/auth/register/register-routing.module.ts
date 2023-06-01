import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Routes = [{ path: '', component: RegisterComponent }, { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }, { path: 'password', loadChildren: () => import('./password/password.module').then(m => m.PasswordModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
