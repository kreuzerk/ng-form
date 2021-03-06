import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {validatePlayer} from './best-players-validator/best-players-validators';

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.css']
})
export class CustomFormControlComponent implements OnInit {

  cfcReactiveFormGroup: FormGroup;
  bestPlayer;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.cfcReactiveFormGroup = this.fb.group({
      playerInput: new FormControl('', validatePlayer)
    });
  }

}
