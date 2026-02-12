import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Vite \+ React/i)
  expect(linkElement).toBeInTheDocument()
})

test('button exists', () => {
  render(<App />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})