import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {LoadingComponent} from '../loading/components/loading.component'
import {TagListComponent} from './components/tagList/tagList.component'

@NgModule({
  imports: [CommonModule],
  declarations: [TagListComponent],
  exports: [TagListComponent],
})
export class TagListModule {}
