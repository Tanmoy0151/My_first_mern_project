import { render, screen } from '@testing-library/react';
import ProductScreen from './ProductScreen';

test('renders product details', () => {
    render(<ProductScreen match={{ params: { id: '1' } }} />);
    const linkElement = screen.getByText(/Product Details/i);
    expect(linkElement).toBeInTheDocument();
});
