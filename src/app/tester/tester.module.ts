import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TesterComponent } from './tester.component';

@NgModule({
  declarations: [ TesterComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TesterComponent
      }
    ])
  ]
})
export class TesterModule { }
