/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PackagesComponent } from './packages.component';

describe('Component: Packages', () => {
  it('should create an instance', () => {
    let component = new PackagesComponent();
    expect(component).toBeTruthy();
  });
});
