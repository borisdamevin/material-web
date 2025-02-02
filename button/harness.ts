/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Harness} from '@material/web/testing/harness';

import {Button} from './lib/button';

/**
 * Test harness for buttons.
 */
export class ButtonHarness extends Harness<Button> {
  protected override async getInteractiveElement() {
    await this.element.updateComplete;
    return this.element.renderRoot.querySelector('.md3-button') as HTMLElement;
  }
}
