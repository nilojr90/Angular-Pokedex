import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "detail/:name", component: DetailComponent },
  { path: "", pathMatch: "full", redirectTo: "search" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
