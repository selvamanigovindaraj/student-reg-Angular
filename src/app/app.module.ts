import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router'
 
import { AppComponent } from './app.component';
import { StudentRegisterComponent } from './student-register.component';


const routes :Routes=[
  { path:'register',component:StudentRegisterComponent },
  {path :'',redirectTo:'/register', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
