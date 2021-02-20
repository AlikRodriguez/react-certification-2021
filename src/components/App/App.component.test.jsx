import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('App', () => {
  it('shoud render App initial state', () => {
    render(<App />);
    expect(screen.getByText('Welcome back!')).toBeTruthy();
  });

  it('should be redirected to login', () => {
    const { container } = render(<App />);

    expect(container).toBeTruthy();
  });
});
