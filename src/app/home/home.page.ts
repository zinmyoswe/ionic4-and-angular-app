import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   text = "မမိုး ေက်ာက္မ်က္ရတနာေရာင္း၀ယ္ေရး";
  
   onChangeText(){
     this.text = 'Welcome MaMoe Gems&Jewellery Shop';
   }

}
