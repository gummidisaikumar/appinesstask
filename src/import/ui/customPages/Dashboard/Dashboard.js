import React from "react";
import { Row, Col, Table } from "reactstrap";
import RenderPage from "../../customComponent/common/RenderPage/RenderPage";
import Strip from "../../customComponent/common/Strip/Strip";
import { EmployeeData } from "../../../utilies/EmployeeData";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: EmployeeData
    };
  }
  render() {
    const { employeeList } = this.state;
    console.log("sas", this.state.employeeList);
    return (
      <RenderPage className="render-page render-no-page" containerType="container-fluid">
        <Strip
          className="strip strip--short"
          containerType="container"
          id="tst-dashboard"
        >
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="table-responsive">  
              <Table className="table table-bordered custom-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>EmailId</th>
                    <th>PhoneNo</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeList.map(data => (
                    <tr>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.gender}</td>
                      <td>{data.email}</td>
                      <td>{data.phoneNo}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              </div>
            </Col>
          </Row>
        </Strip>
      </RenderPage>
    );
  }
}

export default Dashboard;
