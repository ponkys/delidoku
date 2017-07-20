import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Team } from './team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @ViewChild('contentWrapper')
  contentWrapper: ElementRef

  team: any[] = Team;

  constructor() { }

  ngOnInit() {
    this.contentWrapper.nativeElement.scrollTop = 0;
  }

}
