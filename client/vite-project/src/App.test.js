import {screen, render } from '@testing-library/react'
import App from './App.jsx'

test('should first', () => { 
    render(<App />);

    const element = screen.getByText('RealTORR')
    expect(element).toBeInTheDocument();
 })