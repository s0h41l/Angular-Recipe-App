import { Component,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() navigation=new EventEmitter<{name:string}>();

  openRecipe(){
    this.navigation.emit({
      name:"recipe"
    });
  }

  openShopping(){
    this.navigation.emit({
      name:"shopping"
    });
  }
}
