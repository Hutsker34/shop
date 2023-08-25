import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import articleReducer, {closeModal, decrement} from '../Article/articleSlice';
import Modalka from './Modalka';

// Создаем мок для dispatch
const mockDispatch = jest.fn();
describe('Modalka', () => {
    let store;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const renderWithRedux = (component, { initialState } = {}) => {
        store = configureStore({
            reducer: {
                article: articleReducer,
            },
            preloadedState: initialState,
        });
        return {
            ...render(<Provider store={store}>{component}</Provider>),
            store,
        };
    };

    test('renders modal when visible is true', () => {
        const initialState = {
            article: {
                product: { id: 1 },
                visible: true
            }
        };

        const { getByText } = renderWithRedux(<Modalka />, { initialState });

        expect(getByText("are you sure?")).toBeInTheDocument();
    });

    test('does not render modal when visible is false', () => {
        const initialState = {
            article: {
                product: { id: 1 },
                visible: false
            }
        };

        const { queryByText } = renderWithRedux(<Modalka />, { initialState });

        expect(queryByText("are you sure?")).toBeNull();
    });
});
