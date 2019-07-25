import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import ApiRestService from '../../services/api';
import { getQueryParams } from '../../utils/query';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 3,
    total: 0
  });
  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: src => <img style={{ width: 50 }} src={src} alt="" />
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name'
    }, {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name'
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    }
  ];

  const onQueryChange = p => {
    setPagination(p);
    const nQuery = getQueryParams({ page: p.current });
    setQuery(nQuery);
  }

  useEffect(() => {
    const getListUsers = async () => {
      try {
        setLoading(true);
        const { data } = await ApiRestService.getListUsers(query);
        setUsers(data.data);
        setPagination(p => {
          return { ...p, total: data.total }
        });
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    }
    getListUsers();
  }, [query]);

  return (
    <Table
      dataSource={users}
      columns={columns}
      size="middle"
      rowKey={dataSource => dataSource.id}
      pagination={pagination}
      onChange={onQueryChange}
      loading={loading}
    />
  );
}

export default Users;