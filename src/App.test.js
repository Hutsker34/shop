import { getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import articleReducer from './components/Article/articleSlice'
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './components/filters/filtersSlice'
import headerReducer from './components/Header/headerSlice'
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
 }));


const createStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      article: articleReducer,
      filters: filtersReducer,
      header: headerReducer
    },
    preloadedState: initialState,
  });
};


test('renders ampty states', () => {
  const store = createStore({ article: { filteredProducts: [] } });
  render(
    <BrowserRouter>
       <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter> 
    );
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});

test('render states with products', () => {
  const store = createStore({ article: { filteredProducts: [{}] } });
  render(
    <BrowserRouter>
       <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
    );
  const linkElement = screen.queryByText(/loading/i);
  expect(linkElement).toBeNull();
  
})




  it('calls onClick prop when checkbox is clicked', () => {
    const store = createStore({ article: { filteredProducts: [{}] } });
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
      </BrowserRouter>
      );
      const type_Tshirt = getByTestId('t-shirt')
      const type_pants = getByTestId('pants')
      const highPrice = getByTestId('highPrice')
      const type_glass = getByTestId('glass')
      const find_btn = getByTestId('test_find-btn')

      fireEvent.change(type_Tshirt, { target: { checked: true } });
      fireEvent.change(type_pants, { target: { checked: true } });
      fireEvent.change(highPrice, { target: { value: '70' } });
      fireEvent.change(type_glass, { target: { checked: true } });
      fireEvent.click(find_btn)

      expect(store[0].id).toBe(16)
  });

  