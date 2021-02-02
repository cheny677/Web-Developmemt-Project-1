import { render } from '@testing-library/react';
import App from './App';
import Login from './react-components/Login'
import MainPage from './react-components/MainPage'
import DetailPage from './react-components/DetailPage'

test('renders app', () => {
  render(<App />);
});

test('renders login', () => {
  render(<Login />);
});

test('renders mainPage', () => {
  render(<MainPage />);
});

test('renders detailPage', () => {
  render(<DetailPage />);
});
