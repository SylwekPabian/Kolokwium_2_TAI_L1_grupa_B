import { Component, OnInit } from '@angular/core';
import { SPDataService } from '../../services/sp-data.service';

@Component({
  selector: 'app-orders-sp',
  templateUrl: './orders-sp.component.html',
  styleUrls: ['./orders-sp.component.css']
})
export class OrdersSPComponent implements OnInit {

  public items$: any;

  constructor(private service: SPDataService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      console.log(response);
      this.items$ = response;
    });
  }


}
