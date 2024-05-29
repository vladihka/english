import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {RouterModule, Routes} from '@angular/router'
import {ErrorMessageModule} from '../shared/modules/errorMessage/errorMessage'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {ArticleService as SharedArticleService} from '../shared/services/article.service'
import {GetArticleEffect} from './store/effects/getArticle.effect'
import {TagListModule} from '../shared/modules/tagList/tagList.module'
import {ArticleComponent} from './components/article/article.component'
import {reducers} from './store/reducers'
import {ArticleService} from './services/article.service'
import {DeleteArticleEffect} from './store/effects/deleteArticle.effect'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService, SharedArticleService],
})
export class ArticleModule {}
