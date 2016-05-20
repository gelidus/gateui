import { AffilPage } from './app.po';

describe('affil App', function() {
  let page: AffilPage;

  beforeEach(() => {
    page = new AffilPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('affil works!');
  });
});
