import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { PlayerService } from '../../services/player.service';
import { MessageService } from 'primeng/api';

interface Option {
  id: number,
  name: string
}

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ButtonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, FloatLabelModule, InputTextModule, FormsModule, ToastModule],
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

  constructor(private playerService: PlayerService, private messageService: MessageService) { }

  ngOnInit(): void {
    
  }

  onOptionSelected(option: Option) {
    this.selectedOption = option;
    this.showOptions = false;
    this.selectedOptionChange.emit(option);
  }

  addPlayer() {
    this.playerService.addPlayer({ "firstName": this.firstName, "lastName": this.lastName }).subscribe({
      next: (result: any) => { 
        this.addPlayerSuccess() 
      },
      error: (error: any) => { 
        this.addPlayerError(error) 
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
}
