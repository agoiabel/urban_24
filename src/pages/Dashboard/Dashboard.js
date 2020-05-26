import React from 'react';
import Table from '../../components/Table';
import Button from '../../components/Button';
import styles from './Dashboard.module.scss';
import AppLayout from '../../components/AppLayout';
import { useDispatch, useSelector } from "react-redux";

const Dashboard = props => {

    return (
        <AppLayout title={'Dashboard'}>

            <Table
                url={'user/index'}
                show_url={{
                    url: '/user',
                    key: '_id'
                }}
                columns={[
                    {
                        key: 'firstname',
                        title: 'Firstname',
                        cell: 'Default',
                    },
                    {
                        key: 'lastname',
                        title: 'Lastname',
                        cell: 'Default',
                    },
                    {
                        key: 'email',
                        title: 'Email',
                        cell: 'Default',
                    },
                    {
                        key: 'phonenumber',
                        title: 'Phone number',
                        cell: 'Default',
                    },
                    {
                        key: 'state',
                        title: 'State',
                        cell: 'Default',
                    },
                    {
                        key: 'gender',
                        title: 'Gender',
                        cell: 'Default',
                    },
                    {
                        key: 'date_of_birth',
                        title: 'Date of birth',
                        cell: 'Default',
                    },
                    {
                        key: 'is_selected',
                        title: 'Selected',
                        cell: 'Default',
                    },
                ]}
                actions={[
                    {
                        key:'SELECT',
                        name: 'SELECT',
                        url: 'user/status_update'
                    },
                    {
                        key:'DELETE',
                        name: 'DELETE',
                        url: 'user/delete'
                    },
                ]}
                filters={[
                    {
                        value: true,
                        key:'is_selected',
                        label: 'All Selected',
                    },
                    {
                        value: false,
                        key:'is_selected',
                        label: 'All Unselected',
                    },
                ]}
            />
        </AppLayout>
    )
}

export default Dashboard;