import React from 'react';

import { Table } from 'antd'
import _ from 'lodash';


class StudentTable extends React.Component {
    state = {

    };

    componentDidMount = () => {

    }

    render() {

        const dataSource = [];
        _.forEach(this.props.students, function (dataItem, index) {
            dataSource.push({
                key: index,
                studentName: dataItem.name.first + ' ' + dataItem.name.last,
                email: dataItem.email,
                phone: dataItem.phone,
                rank: dataItem.rank,
                mark: dataItem.mark,
                class: dataItem.class
            });

        });

        const columns = [{
            title: 'Student Name',
            dataIndex: 'studentName',
            key: 'studentName',
        },
        {
            title: 'Class',
            dataIndex: 'class',
            key: 'class',
        },
        {
            title: 'Rank',
            dataIndex: 'rank',
            key: 'rank',
        },
        {
            title: 'Marks',
            dataIndex: 'mark',
            key: 'mark',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        }
        ];

        return (
            <div>
                <Table dataSource={dataSource} columns={columns} size='small' bordered />
            </div>
        );
    }
}


export default StudentTable;