import { Component, OnInit } from '@angular/core';
import { StoreData } from '../ViewModels/store-data';



@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
storeInfo:StoreData;
constructor()
{
  this.storeInfo=new StoreData('ITIStore','https://picsum.photos/200/300',['Amman','Zarqa']);
  
}
IsImageShow=true;
ShowImage()
{
    this.IsImageShow=!this.IsImageShow;
}
ngOnInit(): void {
  
}
}
