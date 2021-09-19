import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public createNewProject() {
    this._animateLogo();
    this._removeProjectButtons();
    this._displayProjectCreationForm();
  }

  private _animateLogo() {
    const logo = document.getElementById('logo');
    logo?.classList.toggle('shrinked-logo');

    const logoMask = document.getElementById('logo-mask');
    logoMask?.classList.toggle('shrinked-logo-mask');
  }

  private _removeProjectButtons() {
    const projectBtns = document.getElementsByClassName('project-btn');

    Array.from(projectBtns).forEach((ele) => {
      ele.remove();
    });
  }

  private _displayProjectCreationForm() {
    const newProjectForm = document.getElementById('new-project-form');

    if (newProjectForm) {
      newProjectForm.style.display = 'inline';
    }
  }
}
