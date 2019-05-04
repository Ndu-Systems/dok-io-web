import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VERIFICATIONLINK } from '../shared';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: `${VERIFICATIONLINK}/:id`, component: VerifyEmailComponent },

];
export const declarations:Array<any> =[HomeComponent , LoginComponent,SignUpComponent, VerifyEmailComponent]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
