import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Card from './Card.component';

describe('Card', () => {
  let propsCard;
  beforeEach(() => {
    propsCard = {
      title: 'test title',
      url: 'url.com',
      description: 'test description long test',
      thumbnail: 'url.com',
    };
  });
  it('should render the component', () => {
    const utils = render(
      <MemoryRouter>
        <Card {...propsCard} />
      </MemoryRouter>
    );
    expect(utils.container).toBeTruthy();
  });
  it('should render the component', () => {
    const utils = render(
      <MemoryRouter>
        <Card {...propsCard} />
      </MemoryRouter>
    );
    expect(utils.getByText('test title')).toBeInTheDOM();
  });
});
