import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutMoudle } from '../../common/layout/layout.module';
import { SliderModule } from '../../common/slider/slider.module';
import { MainPageComponent } from './component/main.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    LayoutMoudle,
    SliderModule,
    RouterModule.forChild([{ path: '', component: MainPageComponent }]),
  ],
})
export class MainPageModule {}
