import {Injectable} from '@angular/core'
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import {Observable} from 'rxjs'
import {PersistenceService} from './persistance.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private persistenceService: PersistenceService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get('accountToken')
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      },
    })
    return next.handle(request)
  }
}
