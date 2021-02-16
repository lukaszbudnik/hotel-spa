import React from "react";
import Keycloak from "keycloak-js";

function LoginButton(props) {
  return (
    <a className="btn btn-outline-primary" href="#" onClick={props.onClick}>
      Sign in
    </a>
  );
}

function LogoutButton(props) {
  return (
    <a className="btn btn-outline-primary" href="#" onClick={props.onClick}>
      Sign out
    </a>
  );
}

function UserGreeting(props) {
  return <h1 className="display-4">Welcome {props.name}!</h1>;
}

function GuestGreeting(props) {
  return <h1 className="display-4">Please sign in!</h1>;
}

function Greeting(props) {
  const authenticated = props.authenticated;
  if (authenticated) {
    return <UserGreeting name={props.name} />;
  }
  return <GuestGreeting />;
}

function Service(props) {
  return (
    <div className="col">
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 fw-normal">{props.name}</h4>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4">
            <li>requires {props.name} role</li>
            <li>uses lukasz/yosoy service</li>
          </ul>
          <button type="button" className="w-100 btn btn-lg btn-primary" onClick={() => props.onClick(props.name, props.keycloak)}>
            Call
          </button>
        </div>
      </div>
    </div>
  );
}

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.setState({});
    this.handleApiCall = this.handleApiCall.bind(this);
  }

  handleApiCall(service, keycloak) {
    console.log('About to call ' + service);
    console.log('Response: ' + keycloak)
    console.log('Response: ' + keycloak.token)
    setTimeout(() => {
      this.setState({response: 'hello ' + ' from ' + service + ' ' +  keycloak.token});
    }, 7000);
  }

  render() {
    return (
      <div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <Service name="cocinera" onClick={this.handleApiCall} keycloak={this.props.keycloak} />
        <Service name="camarero" onClick={this.handleApiCall} keycloak={this.props.keycloak} />
        <Service name="doncella" onClick={this.handleApiCall} keycloak={this.props.keycloak} />
      </div>
      <pre>
        {this.state?.response}
      </pre>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.handleSignOutClick = this.handleSignOutClick.bind(this);
    this.state = { authenticated: false };
  }

  handleSignInClick() {
    this.state.keycloak.login();
  }

  handleSignOutClick() {
    this.setState({ authenticated: false });
  }

  componentDidMount() {
    const keycloak = Keycloak("/keycloak.json");
    keycloak.init({ onLoad: "check-sso" }).then((authenticated) => {
      if (authenticated) {
        keycloak.loadUserInfo().then((userInfo) => {
          this.setState({
            name: userInfo.name,
            email: userInfo.email,
            id: userInfo.sub,
          });
        });
        console.log(keycloak.tokenParsed)
      }
      this.setState({ keycloak: keycloak, authenticated: authenticated });
    });
  }

  render() {
    const authenticated = this.state.authenticated;
    const name = this.state.name;

    let button;
    if (authenticated) {
      button = <LogoutButton onClick={this.handleSignOutClick} />;
    } else {
      button = <LoginButton onClick={this.handleSignInClick} />;
    }

    let info;
    if (authenticated) {
      info = (
        <p className="lead">
          There are 3 services in this demo, click on each one to see its
          response.
        </p>
      );
    } else {
      info = <p className="lead">Before continuing you need to sign in.</p>;
    }

    let services;
    if (authenticated) {
      services = <Services keycloak={this.state.keycloak} />;
    }

    return (
      <div>
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
          <p className="h5 my-0 me-md-auto fw-normal">Hotel</p>
          {button}
        </header>

        <main className="container">
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <Greeting authenticated={authenticated} name={name} />
            {info}
          </div>

          {services}

          <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
              <div className="col-12 col-md">
                <small className="d-block mb-3 text-muted">
                  © Łukasz Budnik 2021
                </small>
              </div>
            </div>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
