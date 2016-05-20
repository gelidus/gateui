export class AffilPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('affil-app h1')).getText();
  }
}
