import {createReducer, on, Action} from '@ngrx/store'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action'
import {AuthStateInterface} from '../types/authState.interface'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action'
import {state} from '@angular/animations'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './actions/getCurrentUser.action'
import {act} from '@ngrx/effects'
import {updateCurrentUserSuccessAction} from './actions/updateCurentUser.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      currentUser: action.currentUser,
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
