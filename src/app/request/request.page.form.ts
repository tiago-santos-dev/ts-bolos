import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export class RequestPageForm {

  constructor(private formBuilder: FormBuilder) {}

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

}
