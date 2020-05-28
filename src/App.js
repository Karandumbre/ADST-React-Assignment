import React, { Component } from 'react'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import { connect } from 'react-redux';
import { fetchInitialRequest } from './Redux/action'
import Loader from './Core/loader/loader';
import Error from './Components/Error/Error';
export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      browser: '',
      UTM_PARAMETERS: {},
      isMobile: false,
      NewUser: false,
      GeoLocation: {}
    }
  }

  componentDidMount() {
    this.props.fetchInitialRequest();
    this.fetchURLParameters();
    this.detectBrowser();
    this.isMobile();
    this.isNewUser();
    this.getLocation();
  }

  fetchURLParameters() {
    const paramsKey = {};
    const params = document.location.search.slice(1).split('&');
    params.forEach(element => {
      if (element) {
        paramsKey[element.split('=')[0]] = element.split('=')[1]
      }
    });

    if (document.referrer.length > 0) {
      paramsKey.RequestFrom = document.referrer;
    } else {
      paramsKey.RequestFrom = 'Came Directly';
    }

    if (Object.keys(paramsKey).length > 0) {
      this.changeState('UTM_PARAMETERS', paramsKey);
    }
  }

  detectBrowser() {
    var browser = (function () {
      var test = function (regexp) {
        return regexp.test(window.navigator.userAgent);
      }
      switch (true) {
        case test(/edg/i): return "edge";
        case test(/opr/i) && (!!window.opr || !!window.opera): return "opera";
        case test(/chrome/i) && !!window.chrome: return "chrome";
        case test(/trident/i): return "ie";
        case test(/firefox/i): return "firefox";
        case test(/safari/i): return "safari";
        default: return "other";
      }
    })();

    this.changeState('browser', browser)
  }

  isMobile() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      this.changeState('isMobile', true);
    } else {
      this.changeState('isMobile', false);
    }
  }

  getLocation() {
    const location = {};
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        location.latitude = position.coords.latitude;
        location.longitude = position.coords.longitude;
        this.changeState('GeoLocation', location);
        this.displayDetails(this.state);
        console.log(this.state);
      }, () => {
        this.displayDetails(this.state);
        console.log(this.state);
      });
    }
  }

  displayDetails(data) {
    alert(`User Data = { 
      Browser: ${data.browser},
      UTM_PARAMETERS: ${JSON.stringify(data.UTM_PARAMETERS)}, 
      IsMobile: ${data.isMobile}, 
      New_User: ${data.NewUser}, 
      Geo_Location: ${JSON.stringify(data.GeoLocation)}
    }`)
  }

  changeState(variable, value) {
    if (this.state[variable] !== undefined) {
      this.setState({
        [variable]: value
      });
    } else {
      console.log(`State variable ${variable} not present`);
    }
  }


  isNewUser() {
    const user = localStorage.getItem('ATU');
    if (!user) {
      localStorage.setItem('ATU', 'true');
      this.changeState('NewUser', true);
    } else if (user === 'true') {
      this.changeState('NewUser', false);
    }
  }


  render() {
    const isLoading = this.props.CurrentState.loading ? <Loader /> : '';
    const error = this.props.CurrentState.error ? <Error /> : <Dashboard />
    return (
      <div className="Ad-Triangle-Call-Widget-App">
        {isLoading}
        {error}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitialRequest: () => dispatch(fetchInitialRequest())
  }
}

const mapStateToProps = (state) => {
  return {
    CurrentState: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);