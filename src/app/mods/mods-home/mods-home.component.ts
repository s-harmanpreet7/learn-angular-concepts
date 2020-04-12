import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Why is the sky blue?',
      content: 'The sky is blue because it is!',
    },
    {
      title: 'What does and orange tastes like?',
      content: 'An orange tastes like an orange!',
    },
    {
      title: 'What does this cat likes?',
      content: 'She likes what she likes!',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.modalOpen = !this.modalOpen;
  }
}
