import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {IProduct} from './product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(public productService:ProductsService) { }

  btn:boolean=false;
  value:String='Show Image'
  showImg;boolean=false
 products:IProduct[];

  
  showImage(){
    if(this.btn==true){
      this.btn=false;
      this.value='Show Image'
    }
       
    else{
      this.btn=true
      this.value='Hide  Image'
    }
       

  }
  // toggleImage():void{
  //   this.showImg=!this.showImg
  // }



  

  ngOnInit():void {
    this.productService.productDetails().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify((data)))
    })
  }

}
