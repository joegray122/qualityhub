import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { userRows } from '../../data/mockUsers';

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            renderCell: (params) => (
                <div className="userListUser">
                    <img className="userListImg" src={require('../../data/sad_bee.png')} alt="" />
                    {params.row.username}
                </div>
            ),
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <>
                    <Link to={`/user/${params.row.id}`}>
                        <button className="userListEdit" type="button">
                            Edit
                        </button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                </>
            ),
        },
    ];

    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    );
}
