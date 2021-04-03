import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent, NavBarComponent } from './components';
import {
  MainLayoutComponent
} from './containers';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';



const COMPONENTS = [
  NavBarComponent,
  FooterComponent,
];

const CONTAINERS = [
  MainLayoutComponent
];


@NgModule({
  declarations: [COMPONENTS, CONTAINERS, SearchBarComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [COMPONENTS, CONTAINERS],
})
export class CoreModule { }
