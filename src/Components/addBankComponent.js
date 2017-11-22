import React, { Component } from 'react'
import { Input, Label, Icon, Message, Button } from 'semantic-ui-react'

class AddBankComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div style={{ margin: '0 auto', display: 'table' }} >
                <Input placeholder='IBN' />
            </div>
        )
    }
}

export default AddBankComponent;