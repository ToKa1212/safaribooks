import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = '';
  isDisabled = true;
  products = [];
  private productSubscription: Subscription;

  constructor(private productService: ProductsService) {
    setTimeout(() =>
      this.isDisabled = false, 3000);
  }

  ngOnInit() {
    this.products = this.productService.getProduct();
    this.productSubscription = this.productService.productsUpdated.subscribe(() => {
      this.products = this.productService.getProduct();
    });
  }

  onAddProduct(form) {
    // this.products.push(this.productName);
    console.log(form);
    if (form.valid) {
      // this.products.push(form.value.productName);
      this.productService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();

  }

}
