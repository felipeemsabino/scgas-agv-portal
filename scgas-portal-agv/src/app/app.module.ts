import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';


const appRoutes: Routes = [{
      path: 'home',
      children: [
        /*{ path: 'postos', component: PostosComponent },
        { path: 'postos', component: PostosComponent },
        { path: 'noticias', component: NoticiasComponent },
        { path: 'usuarios', component: UsuariosComponent },
        { path: 'parametros-gerais', component: ParametrosGeraisComponent },
        { path: 'temp2', component: TempComponent2 },*/
      ],
      component: HomeComponent
    },
  {
    path:'', component: LoginComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
