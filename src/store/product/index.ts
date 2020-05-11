import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from 'immer-reducer';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { RootState } from 'store';

import { Product } from 'model/product';

type State = {
  products: Product[];
};

class ProductReducer extends ImmerReducer<State> {
  public addProduct(product: Product) {
    this.draftState.products.push(product);
  }

  public removeProduct(product: Product) {
    this.draftState.products = this.draftState.products.filter(
      (p) => p.id !== product.id,
    );
  }

  public setProducts(products: Product[]) {
    this.draftState.products = products;
  }
}

const DEFAULT_STATE: State = {
  products: [],
};

export const ProductActions = createActionCreators(ProductReducer);
export const productReducer = createReducerFunction(
  ProductReducer,
  DEFAULT_STATE,
);

export const ProductAsyncActions = {
  fetchProducts: (): ThunkAction<Promise<void>, RootState, null, AnyAction> => (
    dispatch,
    // getState,
  ): Promise<void> => {
    return axios.get('/ibama/api/products').then(({ data }) => {
      dispatch(ProductActions.setProducts(data));
    });
  },
};
