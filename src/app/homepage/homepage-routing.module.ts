import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./index/index.module').then((m) => m.IndexModule),
      },
      {
        path: 'index/products',
        loadChildren: () =>
          import('./index/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'index/products/:id',
        loadChildren: () =>
          import(
            './index/products/products-detail/products-detail.module'
          ).then((m) => m.ProductsDetailModule),
      },
      {
        path: 'Draws',
        loadChildren: () =>
          import('./draws/draws.module').then((m) => m.DrawsModule),
      },
      {
        path: 'Draws/closed-ticket',
        loadChildren: () =>
          import('./draws/closed-ticket/closed-ticket.module').then(
            (m) => m.ClosedTicketModule
          ),
      },
      {
        path: 'carts',
        loadChildren: () =>
          import('./carts/carts.module').then((m) => m.CartsModule),
      },
      {
        path: 'carts/checkout',
        loadChildren: () =>
          import('./carts/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
      {
        path: 'carts/checkout/shipping',
        loadChildren: () =>
          import('./carts/checkout/shipping/shipping.module').then(
            (m) => m.ShippingModule
          ),
      },
      {
        path: 'carts/checkout/shipping/payment',
        loadChildren: () =>
          import('./carts/checkout/shipping/payment/payment.module').then(
            (m) => m.PaymentModule
          ),
      },
      {
        path: 'carts/checkout/shipping/payment/success',
        loadChildren: () =>
          import(
            './carts/checkout/shipping/payment/success/success.module'
          ).then((m) => m.SuccessModule),
      },

      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
   
      {
        path: 'notifications',
        loadChildren: () =>
          import('./prnotifications/prnotifications.module').then(
            (m) => m.PrnotificationsModule
          ),
      },
      {
        path: 'Help',
        loadChildren: () =>
          import('./pr-help/pr-help.module').then((m) => m.PrHelpModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
