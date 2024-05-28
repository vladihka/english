import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PopularTagsService} from './services/popularTags.service'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {GetPopularTagsEffect} from './store/effects/getPopularTags.effect'
import {reducers} from './store/reducers'
import {PopularTagsComponent} from './components/popularTags/popularTags.component'
import {LoadingModule} from '../loading/loading.module'
import {ErrorMessageModule} from '../errorMessage/errorMessage'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
