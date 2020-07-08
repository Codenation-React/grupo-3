import * as actions from '../cart/operations';
import * as types from '../cart/types';

describe('cart duck test', () => {
  describe('actions', () => {
    it('addToCart should create cart/ADD action', () => {
      const size = 'M';
      const code_color = '20002605_613';
      const sku = '5807_343_0_M';

      const expectedAction = {
        type: types.ADD,
        product: {
          size,
          code_color,
          sku,
        },
      };

      expect(actions.addToCart(code_color, sku, size)).toEqual(expectedAction);
    });

    describe('cart/CHANGE_QUANTITY actions test suite', () => {
      it('incrementQuantity should create cart/CHANGE_QUANTITY action of change type cart/INCREMENT', () => {
        const sku = '5807_343_0_M';

        const expectedAction = {
          type: types.CHANGE_QUANTITY,
          sku,
          changeType: types.CART_INCREMENT,
        };

        expect(actions.incrementQuantity(sku)).toEqual(expectedAction);
      });

      it('decrementQuantity should create cart/CHANGE_QUANTITY action of change type cart/DECREMENT', () => {
        const sku = '5807_343_0_M';

        const expectedAction = {
          type: types.CHANGE_QUANTITY,
          sku,
          changeType: types.CART_DECREMENT,
        };

        expect(actions.decrementQuantity(sku)).toEqual(expectedAction);
      });
    });

    it('removeFromCart should create cart/REMOVE action', () => {
      const sku = '5807_343_0_M';

      const expectedAction = {
        type: types.REMOVE,
        sku,
      };

      expect(actions.removeFromCart(sku)).toEqual(expectedAction);
    });
  });
});
