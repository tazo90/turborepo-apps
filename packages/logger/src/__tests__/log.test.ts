import { describe, expect, it, vi } from 'vitest';

import { log } from '..';

vi.spyOn(global.console, 'log');

describe('logger', () => {
  it('prints a message', () => {
    log('hello');
    expect(console.log).toBeCalled();
  });
});
