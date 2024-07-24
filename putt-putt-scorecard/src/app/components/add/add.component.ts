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
import { LocationService } from '../../services/location.service';
import { CourseService } from '../../services/course.service';

interface Option {
  id: number,
  name: string
}

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ButtonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, FloatLabelModule, InputTextModule, FormsModule, ToastModule, InputNumberModule, DropdownModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  providers: [MessageService]
})
export class AddComponent implements OnInit {
  // Pre-Form
  options: Option[] = [
    { id: 1, name: "PLAYER" },
    { id: 2, name: "COURSE" }
  ];
  selectedOption: Option | null = null;
  showOptions: boolean = true;
  @Output() selectedOptionChange = new EventEmitter<Option>();

  // Add Player Form
  firstName: string = "";
  lastName: string = "";

  // Add course form
  courseName: string = "";
  city: string = "";
  states: string[] = this.locationService.getStateAbbr();
  selectedState: string = "";
  parByHole: any[] = [ 
    { "hole": 1, "par": 2 }, 
    { "hole": 2, "par": 2 }, 
    { "hole": 3, "par": 2 }, 
    { "hole": 4, "par": 2 },
    { "hole": 5, "par": 2 },
    { "hole": 6, "par": 2 },
    { "hole": 7, "par": 2 },
    { "hole": 8, "par": 2 },
    { "hole": 9, "par": 2 },
    { "hole": 10, "par": 2 },
    { "hole": 11, "par": 2 },
    { "hole": 12, "par": 2 },
    { "hole": 13, "par": 2 },
    { "hole": 14, "par": 2 },
    { "hole": 15, "par": 2 },
    { "hole": 16, "par": 2 },
    { "hole": 17, "par": 2 },
    { "hole": 18, "par": 2 }
  ];

  constructor(private playerService: PlayerService, private messageService: MessageService, private locationService: LocationService, private courseService: CourseService) { }

  ngOnInit(): void {
    // this.states = this.locationService.getStateAbbr();
  }

  onOptionSelected(option: Option) {
    this.selectedOption = option;
    this.showOptions = false;
    this.selectedOptionChange.emit(option);
  }

  addPlayer() {
    this.playerService.addPlayer({ "firstName": this.firstName, "lastName": this.lastName }).subscribe({
      next: (result: any) => { 
        this.addPlayerSuccess();
      },
      error: (error: any) => { 
        this.addPlayerError(error);
      } 
    });
  }

  addPlayerSuccess() {
    this.playerSuccessToast();
    
    this.firstName = "";
    this.lastName = "";
  }

  playerSuccessToast() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: `${this.firstName} ${this.lastName} has been added`, key: 'addPlayerSuccess', life: 3000 });
  }

  addPlayerError(error: any) {
    this.playerErrorToast();
  }

  playerErrorToast() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: `Failed to add player`, key: 'addPlayerError', life: 3000 });
  }

  trackByHole(index: number, obj: any) {
    return obj.hole;
  }

  addCourse() {
    let arrOfPars: number[] = [];
    this.parByHole.forEach(hole => {
      arrOfPars.push(hole.par);
    });
    
    this.courseService.addCourse({ "courseName": this.courseName, "city": this.city, "stateAbbr": this.selectedState, "parByHole": arrOfPars }).subscribe({
      next: (result: any) => { 
        this.addCourseSuccess();
      },
      error: (error: any) => { 
        this.addCourseError(error);
      } 
    });
  }

  addCourseSuccess() {
    this.courseSuccessToast();
    
    this.courseName = "";
    this.city = "";
    this.selectedState = "";
    this.parByHole = [ 
      { "hole": 1, "par": 2 }, 
      { "hole": 2, "par": 2 }, 
      { "hole": 3, "par": 2 }, 
      { "hole": 4, "par": 2 },
      { "hole": 5, "par": 2 },
      { "hole": 6, "par": 2 },
      { "hole": 7, "par": 2 },
      { "hole": 8, "par": 2 },
      { "hole": 9, "par": 2 },
      { "hole": 10, "par": 2 },
      { "hole": 11, "par": 2 },
      { "hole": 12, "par": 2 },
      { "hole": 13, "par": 2 },
      { "hole": 14, "par": 2 },
      { "hole": 15, "par": 2 },
      { "hole": 16, "par": 2 },
      { "hole": 17, "par": 2 },
      { "hole": 18, "par": 2 }
    ];
  }

  courseSuccessToast() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: `${this.courseName} has been added`, key: 'addCourseSuccess', life: 3000 });
  }

  addCourseError(error: any) {
    this.courseErrorToast();
  }

  courseErrorToast() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: `Failed to add course`, key: 'addCourseError', life: 3000 });
  }
}
