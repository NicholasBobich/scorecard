import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { AddComponent } from './components/add/add.component';
import { HistoryComponent } from './components/history/history.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'play', component: PlayComponent },
    { path: 'add', component: AddComponent },
    { path: 'history', component: HistoryComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }    // TODO: Create page not found component
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {  }
