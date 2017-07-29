import { ScgasPortalAgvPage } from './app.po';

describe('scgas-portal-agv App', () => {
  let page: ScgasPortalAgvPage;

  beforeEach(() => {
    page = new ScgasPortalAgvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
