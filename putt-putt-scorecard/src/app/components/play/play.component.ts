import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
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

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [ButtonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, FloatLabelModule, InputTextModule, FormsModule, ToastModule, InputNumberModule, DropdownModule, MultiSelectModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css',
  providers: [MessageService]
})
export class PlayComponent {
  // Pre-Play
  prePlay: boolean = true;
  courses: any[] = [];
  selectedCourse: any = null;
  players: any[] = [];
  selectedPlayers: any[] = [];

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

  loadPlayers() {
    this.playerService.getPlayers().subscribe(data => {
      this.players = data.players;

      this.players = this.players.map( player => {
        return { 
          ...player,
          full_name: `${player.first_name} ${player.last_name}`
        };
      });
    });
  }

  updateSelectedPlayers() {
    console.log(this.selectedPlayers);
  }
}
