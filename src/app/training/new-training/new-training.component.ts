import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  exerciseSubscription: Subscription;

  @Output() trainingStart = new EventEmitter<void>();

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exercisesChanged
      .subscribe(exercises => this.exercises = exercises);

    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy(): void {
    this.exerciseSubscription.unsubscribe();
  }
}
