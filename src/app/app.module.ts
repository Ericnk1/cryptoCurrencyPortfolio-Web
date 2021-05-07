import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdatePortfolioComponent } from './portfolio/update-portfolio/update-portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServiceInterceptor} from './shared/service.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AddPortfolioComponent } from './portfolio/add-portfolio/add-portfolio.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioListComponent,
    UpdatePortfolioComponent,
    HeaderComponent,
    AddPortfolioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSortModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
