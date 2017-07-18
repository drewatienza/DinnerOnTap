import { DinnerOnTapPage } from './app.po';

describe('dinner-on-tap App', () => {
  let page: DinnerOnTapPage;

  beforeEach(() => {
    page = new DinnerOnTapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
