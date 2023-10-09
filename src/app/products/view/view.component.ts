import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  pid:any
  pdata:any={}
  loading:any=true

  constructor(private ar:ActivatedRoute, private ps:ProductService, private rout:Router){}

  ngOnInit(): void {

    setTimeout(()=>{
      this.loading=false
    },2000)

    this.ar.params.subscribe((data:any)=>{
      // console.log(data.id);
      this.pid=data.id
      // console.log(this.pid);
    })

    this.ps.getproduct(this.pid).subscribe((data:any)=>{
      // console.log(data);
      this.pdata=data
      // console.log(this.pdata);
      
    })

  }

  deleteProduct(){
    this.ps.deleteProduct(this.pid).subscribe((result:any)=>{
      alert("Product deleted")
      this.rout.navigateByUrl("")
    })
  }

}
