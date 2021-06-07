import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AutomobileComponent } from './automobile/automobile.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
  {path: 'adminEvent', component: AdminProductsComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'driver', component: DriverComponent},
  {path: 'adminEvent', component: AutomobileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
