import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimcaComponent } from './views/simca/simca.component';

const routes: Routes = [
  {path:'', redirectTo:'views/simca', pathMatch: 'full'},
  {path:'views/simca', component: SimcaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
