import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {

  searchKey:any=""

  allProducts:any=[]
  //array to store filtered category products from all products
  filterProducts:any=[]

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe((data:any)=>{
      // console.log(data);
    this.allProducts=data
    // console.log(this.allProducts);

    this.filterProducts=this.allProducts
    })

    //subscribe behaviour subject
    this.ps.search.subscribe((item:any)=>{
      // console.log(item);
      this.searchKey=item
    })

  }

  filterCategory(catId:any){
    this.filterProducts=this.allProducts.filter((item:any)=>item.categoryId==catId || catId=="")
  }

}
