import axios from 'axios';
import {
    DASHBOARD_SUMMARY_REQUEST,
    DASHBOARD_SUMMARY_SUCCESS,
    DASHBOARD_SUMMARY_FAIL,
} from '../constants/dashboardConstants';

export const getDashboardSummary = () => async (dispatch, getState) => {
    try {
        dispatch({ type: DASHBOARD_SUMMARY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get('/api/orders/summary', config);

        dispatch({ type: DASHBOARD_SUMMARY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: DASHBOARD_SUMMARY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
