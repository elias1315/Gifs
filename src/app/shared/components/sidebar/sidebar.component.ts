import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {

  constructor(private gifsService : GifsService){ }


  get tags(){
    return this.gifsService.tagsHistory;
  }

  searchTag(valor : string){
    this.gifsService.searchTag(valor);
  }


}
