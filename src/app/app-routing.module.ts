import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UpdatePortfolioComponent} from './portfolio/update-portfolio/update-portfolio.component';
import {PortfolioListComponent} from './portfolio/portfolio-list/portfolio-list.component';
import {HeaderComponent} from './header/header.component';
import {AddPortfolioComponent} from './portfolio/add-portfolio/add-portfolio.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'portfolio-list', component: PortfolioListComponent},
  {path: 'update-portfolio/:id', component: UpdatePortfolioComponent},
  {path: 'add-portfolio', component: AddPortfolioComponent},
  {path: 'home', component: HeaderComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
