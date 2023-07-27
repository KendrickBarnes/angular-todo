import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { LeftpanelComponent } from './components/leftpanel/leftpanel.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FaTimesComponent } from './components/fa-times/fa-times.component';
import { FaPencilComponent } from './components/fa-pencil/fa-pencil.component';
import { FaCheckComponent } from './components/fa-check/fa-check.component';
import { FaPlusComponent } from './components/fa-plus/fa-plus.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { ButtonComponent } from './components/button/button.component';
import { HowtoComponent } from './page/howto/howto.component';

const appRoutes: Routes = [
  {path: '', component: HowtoComponent},
  {path: 'todo', component: TodoComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LeftpanelComponent,
    FooterComponent,
    TodoComponent,
    TodoItemComponent,
    FaTimesComponent,
    FaPencilComponent,
    FaCheckComponent,    
    FaPlusComponent, 
    AddtodoComponent, 
    ButtonComponent, HowtoComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
