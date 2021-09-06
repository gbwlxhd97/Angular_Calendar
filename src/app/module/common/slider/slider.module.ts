import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderItemComponent } from './component/slider-item/slider-item.component';
import { SliderComponent } from './component/slider/slider.component';

@NgModule({
  declarations: [SliderItemComponent, SliderComponent],
  imports: [CommonModule],
  exports: [SliderItemComponent, SliderComponent],
})
export class SliderModule {}
