import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardSummary } from '../actions/dashboardActions';

const DashboardScreen = () => {
    const dispatch = useDispatch();

    const dashboardSummary = useSelector((state) => state.dashboardSummary);
    const { loading, error, summary } = dashboardSummary;

    useEffect(() => {
        dispatch(getDashboardSummary());
    }, [dispatch]);

    return (
        <div>
            <h1>Dashboard</h1>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div>
                    <div>Total Sales: ${summary.totalSales}</div>
                    <div>Total Orders: {summary.totalOrders}</div>
                    <div>Total Users: {summary.totalUsers}</div>
                </div>
            )}
        </div>
    );
};

export default DashboardScreen;
