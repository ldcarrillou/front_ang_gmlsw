//import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientComponent } from './client/client.component';
import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppComponent, ClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_ang_gmlsw';
  @ViewChild('demoYouTubePlayer')
  demoYouTubePlayer!: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }
}
