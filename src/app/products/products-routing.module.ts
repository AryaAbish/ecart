import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [{ path: '', component: AllproductsComponent },
{path:'add',component:AddComponent},
{path:'edit/:id',component:EditComponent},
{path:'view/:id',component:ViewComponent},
{path:"delete/:id",component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
