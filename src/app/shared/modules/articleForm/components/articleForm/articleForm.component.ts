import {Component, Input} from '@angular/core'
import {ArticleInputInterface} from '../../../../types/articleInput.interface'
import {BackendErrorsInterface} from '../../../../types/backendErrors.interface'

@Component({
  selector: 'mc-article-form',
  templateUrl: 'articleForm.component.html',
})
export class ArticleFormComponent {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null
}
