import { DemoAppNewPage } from './app.po';

describe('demo-app-new App', () => {
  let page: DemoAppNewPage;

  beforeEach(() => {
    page = new DemoAppNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
