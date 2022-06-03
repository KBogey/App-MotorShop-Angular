import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexStarsComponent } from './components/index-stars/index-stars.component';
import { MotoDetailComponent } from './components/moto-detail/moto-detail.component';
import { MotoListComponent } from './components/moto-list/moto-list.component';
import { MotoMarqueComponent } from './components/moto-marque/moto-marque.component';
import { MotoTypeComponent } from './components/moto-type/moto-type.component';

const routes: Routes = [
  {path: '', component: IndexStarsComponent },
  {path: 'list', component: MotoListComponent},
  {path: 'marque', component: MotoMarqueComponent},
  {path: 'type', component: MotoTypeComponent},
  {path: ':id', component: MotoDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
