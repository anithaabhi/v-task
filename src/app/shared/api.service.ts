import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  employeeData=new BehaviorSubject({});
  showHide = new BehaviorSubject({});
  editHide = new BehaviorSubject({});

  constructor(private http:HttpClient) { }

  postData(data:any){
    return this.http.post<any>("http://localhost:3000/employees/",data)
    .pipe(map((res:any)=>{
      return res;

    })

    )
  }

  getData(){
    return this.http.get<any>("  http://localhost:3000/employees/")
    .pipe(map((res:any)=>{
      return res;

    })

    )
  }

  deleteData(id:number){
    return this.http.delete<number>("http://localhost:3000/employees/"+ id)
    .pipe(map((res)=>{
      return res;
    }))
  }
  updateData(id:number,data:any){
  return this.http.put<any>("httphttp://localhost:3000/employees/"+id, data)
  .pipe(map((res)=>{
    return res;
  }))
  }

}


