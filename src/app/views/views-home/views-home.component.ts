import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 53, label: 'Reviews' },
  ];

  items = [
    {
      image: '/assets/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch for living room.',
    },
    {
      image: '/assets/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
