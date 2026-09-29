import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { VisionMission } from './sections/vision-mission/vision-mission';
import { DiscoverWork } from './sections/discover-work/discover-work';

@Component({
  selector: 'app-home',
  imports: [Hero, VisionMission, DiscoverWork],
  templateUrl: './home.html',
})
export class Home {}
