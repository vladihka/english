import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {getFeedSuccessAction} from '../../../shared/modules/feed/store/actions/getFeed.action'
import {catchError, map, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'
import {ArticleService as SharedArticleService} from '../../../shared/services/article.service'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getArticle.action'
import {ArticleInterface} from '../../../shared/types/article.interface'

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({slug}) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({article})
          }),
          catchError(() => {
            return of(getArticleFailureAction())
          })
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService
  ) {}
}