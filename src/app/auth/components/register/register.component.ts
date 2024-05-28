import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {AuthService} from '../../services/auth.service'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'
import {registerAction} from '../../store/actions/register.action'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    })
    //console.log(this.form.valid)
  }

  onSubmit(): void {
    console.log(this.form.value)
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({request}))
  }

  protected readonly onsubmit = onsubmit
}
