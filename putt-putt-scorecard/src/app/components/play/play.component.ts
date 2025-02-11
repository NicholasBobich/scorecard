import { NgIf } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { PlayerService } from '../../services/player.service';
import { MessageService } from 'primeng/api';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { Player } from '../../models/player';
import { Score } from '../../models/score';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [ButtonModule, NgIf, FloatLabelModule, InputTextModule, FormsModule, ToastModule, InputNumberModule, DropdownModule, MultiSelectModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css',
  providers: [MessageService]
})
export class PlayComponent {
  // Pre-Play Variables
  prePlay: boolean = true;
  courses: any[] = [];
  selectedCourse: any = null;
  players: any[] = [];
  selectedPlayers: any[] = [];

  // In-Play Variables
  scores: any[] = [];
  holes: number[] = [];
  selectedHole: number | undefined;

  constructor(private playerService: PlayerService, private messageService: MessageService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
    this.loadPlayers();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data.courses;
    });
  }

  updateSelectedCourse() {
    console.log("Selected Course: ", this.selectedCourse);
    for (let i = 0; i < this.selectedCourse.par_by_hole.length; i++) {
      this.holes.push(i + 1);
    }
    this.selectedHole = this.holes[0];
  }

  loadPlayers() {
    this.playerService.getPlayers().subscribe(data => {
      this.players = data.players;

      this.players = this.players.map(player => {
        return { 
          ...player,
          full_name: `${player.first_name} ${player.last_name}`
        };
      });
    });
  }

  updateSelectedPlayers() {
    console.log("Selected Players: ", this.selectedPlayers);
  }

  startPlaying() {
    this.prePlay = false;
    const now = new Date();
    const timestamp = now.toISOString();
    let scoreByHole = [...this.selectedCourse.par_by_hole]

    this.selectedPlayers.forEach(player => {
      this.scores.push({
        pid: player.pid,
        cid: this.selectedCourse.cid,
        datetime: timestamp,
        score_by_hole: scoreByHole
      });
    });

    console.log("Scores: ", this.scores);
  }

  nextHole() {
    
  }

  prevHole() {
    
  }
}
