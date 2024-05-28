import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from '../shared/modules/feed/store/reducers'
import {RouterModule} from '@angular/router'
import {ErrorMessageModule} from '../shared/modules/errorMessage/errorMessage'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {ArticleService as SharedArticleService} from '../shared/services/article.service'
import {GetArticleEffect} from './store/effects/getArticle.effect'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  declarations: [],
  exports: [],
  providers: [SharedArticleService],
})
export class FeedModule {}
