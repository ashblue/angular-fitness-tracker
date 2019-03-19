import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class UiService {
  constructor(private snackbar: MatSnackBar) {
  }

  showSnackbar(message: string, action: string, duration) {
    this.snackbar.open(message, action, {
      duration,
    });
  }
}
