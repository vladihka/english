import {NgModule} from '@angular/core'
import {AsyncPipe, CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'

import {RegisterComponent} from './components/register/register.component'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {AuthService} from './services/auth.service'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from './store/effects/register.effect'
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessages/backendErrorMessages.module'
import {PersistenceService} from '../shared/services/persistance.service'
import {LoginEffect} from './store/effects/login.effect'
import {LoginComponent} from './components/login/login.component'
import {GetCurrentUserEffect} from './store/effects/getCurrentUser.effect'
import {UpdateCurrentUserEffect} from './store/effects/updateCurrentUser.effect'

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      UpdateCurrentUserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
