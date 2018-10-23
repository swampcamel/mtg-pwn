import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CardListComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
