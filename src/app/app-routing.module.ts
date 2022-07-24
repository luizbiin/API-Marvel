import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './page/login/login.component' 
import { HomeComponent } from './page/home/home.component'
import { InfosComponent } from './page/infos/infos.component'
import { FavoriteComponent } from './page/favorite/favorite.component'


const routes: Routes = [
	{path: '', component: LoginComponent },
	{path: 'home', component: HomeComponent },
	{path: 'infos', component: InfosComponent },
	{ path: 'infos/:id', component: InfosComponent },
	{path: 'favorite', component: FavoriteComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}