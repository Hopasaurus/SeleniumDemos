import { ShippingCartPage } from './app.po';

describe('shipping-cart App', () => {
  let page: ShippingCartPage;

  beforeEach(() => {
    page = new ShippingCartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
