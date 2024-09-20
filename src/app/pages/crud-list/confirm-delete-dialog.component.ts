import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-delete-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  template: `
    <div class="delete-dialog">
      <h2 mat-dialog-title>Confirmar Exclusão</h2>
      <mat-dialog-content>Tem certeza que deseja excluir este profissional?</mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button class="cancel-button" (click)="onCancel()">Não</button>
        <button mat-button color="warn" class="confirm-button" (click)="onConfirm()">Sim</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [
    `
      .delete-dialog {
        padding: 20px;
        border-radius: 16px;
        background-color: white;
      }

      h2 {
        margin: 0 0 10px 0;
      }

      mat-dialog-content {
        font-size: 16px;
        color: #333;
      }

      mat-dialog-actions {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
      }

      .cancel-button, .confirm-button {
        padding: 8px 20px;
        border-radius: 50px;
        font-weight: bold;
        transition: background-color 0.3s ease;
      }

      .cancel-button {
        background-color: #f1f1f1;
        border: 1px solid #ccc;
      }

      .cancel-button:hover {
        background-color: #e0e0e0;
      }

      .confirm-button {
        background-color: #f44336;
        color: white;
      }

      .confirm-button:hover {
        background-color: #e53935;
      }
    `
  ]
})
export class ConfirmDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false); 
  }
}
