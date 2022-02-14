import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CardComponent } from './shared/card/card.component';
import { ProductsComponent } from './components/products/products.component';
import { BannersComponent } from './components/banners/banners.component';
import { FooterComponentComponent } from './shared/footer-component/footer-component.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavBarComponent,
    HeaderComponentComponent,
    HomeComponent,
    CategoriesComponent,
    CardComponent,
    ProductsComponent,
    BannersComponent,
    FooterComponentComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
