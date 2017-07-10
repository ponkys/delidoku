import { DelidokuAngPage } from './app.po';

describe('delidoku-ang App', () => {
  let page: DelidokuAngPage;

  beforeEach(() => {
    page = new DelidokuAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
