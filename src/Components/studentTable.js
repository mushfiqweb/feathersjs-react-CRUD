import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd'
import {  Button } from 'semantic-ui-react'
import _ from 'lodash';


class StudentTable extends React.Component {
    state = {

    };

    componentDidMount = () => {

    }

    onCellClick = (record, event) => {
        console.log(record);
        console.log(event);
    }


    sendEmail = (student) => {
        console.log(student);
    }

    render() {

        const dataSource = [];
        _.forEach(this.props.students, function (dataItem, index) {
            dataSource.push({
                id: dataItem._id,
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
        },
        {
            title: 'Action',
            key: 'action',

            render: (record) =><span>
                                <Link to={`/student/${record.id}`}> <strong>Edit</strong> </Link>
                                <span className="ant-divider" />
                                <Button content='Send' icon='mail' labelPosition='left' size='mini' onClick={record => console.log(record)} />
                               </span>

        }
        ];



        return (
            <div>
                <Table dataSource={dataSource} columns={columns} size='small' bordered onCellClick={this.onCellClick} />
            </div>
        );
    }
}


export default StudentTable;