import { Component ,OnInit} from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empData=[];

  constructor(private _api:ApiService){}
ngOnInit(){
  this.getEmpData();
  
}

getEmpData(){
  debugger;
  this._api.getData().subscribe(res=>{
    console.log(res)
    this.empData=res;
  })
}


fnDelete(e:any){
  this._api.deleteData(e.id).subscribe({
    next:(res)=>{
// alert("delete success")
this.getEmpData();

    },
    error:(error)=>{
alert("something went wrong")
    }

    

  })
}


}
