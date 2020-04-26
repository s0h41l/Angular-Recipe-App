import { Component, OnInit, ViewChild, ElementRef,EventEmitter,Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  
  @ViewChild('name',{static:true}) name:ElementRef;
  @ViewChild('amount',{static:true}) amount:ElementRef;

  @Output() saveData=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    const ingredient={
      name:this.name.nativeElement.value,
      amount:this.amount.nativeElement.value
    }
    this.saveData.emit(ingredient);
    this.name.nativeElement.value="",
    this.amount.nativeElement.value="";
  }
}
