import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftComponent  } from './left/left.component';
import { RightComponent } from './right/right.component';
const routes: Routes = [
  
  { path:"login", component:LeftComponent},
  { path:"reg", component: RightComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
