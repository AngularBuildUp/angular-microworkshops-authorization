import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../dogs.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hound',
  templateUrl: './hound.component.html',
  styleUrls: ['./hound.component.css']
})
export class HoundComponent implements OnInit {
  private form: FormGroup;
  private dogs: string[] = [];
  constructor(private dogService: DogsService) { }

  ngOnInit() {
    this.dogService.getHounds().subscribe(dogs => this.dogs = dogs);
    this.form = new FormGroup({
      dogs: new FormControl(5)
    });
  }

  refresh(): void {
    const limit = this.form.get('dogs').value as number;
    this.dogService.getHounds(limit).subscribe(dogs => this.dogs = dogs);
  }
}