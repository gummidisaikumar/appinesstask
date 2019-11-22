import React from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import RenderPage from "../../customComponent/common/RenderPage/RenderPage";
import Strip from "../../customComponent/common/Strip/Strip";
import { applicationContants } from "../../constants/applicationContants";
import employee from "../../../modules/redux/actions/employeeActions";
import FormValidator from "../../../utilies/FormValidator";
import IsInputInError from "../../../utilies/isInputInError";

class Login extends React.Component {
  
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        field: 'emailId',
        constraints: [{ method: 'isEmpty', validWhen: false, message: 'Email is required.' },
          { method: 'isEmail', validWhen: true, message: 'That is not a valid email.' }],
        touched: false,
      },
      {
        field: 'password',
        constraints: [{ method: 'isEmpty', validWhen: false, message: 'Password is required.' },
          {
            method: 'isLength', validWhen: true, message: 'Password should be between 6 to 10 characters long.', args: [{ min: 6, max: 10 }],
          }],
        touched: false,
      },
    ]);

    this.state = {
      emailId: "",
      password: "",
      validation: this.validator.valid(),
    };
  
    this.isValidate = true;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.getEmployee();
  }

  handleInputChange(event) {
    event.preventDefault();
    this.validator.touched(event.target.name);
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
    const validation = this.isValidate ? this.validator.validate(this.state) : this.state.validation;
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
            <Col xs={8} sm={8} md={8} lg={3} xl={3}>
              <Form
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
                  <div className={IsInputInError(validation.emailId.isInvalid)}>
                  <Input
                    placeholder="emailId"
                    type="text"
                    name="emailId"
                    valid={false}
                    className="common-form-control"
                    onChange={this.handleInputChange}
                    value={this.state.emailId}
                  />
                     <p className="p-small external-help-block">{validation.emailId.message}</p>
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label>
                    <p className="p-medium page__title title-black align-left mb-8px">
                      Password
                    </p>
                  </Label>
                  <div className={IsInputInError(validation.password.isInvalid)}>
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
                    <p className="p-small external-help-block">{validation.password.message}</p>
                  </div>
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
