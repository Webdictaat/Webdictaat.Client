import {Injectable} from "@angular/core";

declare var ga: any;

@Injectable()
export class GoogleAnalyticsEventsService {

  public constructor(){
    this.InitializeGa(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  }

  public emitEvent(eventCategory: string,
                   eventAction: string,
                   eventLabel: string = null,
                   eventValue: number = null) {

    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }

  //Code snippet from GA docs
  private InitializeGa(i,s,o,g,r,a = null,m = null){
    i['GoogleAnalyticsObject']=r;
    i[r] = i[r] || function(){
      (i[r].q=i[r].q||[]).push(arguments)
    } , i[r].l=(1 * <any>(new Date()));
    a=s.createElement(o), m=s.getElementsByTagName(o)[0];
    a.async=1;
    a.src=g;
    a.onload = function(){
        ga('create', 'UA-113126593-1', 'auto');
    };
    m.parentNode.insertBefore(a,m);
  }

  public send()
  {
      ga('send', 'pageview');
  }

  public set(url)
  {
    ga('set', 'page', url);
  }
}