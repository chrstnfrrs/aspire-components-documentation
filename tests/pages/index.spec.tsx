import React from 'react';
import { render } from '@testing-library/react';

import Page from '../../pages/index';

describe('Index', () => {
  test('should do a thing', () => {
    const result = render(<Page />);

    expect(result).toBeDefined();
  });
});
