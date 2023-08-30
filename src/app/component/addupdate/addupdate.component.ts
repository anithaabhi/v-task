import { Component, ElementRef, OnInit ,ViewChild} from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { EmpInterface } from 'src/app/shared/employee.interface';

@Component({
  selector: 'app-addupdate',
  templateUrl: './addupdate.component.html',
  styleUrls: ['./addupdate.component.css']
})
export class AddupdateComponent implements OnInit{
 
public editdata:any;addHide!:boolean;

  constructor( private _fb:FormBuilder, private _api:ApiService, private router:Router){}
  

  empformData!:FormGroup;
  empInterfaceObj :EmpInterface =  new EmpInterface();

  ngOnInit(): void {
   
    
   
    this.empformData=this._fb.group({
      name:[""],
      age:[""],
      mobile:[""],
      email:[""]
      
    })
    this._api.employeeData.subscribe((res)=>{
      this.editdata=res;
      this.empInterfaceObj.id=this.editdata.id;
      this.empformData.controls['name'].patchValue(this.editdata.name)
      this.empformData.controls['age'].patchValue(this.editdata.age)
      this.empformData.controls['email'].patchValue(this.editdata.email)
      this.empformData.controls['mobile'].patchValue(this.editdata.mobile)
    })
    
  
   
  }
  
 // saveEmpData(){

    //     if(this.empformData.valid){
//       this._api.postData(this.empformData.value).subscribe({
//         next:(res)=>{
//         alert("added successpully")
//         let ref=document.getElementById("cancle");
//         ref?.click();
//         this.empformData.reset()
//         },
//         error:(err)=>{
//         alert("something went wrong")
//         }
//       })
   
// }
  //}

saveEmpData(){

this.empInterfaceObj.name=this.empformData.value.name;
this.empInterfaceObj.age=this.empformData.value.age;
this.empInterfaceObj.mobile=this.empformData.value.mobile;
this.empInterfaceObj.email=this.empformData.value.email;

this._api.postData(this.empInterfaceObj).subscribe({
  next:(res)=>{
    
    
    this.empformData.reset()
    
  },
  error:(err)=>{
    alert("something went wrong")
  }

})

  }

  updateEmpData(){
        this.editdata.name=this.empformData.value.name;
    this.editdata.age=this.empformData.value.age;
    this.editdata.mobile=this.empformData.value.mobile;
    this.editdata.email=this.empformData.value.email;

    this._api.updateData(this.editdata,this.editdata.id).subscribe((res)=>{
      alert("update successful");
     let ref=document.getElementById("cancle")
    ref?.click(); 
      
      this.empformData.reset();
    this.router.navigateByUrl("");
      
    
      

    })
  

  }
}