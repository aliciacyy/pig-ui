import { NgModule } from '@angular/core';
import { PiggyUiComponent } from './piggy-ui.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [PiggyUiComponent, ButtonComponent, ToggleButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToggleButtonModule,
  ],
  exports: [PiggyUiComponent, ButtonComponent, ToggleButtonComponent],
})
export class PiggyUiModule {}
