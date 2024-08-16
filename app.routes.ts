import { Routes } from '@angular/router';
import { SignalComponent } from './signal/signal.component';
import { AppComponent } from './app.component';
import { StructuralComponent } from './structural/structural.component';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { ImpurePipeComponent } from './impure-pipe/impure-pipe.component';
import { FormsComponent } from './component/forms/forms.component';
import { UserListComponent } from './features/user/user-list/user-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signals', component: SignalComponent },
  { path: 'str', component: StructuralComponent },
  { path: 'pipe', component: PipesComponent },
  { path: 'cpipe', component: CustomPipeComponent },
  { path: 'impurepipe', component: ImpurePipeComponent },
  { path: 'form', component: FormsComponent },
  { path: 'user', component: UserListComponent },
];
