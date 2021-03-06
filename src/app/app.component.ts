import { Component, ViewChild, OnInit } from '@angular/core';
import { TopBarComponent } from './views/components/top-bar/top-bar.component';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { GlobalConfig } from './configs/global-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(TopBarComponent) topBar: TopBarComponent;

  constructor(
    private router: Router,
    private metaService: Meta
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.handleRoutingEvents(event)
    })
  }

  ngOnInit() {
    this.metaService.addTags([
      {name:"google-site-verification", content: GlobalConfig.GOOGLE_CONFIRMATION_META_CONTENT}
    ])
  }

  routeAllowsTransparentTopbar(url: string): boolean {
    let homeRegExp = new RegExp('(\/home).*')
    let postRegExp = new RegExp('(\/post\/)[a-zA-Z0-9_-]+.*')
    return homeRegExp.test(url) || postRegExp.test(url)
  }

  handleRoutingEvents(event: RouterEvent): void {
    if (event instanceof NavigationEnd) {
      if (this.routeAllowsTransparentTopbar(event.urlAfterRedirects))
        this.topBar.enableTransparentTopbar();
      else
        this.topBar.disableTransparentTopbar();
    }
  }
}
