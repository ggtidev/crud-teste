import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule],
})
export class PopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
