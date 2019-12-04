import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {IProduct} from '../products/product.model'

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productItem= new IProduct(null,null,null,null,null,null,null,null);

  constructor(private productService:ProductsService) { }

  ngOnInit() {
  }
addProduct(){
  console.log(this.productItem)
  this.productService.newProduct(this.productItem);
  // alert("Success")
}
}
