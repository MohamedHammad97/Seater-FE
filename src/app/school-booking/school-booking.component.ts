import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';
import { passwordMatch } from '../validators/passwordMatch';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-school-booking',
  templateUrl: './school-booking.component.html',
  styleUrls: ['./school-booking.component.css']
})
export class SchoolBookingComponent {
   isLoading: boolean = false
    apiError: string = ''
  isNotValidForm: boolean = false
  
 
  constructor(private _authService: AuthService, private _router: Router, private _toastrService: ToastrService) {
      
    }
  
    registerDetailsForm: FormGroup = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(8)]), 
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]), 
      phone2: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]), 
      city: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]), 
      schoolName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]), 
      schoolLocation: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]), 
      students: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]), 
      educationalSection: new FormControl('', [Validators.required]), 
      educationalStage: new FormControl('', [Validators.required]), 
      carType: new FormControl('', [Validators.required]), 
      subscribedBefore: new FormControl('', [Validators.required]), 
      comment: new FormControl('', [Validators.minLength(5), Validators.maxLength(100)]), 
    })
    
    registeration(form: FormGroup) {
      if (form.valid) {
        this.isLoading = true
        this._authService.registerDetailsForm(form.value).subscribe({
          next: (res:any) => {
            this.isLoading = false;
            this._toastrService.success(res.message)
            this._router.navigate(['/home'])
          },
          error: (err) => {
            this.isLoading = false
            this.apiError = err.error.message
          }
        })
      } else {
        this.isNotValidForm= true
      }
    }
  
    getControl(name: any): AbstractControl | null {
      return this.registerDetailsForm.get(name)
    }
  

  // constructor(private fb: FormBuilder) { }
  // googleForm!: FormGroup;
  // ngOnInit(): void {
  //   this.googleForm = this.fb.group({
  //     name: ['', Validators.required],               // Text input
  //     email: ['', [Validators.required, Validators.email]], // Email input
  //     choice: ['', Validators.required],              // Radio buttons
  //     agree: [false, Validators.requiredTrue]          // Checkbox
  //   });
  // }

  // onSubmit() {
  //   if (this.googleForm.valid) {
  //     console.log('Form Data:', this.googleForm.value);
  //   } else {
  //     console.log('Form is not valid');
  //   }
  // }
}
