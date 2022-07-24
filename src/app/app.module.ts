import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { BackButtonComponent } from './component/back-button/back-button.component';
import { CardsComponent } from './component/cards/cards.component';
import { FavoriteHeartComponent } from './component/favorite-heart/favorite-heart.component';
import { FilterComponent } from './component/filter/filter.component';
import { FavoriteComponent } from './page/favorite/favorite.component';
import { HomeComponent } from './page/home/home.component';
import { InfosComponent } from './page/infos/infos.component';
import { LoginComponent } from './page/login/login.component';
import { LoaderComponent } from './component/loader/loader.component';
import { DropDownComponent } from './component/drop-down/drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    CardsComponent,
    FavoriteHeartComponent,
    FilterComponent,
    FavoriteComponent,
    HomeComponent,
    InfosComponent,
    LoginComponent,
    LoaderComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
