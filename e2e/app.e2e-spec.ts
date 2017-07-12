import { SocietymanagementPage } from './app.po';

describe('societymanagement App', () => {
  let page: SocietymanagementPage;

  beforeEach(() => {
    page = new SocietymanagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
