import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  pid:any
  pdata:any={}

  constructor(private ar:ActivatedRoute, private ps:ProductService, private rout:Router){}

  ngOnInit():void{
   this.ar.params.subscribe((data:any)=>{
    // console.log(data);
    this.pid=data.id
    // console.log(this.pid);
    this.ps.getproduct(this.pid).subscribe((result:any)=>{
      console.log(result);
    this.pdata=result
    })
   }) 
  }

  editData(){
    this.ps.editProduct(this.pid,this.pdata).subscribe((result:any)=>{
      alert("Product details Updated")
      this.rout.navigateByUrl("")
    })
  }

}
