import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import RenderPage from "../../customComponent/common/RenderPage/RenderPage";
import Strip from "../../customComponent/common/Strip/Strip";
import { applicationContants } from "../../constants/applicationContants";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    console("logindetails", this.state);
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
                      <img src={applicationContants.appinessLogoImg} alt="appiness"/>
                    </Col>
                  </Row>
                </Col>
                <FormGroup>
                  <Label className="p-medium page__title title-black align-left mb-8px">
                    UserName
                  </Label>
                  <Input
                    placeholder="userName"
                    type="text"
                    name="userName"
                    valid={false}
                    className="common-form-control"
                    onChange={this.handleInputChange}
                    value={this.state.userName}
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
                    <Col xs={8} sm={8} md={5} lg={5} xl={5} className="text-right">
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

export default Login;
