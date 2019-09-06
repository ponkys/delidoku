import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import s from "./nav-bar.scss";
// s.display-none-large
export function Navbar() {
  const [showNavBar, setNavBar] = useState(false);
  return (
    <header className="header">
      <div
        className={s.content['menuSymbol']}
        // className={s.menuSymbol+ s.open + s.blue-color-bg s.menu-position-left}
        onClick={() => setNavBar(!showNavBar)}
      >
        {!showNavBar && <FontAwesomeIcon className="yellow-color" icon={faBars} />}
      </div>
      {/*<app-links className="links"></app-links>
        <div className="menu-symbol lang-position-left display-none-small">
            <p *ngIf="isHu" (click)="onLangChange(languages.EN)" [class.yellow-color]="isHu">en</p>
            <p *ngIf="!isHu" (click)="onLangChange(languages.HU)" [class.yellow-color]="!isHu">hu</p>
        </div>
        <app-logo></app-logo> */}
    </header>
  );
}
