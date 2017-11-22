import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Segment, Header, Label, Menu } from 'semantic-ui-react';
import StudentFormPage from './Pages/studentForm.Page';
import StudentListPage from './Pages/studentList.Page'
import StudentTablePage from './Pages/studentTable.page'

const style = {

  h3: {
    fontSize: '2em',
    margin: '0px 0px -40px 0px'
  }
}
class App extends Component {

  state = {
    activeItem: 'home'
  }

  componentDidMount = () => {
    this.props.history.push('/home');
  }
  

  menuHandler = (e, data) => {
    switch (data.name) {
      case 'home':
        this.setState({ activeItem: 'home' });
        this.props.history.push('/home');
        break;
        //Student Cards
      case 'Student Cards':
        this.setState({ activeItem: 'Student Cards' });
        this.props.history.push('/cards');
        break;
      case 'addnew':
        this.setState({ activeItem: 'addnew' });
        this.props.history.push('/addnew');
        break;

      default:
        break;
    }
  }




  render() {
    return (
      <div>
        <Segment style={{ minHeight: '85vh' }}>
          <Segment color='teal' >
            <Header content='feathersjs-student-crud' textAlign='center' style={style.h3} />
            <Menu pointing secondary>
              <Menu.Item as='a' name='home' active={this.state.activeItem === 'home'} onClick={this.menuHandler} />
              <Menu.Item as='a' name='addnew' active={this.state.activeItem === 'addnew'} onClick={this.menuHandler} />
              <Menu.Item as='a' name='Student Cards' active={this.state.activeItem === 'Student Cards'} onClick={this.menuHandler} />
            </Menu>
          </Segment>

          <Segment style={{ minHeight: '75vh' }}>
            <Switch>
              <Route path="/home" component={StudentTablePage} />
              <Route path="/cards" component={StudentListPage} />
              <Route path="/addnew" component={StudentFormPage} />
              <Route path="/student/:_id" component={StudentFormPage} />
            </Switch>
          </Segment>
        </Segment>

        <Header as='h5' textAlign='center'>
          <Label color='grey'>
            hello@mushfiqurs.com
          </Label>
        </Header>
      </div>
    );
  }
}


export default App;
