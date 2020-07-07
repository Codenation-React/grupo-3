import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import productsMock from '../../../__tests__/mocks/products.json';
import productReducer from './index';
import * as actions from './operations';
import * as selectors from './selectors';
import * as types from './types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('product duck test', () => {
  describe('actions', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('fetchProdutcs should fetch products from api', () => {
      fetchMock.getOnce('*', {
        body: [...productsMock],
        headers: {
          'content-type': 'application/json',
        },
      });

      const expectedActions = [
        {
          type: types.FETCH_LIST_COMPLETED,
          products: productsMock,
        },
      ];

      const store = mockStore({ products: [] });

      return store.dispatch(actions.fetchProdutcs()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('reducers', () => {
    it('should handle initial state', () => {
      expect(productReducer(undefined, {})).toEqual([]);
    });

    it('should handle product/FETCH_LIST_COMPLETED', () => {
      const products = [productsMock[0]];
      const product = productsMock[0];

      expect(
        productReducer([], {
          type: types.FETCH_LIST_COMPLETED,
          products: [product],
        })
      ).toEqual(products);
    });
  });

  describe('selectors', () => {
    it('getProduct should return product by code_color', () => {
      const expectedProduct = productsMock.find(
        (x) => x.code_color === '20002570_614'
      );

      expect(
        selectors.getProduct(productsMock, expectedProduct.code_color)
      ).toEqual(expectedProduct);
    });
  });
});
