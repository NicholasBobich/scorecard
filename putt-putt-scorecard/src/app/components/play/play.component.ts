import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { PlayerService } from '../../services/player.service';
import { MessageService } from 'primeng/api';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [ButtonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, FloatLabelModule, InputTextModule, FormsModule, ToastModule, InputNumberModule, DropdownModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css',
  providers: [MessageService]
})
export class PlayComponent {
  // Pre-Play
  prePlay: boolean = true;
  courses: any[] = [];
  selectedCourse: any = null;

  constructor(private playerService: PlayerService, private messageService: MessageService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data.courses;
    });
  }

  courseDropdownFormat(course: any) {
    return `${course.course_name}\n${course.city}`;
  }
}
