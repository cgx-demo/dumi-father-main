import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AntdPickers from '../index';

describe('Demo test AntdPickers', () => {
  it('test render', async () => {
    const hangeChange = (value) => {
      console.log(value);
    };
    render(<AntdPickers handleChange={hangeChange} labelText="555" />);
    await waitFor(() => screen.getByText('555'));
    expect(screen.getByText('555')).toBeInTheDocument();
  });
});
