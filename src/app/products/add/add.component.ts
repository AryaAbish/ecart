import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  //reactive form model for add form
  addForm=this.fb.group({
    id: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    name: [''],
    categoryId:['',[Validators.required,Validators.pattern('[0-9]+')]],
    description:[''],
    price:['',[Validators.required,Validators.pattern('[0-9]+')]],
    image:[''],
    rating:['',[Validators.required,Validators.pattern('[0-9]+')]],
    review:['',[Validators.required,Validators.pattern('[0-9]+')]],
    vendorName:['']
  })


  constructor(private fb:FormBuilder,private ps:ProductService,private rout:Router){}

  ngOnInit(): void {
  }

  addProduct(){
    if(this.addForm.valid){
      let path=this.addForm.value
      var newproduct={
      id: path.id,
      name: path.name,
      categoryId:path.categoryId,
      description:path.description,
      price:path.price,
      image:path.image,
      rating:path.rating,
      review:path.review,
      vendorName:path.vendorName
    }
    // console.log(newproduct);
    this.ps.addProduct(newproduct).subscribe((result:any)=>{
      alert('new product added')
      this.addForm.reset()
      // this.rout.navigateByUrl("")
    })  
    }
    else{
      alert("Enter valid details")
    }
  }

}
