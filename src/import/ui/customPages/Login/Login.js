import React from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import RenderPage from "../../customComponent/common/RenderPage/RenderPage";
import Strip from "../../customComponent/common/Strip/Strip";
import { applicationContants } from "../../constants/applicationContants";
import employee from "../../../modules/redux/actions/employeeActions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.getEmployee();
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const emailId = this.state.emailId;
    const pwd= this.state.password;

    // const data = this.props.data.employee.find(function(item){
    //   if(item.email == emailId){
    //     return item.email;
    //   }
    // });

    if (applicationContants.emailId == emailId && applicationContants.password == pwd) {
     // this.props.history.push("/dashboard");
      this.props.history.push("/employeeList");
    }
    //  else if(data && data.email == emailId) {
    //   this.props.history.push("/employeeList");
    // }
  }

  render() {

    return (
      <RenderPage
        className="render-page render-no-page min-height-full"
        containerType="container-fluid"
      >
        <Strip
          className="strip strip--short min-height-full"
          containerType="container"
          id="tst-login"
        >
          <Row className="justify-content-center min-height-full align-items-center">
            <Col xs={8} sm={8} md={4} lg={3} xl={3}>
              <Form
                ref={form => (this.form = form)}
                onSubmit={event => event.preventDefault()}
              >
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Row className="justify-content-center pb-24px">
                    <Col xs={8} sm={8} md={5} lg={5} xl={5}>
                      <img
                        src={applicationContants.appinessLogoImg}
                        alt="appiness"
                      />
                    </Col>
                  </Row>
                </Col>
                <FormGroup>
                  <Label className="p-medium page__title title-black align-left mb-8px">
                  EmailId
                  </Label>
                  <Input
                    placeholder="emailId"
                    type="text"
                    name="emailId"
                    valid={false}
                    className="common-form-control"
                    onChange={this.handleInputChange}
                    value={this.state.emailId}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    <p className="p-medium page__title title-black align-left mb-8px">
                      Password
                    </p>
                  </Label>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    valid={false}
                    maxLength={10}
                    className="common-form-control"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                  />
                </FormGroup>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Row className="justify-content-end pb-24px">
                    <Col
                      xs={8}
                      sm={8}
                      md={5}
                      lg={5}
                      xl={5}
                      className="text-right"
                    >
                      <Button
                        type="submit"
                        id="tst-btn-login"
                        className="btn custom-btn-viking-blue"
                        onClick={this.handleSubmit}
                      >
                        Login
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Form>
            </Col>
          </Row>
        </Strip>
      </RenderPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.employee
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployee: () => {
      dispatch(employee);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
