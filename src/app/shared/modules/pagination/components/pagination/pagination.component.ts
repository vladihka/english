import {Component, Input, OnInit} from '@angular/core'
import {UtilsService} from '../../../../services/utils.service'

@Component({
  selector: 'mc-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['components.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps: number
  @Input('limit') limitProps: number
  @Input('currentPage') currentPageProps: number
  @Input('url') urlProps: number

  pagesCount: number
  pages: number[]

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }
}
