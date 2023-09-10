import { getByTestId, render, screen , waitFor} from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import articleReducer from './components/Article/articleSlice'
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './components/filters/filtersSlice'
import headerReducer from './components/Header/headerSlice'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import axios from 'axios'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
 }));

 jest.mock('axios');


  axios.post.mockResolvedValue({ data: [] })
  axios.get.mockResolvedValue({ data: [] });
 

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




  it('calls onClick prop when checkbox is clicked', async () => {
    const store = createStore({ article: { filteredProducts: [{}] } });
    const spy = jest.spyOn(store, 'dispatch');
    const expectedUrl = "http://127.0.0.1:8000/products_search/"; 

    const expectedPayload = {
      "highPrice": 500,
      "lowPrice": undefined,
      "searchValue": "",
      "selectedColors": [],
      "selectedTypes": [],
    };

    

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

      

      userEvent.click(type_glass);
      userEvent.click(type_pants);
      userEvent.click(find_btn)

      

      expect(spy).toHaveBeenCalledWith({ type: 'filters/setProductType' ,payload: {id : 'glass', checked: true}});
      expect(spy).toHaveBeenCalledWith({ type: 'filters/setProductType' ,payload: {id : 'pants', checked: true}});
      await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith(expectedUrl, expectedPayload);
    });

  });
  