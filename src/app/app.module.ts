import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {HttpClientModule} from '@angular/common/http';
import { NameFormatterPipe } from './name-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    CoursesComponent,
    CourseComponent,
    ParentComponent,
    ChildComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    NotFoundComponent,
    RegisterComponent,
    UsersComponent,
    UserDetailsComponent,
    NameFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:CoursesComponent
      },
      {
        path:'parent',
        component:ParentComponent
      },
      {
        path:'one',
        component:OneComponent
      },
      {
        path:'users',
        component:UsersComponent
      },
      {
        path:'users/:id',
        component:UserDetailsComponent
      },
      {
        path:'two',
        component:TwoComponent
      },
      {
        path:'three',
        component:ThreeComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
