import React from "react";
import { Row, Col, Button } from "reactstrap";
import RenderPage from "../../customComponent/common/RenderPage/RenderPage";
import Strip from "../../customComponent/common/Strip/Strip";
import { EmployeeData } from "../../../utilies/EmployeeData";
import EmployeeList from "../../customComponent/common/EmployeeList/EmployeeList";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: EmployeeData
    };;
    this.navigate = this.navigate.bind(this);
  }

  navigate(){
    this.props.history.push('/employeeList')
  }
  render() {
    const { employeeList } = this.state;

    return (
      <RenderPage className="render-page" containerType="container-fluid">
        <Strip
          className="strip strip--short"
          containerType="container"
          id="tst-dashboard"
        >
           <Row>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <h5 className="internal-section mb-0">Dashboard</h5>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="text-right">
              <Button onClick={this.navigate}>Employee List</Button>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-12px">
             <hr/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <EmployeeList employeeList={employeeList}/>
            </Col>
          </Row>
        </Strip>
      </RenderPage>
    );
  }
}

export default Dashboard;
