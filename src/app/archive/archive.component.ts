import { Component, OnInit } from '@angular/core';
import { FILMS_2017 } from 'app/films/films-2017';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  Films2017 = FILMS_2017;
}
