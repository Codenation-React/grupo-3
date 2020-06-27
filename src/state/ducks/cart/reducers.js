// @format
import * as types from "./types";
import * as utils from "./utils";
import { createReducer } from "../../utils";

/* State shape
[
  {
    product,
    quantity,
  }
]
*/

const initialState = [
  {
    product: {
      id: 1,
      name: "Moon Tyrant II",
      slug: "moon-tyrant-ii-print",
      featured: false,
      stock: 1,
      price_in_cents: 800,
      description:
        "An original 8.5 x 11 print on cardstock. Handnumbered and signed by artist EDWIN CALLIHAN",
      kind: "print",
      variation: {},
      media: [
        {
          id: 1,
          type: "image",
          url:
            "https://assets.bigcartel.com/product_images/255514148/01B543B6-414C-4230-BBD5-B18F207DFBA6.jpeg?auto=format&fit=max&h=1000&w=1000",
        },
      ],
    },
    quantity: 12,
  },
];

const cartReducer = createReducer(initialState)({
  [types.ADD]: (state, action) => {
    const { product, quantity } = action.payload;

    const index = utils.productPositionInCart(state, product);

    if (index === -1) {
      return [utils.newCartItem(product, quantity), ...state];
    }

    const currentItem = state[index];
    const updatedItem = Object.assign({}, currentItem, {
      quantity: currentItem.quantity + quantity,
    });

    return [...state.slice(0, index), updatedItem, ...state.slice(index + 1)];
  },
  [types.CHANGE_QUANTITY]: (state, action) => {
    const { product, quantity } = action.payload;
    const index = utils.productPositionInCart(state, product);

    const updatedItem = Object.assign({}, state[index], { quantity });

    return [...state.slice(0, index), updatedItem, ...state.slice(index + 1)];
  },
  [types.REMOVE]: (state, action) => {
    const { product } = action.payload;
    const index = utils.productPositionInCart(state, product);

    return [...state.slice(0, index), ...state.slice(index + 1)];
  },
  [types.CLEAR]: () => [],
});

export default cartReducer;
