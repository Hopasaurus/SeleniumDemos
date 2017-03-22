import { ShoppingCartPage } from './app.po';

describe('shipping-cart App', () => {
  let page: ShoppingCartPage;

  beforeEach(() => {
    page = new ShoppingCartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
