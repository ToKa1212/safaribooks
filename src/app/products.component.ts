import {Component} from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  productName = '';
  isDisabled = true;
  products = ['gtx 1070', 'rtx 280 ti']

  constructor() {
    setTimeout(() =>
      this.isDisabled = false, 3000);
  }

  onAddProduct() {
    this.products.push(this.productName);
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }

}
