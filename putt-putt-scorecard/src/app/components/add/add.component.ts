import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

interface Option {
  id: number,
  name: string
}

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ButtonModule, NgFor, NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  options: Option[] = [
    { id: 1, name: "PLAYER" },
    { id: 2, name: "COURSE" }
  ];
  selectedOption: Option | null = null;
  showOptions = true;

  @Output() selectedOptionChange = new EventEmitter<Option>();

  ngOnInit(): void {
    
  }

  onOptionSelected(option: Option) {
    this.selectedOption = option;
    this.showOptions = false;
    this.selectedOptionChange.emit(option);
  }
}
