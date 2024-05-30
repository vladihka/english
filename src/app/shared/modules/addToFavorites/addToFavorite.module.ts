import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AddToFavoriteComponent} from './components/addToFavorites/addToFavorite.component'

@NgModule({
  imports: [CommonModule],
  declarations: [AddToFavoriteComponent],
  exports: [AddToFavoriteComponent],
})
export class AddToFavoriteModule {}
