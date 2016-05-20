import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AffilAppComponent } from '../app/affil.component';

beforeEachProviders(() => [AffilAppComponent]);

describe('App: Affil', () => {
  it('should create the app',
      inject([AffilAppComponent], (app: AffilAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'affil works!\'',
      inject([AffilAppComponent], (app: AffilAppComponent) => {
    expect(app.title).toEqual('affil works!');
  }));
});
