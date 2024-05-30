import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from '../../shared/types/appState.interface'
import {AuthStateInterface} from '../../auth/types/authState.interface'
import {SettingsStateInterface} from '../types/settingsState.interface'

export const settingsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SettingsStateInterface
>('auth')

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
)
