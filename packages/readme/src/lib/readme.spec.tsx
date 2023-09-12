import { render } from '@testing-library/react';

import Readme from './readme';

describe('Readme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Readme />);
    expect(baseElement).toBeTruthy();
  });
});
