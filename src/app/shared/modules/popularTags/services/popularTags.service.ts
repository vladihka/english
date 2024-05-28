import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {environment} from '../../../../../environments/environment'
import {map} from 'rxjs/operators'
import {GetPopularTagsResponseInterface} from '../types/getPopularTagsResponse.interface'
import {HttpClient} from '@angular/common/http'
import {PopularTagType} from '../../../types/popularTag.type'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags'
    return this.http.get(url).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags
      })
    )
  }
}
