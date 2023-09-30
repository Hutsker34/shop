import { getByTestId, render, screen , waitFor } from '@testing-library/react';
import { fireEvent} from '@testing-library/react'
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
import { act } from "react-dom/test-utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
 }));

 jest.mock('axios');

const testProducts = [
  {
      "id": 20,
      "name": "pink T-shirt",
      "cost": 101,
      "img": "/media/assets/pink__t-shirt.png",
      "color": "red",
      "type": "t-shirt"
  },
  {
      "id": 22,
      "name": "pink skirt",
      "cost": 91,
      "img": "/media/assets/Pink-Skirt.png",
      "color": "red",
      "type": "skirt"
  },
  {
      "id": 27,
      "name": "pink pants",
      "cost": 67,
      "img": "/media/assets/pink-pants.png",
      "color": "red",
      "type": "pants"
  }
];
  
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


test('renders ampty states', async () => {
  const store = createStore({ article: { filteredProducts: undefined } });

  await act( async() =>{
    render(
    <BrowserRouter>
       <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter> 
    )})
    
  const linkElement = screen.getByText(/нет результатов поиска по вашему запросу/i);
  expect(linkElement).toBeInTheDocument();
});

test('render states with products', async () => {
  const store = createStore({ article: { filteredProducts: [{}] } });
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });
  const linkElement = screen.queryByText(/loading/i);
  expect(linkElement).toBeNull();
});




  it('calls onClick prop when checkbox is clicked', async () => {
    const store = createStore({ article: { filteredProducts: [{}] } });
    const spy = jest.spyOn(store, 'dispatch');
    const expectedUrl = "http://127.0.0.1:8000/products_search/"; 

    const expectedPayload = {
      "highPrice": 70,
      "lowPrice": undefined,
      "searchValue": "",
      "selectedColors": [],
      "selectedTypes": ['glass','pants','t-shirt'],
    };

    axios.post.mockResolvedValue({ data: [] }) 
    
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
      userEvent.click(type_Tshirt);
      fireEvent.change(highPrice, { target: { value: 70 }})
      userEvent.click(find_btn)
      
      

      expect(spy).toHaveBeenCalledWith({ type: 'filters/setProductType' ,payload: {id : 'glass', checked: true}});
      expect(spy).toHaveBeenCalledWith({ type: 'filters/setProductType' ,payload: {id : 'pants', checked: true}});
      expect(spy).toHaveBeenCalledWith({ type: 'filters/setProductType' ,payload: {id : 't-shirt', checked: true}});
      expect(spy).toHaveBeenCalledWith({ type: 'filters/setHighPrice' ,payload: 70});
      await waitFor(() => {
        
        expect(axios.post).toHaveBeenCalledWith(expectedUrl, expectedPayload);
    });
    

  });

  

  it('calls onClick prop when search bar and checkbox is clicked', async () => {
    const store = createStore({ article: { filteredProducts: [{}] } });
    const spy = jest.spyOn(store, 'dispatch');
    const expectedUrl = "http://127.0.0.1:8000/products_search/"; 

    const expectedPayload = {
      "highPrice": 500,
      "lowPrice": undefined,
      "searchValue": "pink",
      "selectedColors": [],
      "selectedTypes": [],
    };

    axios.post.mockImplementationOnce(() => Promise.resolve({data:testProducts}));

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
      </BrowserRouter>
      );
     
      const searchbar = getByTestId('searchbar')
      const highPrice = getByTestId('highPrice')
      
      userEvent.type(searchbar, 'pink');
      userEvent.keyboard('{enter}')
      fireEvent.change(highPrice, { target: { value: 70 }})
    
      expect(spy).toHaveBeenCalledWith({ type: "header/getSearchValue" ,payload: 'p'});
      expect(spy).toHaveBeenCalledWith({ type: "header/getSearchValue" ,payload: 'pi'});
      expect(spy).toHaveBeenCalledWith({ type: "header/getSearchValue" ,payload: 'pin'});
      expect(spy).toHaveBeenCalledWith({ type: "header/getSearchValue" ,payload: 'pink'});
      await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith(expectedUrl, expectedPayload);
    });
    
    expect(spy).toHaveBeenCalledWith({ type: "article/getFiltredProducts" ,payload: testProducts});
    const productOneElement = screen.queryByText(testProducts[0].name);
    const productTwoElement = screen.queryByText(testProducts[1].name);
    

    const nonExpectionProduct = screen.queryByText('123123');


    expect(productOneElement).toBeTruthy();
    expect(productTwoElement).toBeTruthy();
    


    expect(nonExpectionProduct).toBeNull();
    

  });