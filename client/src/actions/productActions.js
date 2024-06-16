import axios from 'axios';
import {
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
} from '../constants/productConstants';

export const createProduct = (name, price, description, image) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(
            '/api/products',
            { name, price, description, image },
            config
        );

        dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
