declare namespace Cart {
  export interface Item {
    hash: number;
    product: Product.Unity;
    quantity: number;
  }

  export interface State {
    items: Item[];
  }
}
