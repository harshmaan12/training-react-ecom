import { render, screen } from '@testing-library/react';
// import App from './App';
import Banner from './homepageBanner';

test('renders learn react link', () => {
  render(<Banner />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
