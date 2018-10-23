import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { AddCardComponent } from './add-card/add-card.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CardListComponent
  },
  {
    path: 'add-card',
    component: AddCardComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
