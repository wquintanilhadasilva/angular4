import { PrjdatabindingPage } from './app.po';

describe('prjdatabinding App', function() {
  let page: PrjdatabindingPage;

  beforeEach(() => {
    page = new PrjdatabindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
