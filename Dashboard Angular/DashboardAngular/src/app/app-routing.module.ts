import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageConnexionComponent } from './Pages/page-connexion/page-connexion.component';
import { PageDashBoardComponent } from './Pages/page-dash-board/page-dash-board.component';

const routes: Routes = [
  { path: 'Connexion', component: PageConnexionComponent },
  { path: 'DashBoard', component: PageDashBoardComponent },
  { path: '**', component: PageConnexionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
