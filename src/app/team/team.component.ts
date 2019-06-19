import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Team } from './team';
import { WindowRefService } from '../window-ref.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @ViewChild('contentWrapper', { static: true })
  contentWrapper: ElementRef

  team: any[] = Team;

  public mobileScreen = true;

  constructor(private winRef: WindowRefService) {
    if (this.winRef.nativeWindow.outerWidth > 768) {
      this.mobileScreen = false;
    }
  }


  ngOnInit() {
    this.contentWrapper.nativeElement.scrollTop = 0;
  }

}
