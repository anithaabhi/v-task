import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
editDisable:boolean=true;
  constructor(private _api:ApiService){}
  @Input() data:any=[];
  @Output() fd=new EventEmitter();
  @Output() fe=new EventEmitter();
  ngOnInit(){
   
  }
  editFn(row:any){
    this.fe.emit(row);
    this._api.employeeData.next(row);
    this._api.editHide.next(this.editDisable);

  }
  deleteFn(row:any){
this.fd.emit(row)
  }

}