import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //object of behaviour subject
  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  //api call to get all products                                    
  getAllProducts(){
    return this.http.get('http://localhost:3000/products')
  }

  //get single product
  getproduct(id:any){
    return this.http.get('http://localhost:3000/products/'+id)
  }

  //add new product
  addProduct(pdata:any){
    return this.http.post('http://localhost:3000/products',pdata)
  }

  //delete product
  deleteProduct(id:any){
    return this.http.delete('http://localhost:3000/products/'+id)
  }

  //edit product
  editProduct(id:any,pdata:any){
    return this.http.put('http://localhost:3000/products/'+id,pdata)
  }

}
