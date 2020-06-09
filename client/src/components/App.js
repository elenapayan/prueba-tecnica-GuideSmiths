import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import API from '../services/phoneService';
import '../sytlesheets/App.css';
import '../sytlesheets/Spinner.css';
import PhoneDetails from './PhoneDetails';
import PhoneList from './PhoneList';
import Spinner from './Spinner';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      phoneStore: []
    }
    this.renderPhoneDetail = this.renderPhoneDetail.bind(this);
  }

  async componentDidMount() {
    const response= await API.get();
    this.setState({ phoneStore: response.data })
  }

  renderPhoneDetail(props) {
    if (this.state.phoneStore) {
      console.log(props.match.params.id);
      const routeId = parseInt(props.match.params.id);
      const phone = this.state.phoneStore.find(phone => phone.id === routeId);
      if (phone) {
        return (
          <PhoneDetails phone={phone} />
        )
      } else {
        const route = '/';
        return (
          <div>
            <p>No disponible</p>
            <Link to={route}>Volver a la home</Link>
          </div>
        );
      }
    } else {
      return (
        <Spinner/>
      )
    }
  }

  render() {
    console.log(this.state.phoneStore);
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            {(this.state.phoneStore.length > 0) ? <PhoneList phones={this.state.phoneStore} /> : <Spinner/>}
          </Route>
          <Route path="/phone/:id" exact strict render={this.renderPhoneDetail}></Route>
          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;



