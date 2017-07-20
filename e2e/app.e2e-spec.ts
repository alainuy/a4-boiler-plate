import { A4BoilerplatePage } from './app.po';

describe('a4-boilerplate App', () => {
  let page: A4BoilerplatePage;

  beforeEach(() => {
    page = new A4BoilerplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
