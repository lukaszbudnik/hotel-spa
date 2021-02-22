import React from "react";
import Keycloak from "keycloak-js";

const apiUrl = "https://api.localtest.me/";

function SignInButton(props) {
  return (
    <a
      className="btn btn-outline-primary"
      href="#signin"
      onClick={props.onClick}
    >
      Sign in
    </a>
  );
}

function SignOutButton(props) {
  return (
    <a
      className="btn btn-outline-primary"
      href="#signout"
      onClick={props.onClick}
    >
      Sign out
    </a>
  );
}

function SignInOutButton(props) {
  if (props.authenticated) {
    return <SignOutButton onClick={props.signOutClick} />;
  }
  return <SignInButton onClick={props.signInClick} />;
}

function UserGreeting(props) {
  return (
    <div>
      <h1 className="display-4">Welcome {props.name}!</h1>{" "}
      <p className="lead">
        There are 3 services in this demo, click on each one to see its
        response.
      </p>
      <p className="lead">
        You have the following roles: {props.roles?.join(", ")}
      </p>
    </div>
  );
}

function GuestGreeting(props) {
  return (
    <div>
      <h1 className="display-4">Please sign in!</h1>
      <p className="lead">Before continuing you need to sign in.</p>
    </div>
  );
}

function Greeting(props) {
  if (props.authenticated) {
    return <UserGreeting name={props.name} roles={props.roles} />;
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
          <button
            type="button"
            className="w-100 btn btn-lg btn-primary"
            onClick={() => props.onClick(props.name, props.keycloak)}
          >
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
    this.state = {};
    this.handleApiCall = this.handleApiCall.bind(this);
  }

  handleApiCall(service, keycloak) {
    fetch(apiUrl + service, {
      headers: new Headers({
        Authorization: "Bearer " + keycloak.token,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          response:
            "got response from " +
            service +
            ":\n" +
            JSON.stringify(responseJson, null, 2),
        });
      })
      .catch((err) => {
        this.setState({
          response: "could not get response from " + service + ":\n" + err,
        });
      });
  }

  render() {
    if (!this.props.authenticated) {
      return null;
    }
    return (
      <div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <Service
            name="cocinera"
            onClick={this.handleApiCall}
            keycloak={this.props.keycloak}
          />
          <Service
            name="camarero"
            onClick={this.handleApiCall}
            keycloak={this.props.keycloak}
          />
          <Service
            name="doncella"
            onClick={this.handleApiCall}
            keycloak={this.props.keycloak}
          />
        </div>
        <pre>{this.state?.response}</pre>
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
    this.state.keycloak.logout();
  }

  componentDidMount() {
    const keycloak = Keycloak("./keycloak.json");
    keycloak.init({ onLoad: "check-sso" }).then((authenticated) => {
      if (authenticated) {
        keycloak.loadUserInfo().then((userInfo) => {
          this.setState({
            name: userInfo.name,
            email: userInfo.email,
            id: userInfo.sub,
            roles: keycloak.tokenParsed.realm_access.roles,
          });
        });
      }
      this.setState({ keycloak: keycloak, authenticated: authenticated });
    });
  }

  render() {
    return (
      <div>
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
          <p className="h5 my-0 me-md-auto fw-normal">Hotel</p>
          <SignInOutButton
            authenticated={this.state.authenticated}
            signInClick={this.handleSignInClick}
            signOutClick={this.handleSignOutClick}
          />
        </header>

        <main className="container">
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <Greeting
              authenticated={this.state.authenticated}
              name={this.state.name}
              roles={this.state.roles}
            />
          </div>
          <Services
            authenticated={this.state.authenticated}
            keycloak={this.state.keycloak}
          />
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
