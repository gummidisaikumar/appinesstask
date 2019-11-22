import React from "react";
import { Row, Col, Table } from "reactstrap";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      const{employeeList} = this.props;
    return (
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
    );
  }
}

export default EmployeeList;
