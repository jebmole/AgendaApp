import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: AppComponent},
  { path:'todo', component: TodoComponent},
  { path:'**', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
