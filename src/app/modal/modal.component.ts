import { Component, Input } from '@angular/core';
import { Transaction } from '../models/tran-details';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  MockAccount: number= 1134578901;
  DATAS:Transaction[] = [];
  
  @Input({required:true})
  transaction:Transaction|undefined;


  
  closeModal(){
    const modal = document.getElementById("crypto-modal");
   const container = document.getElementById("container");
    if (modal) {
      modal.style.display = "none";
      if (container) {
        container.style.filter = "blur(0px)";
      }
    }
  }

 
}
