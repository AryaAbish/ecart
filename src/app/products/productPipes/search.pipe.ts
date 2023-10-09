import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productsArray:any[],searchString:string,propName:string): any {
    const result:any=[]

    if(!productsArray || !searchString || !propName){
      return productsArray
    }
    else{
      productsArray.forEach((item:any)=>{
        if(item[propName].trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }

}
