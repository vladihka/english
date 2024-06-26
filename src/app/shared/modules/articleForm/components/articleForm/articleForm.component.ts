import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ArticleInputInterface} from '../../../../types/articleInput.interface'
import {BackendErrorsInterface} from '../../../../types/backendErrors.interface'
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'mc-article-form',
  templateUrl: 'articleForm.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>()

  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' '),
    })
  }

  onSubmit(): void {
    const articleInput: ArticleInputInterface = {
      ...this.form.value,
      tagList: this.form.value.tagList.split(' '),
    }
    this.articleSubmitEvent.emit(articleInput)
  }
}
