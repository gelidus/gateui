/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AddPackageFormComponent } from './add-package-form.component';

describe('Component: AddPackageForm', () => {
  it('should create an instance', () => {
    let component = new AddPackageFormComponent();
    expect(component).toBeTruthy();
  });
});
