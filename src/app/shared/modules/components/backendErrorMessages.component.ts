import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from '../../types/backendErrors.interface'
import {Observable} from 'rxjs'

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface

  errorMessages: string[]

  ngOnInit() {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(', ')
        return `${name} ${messages}`
      }
    )
  }
}
