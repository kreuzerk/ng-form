import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersChooserComponent } from './players-chooser.component';
import { PlayersSelectorComponent } from './players-selector/players-selector.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [PlayersChooserComponent, PlayersSelectorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PlayersChooserComponent}
    ]),
    ReactiveFormsModule
  ]
})
export class PlayersChooserModule { }
