import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

interface Option {
  id: number,
  name: string
}

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ButtonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, FloatLabelModule, InputTextModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
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

  ngOnInit(): void {
    
  }

  onOptionSelected(option: Option) {
    this.selectedOption = option;
    this.showOptions = false;
    this.selectedOptionChange.emit(option);
  }
}
