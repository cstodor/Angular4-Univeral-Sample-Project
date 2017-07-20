import { AngularUniversalPage } from './app.po';

describe('angular-universal App', () => {
  let page: AngularUniversalPage;

  beforeEach(() => {
    page = new AngularUniversalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
