import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroi } from '../../interfaces/heroi.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(
              private dialogRef: MatDialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroi ) { }

  ngOnInit(): void {

  }

  eliminar() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close();
  }

}
