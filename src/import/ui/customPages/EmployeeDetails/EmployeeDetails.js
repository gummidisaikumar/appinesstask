import React from "react";
import { Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import RenderPage from "../../customComponent/common/RenderPage/RenderPage";
import Strip from "../../customComponent/common/Strip/Strip";
import EmployeeList from "../../customComponent/common/EmployeeList/EmployeeList";
import employee from "../../../modules/redux/actions/employeeActions";

class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    this.props.getEmployee();
  }
  navigate(){
    this.props.history.push('/dashboard');
  }
  render() {
    const { props } = this;
    return (
      <RenderPage className="render-page" containerType="container-fluid">
        <Strip
          className="strip strip--short"
          containerType="container"
          id="tst-dashboard"
        >
          <Row>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <h5 className="internal-section mb-0">Employee List</h5>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="text-right">
              <Button onClick={this.navigate}>Dashboard</Button>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-12px">
              <hr />
            </Col>
          </Row>
          {props.data.employee ? (
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <EmployeeList employeeList={props.data.employee} />
              </Col>
            </Row>
          ) : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);
