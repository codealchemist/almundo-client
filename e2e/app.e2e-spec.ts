import { AmirandaAlmundoClientPage } from './app.po';

describe('amiranda-almundo-client App', function() {
  let page: AmirandaAlmundoClientPage;

  beforeEach(() => {
    page = new AmirandaAlmundoClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
