import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'mc-tag-feed',
  templateUrl: 'tagFeed.component.html',
  styleUrls: ['tagFeed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  apiUrl: string
  tagName: string
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('params in tagFeed')
      this.tagName = params.slug
      this.apiUrl = `/articles?tag=${this.tagName}`
    })
  }
}
