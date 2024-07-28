import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import { Button } from "react-bootstrap";
import ListTable from "./components/ListTable";
import { apiUrl } from "./configuration/config";

function App() {
  const [userNames, setUserNames] = useState<string[]>([]);
  const [userClick, setUserClick] = useState<boolean>(false);

  const getUsers = async () => {
    setUserClick(true);
    var returnedValues: string[] = [];
    try {
      const response = await fetch(apiUrl + "users");
      const data = await response.json();
      data.forEach((element: { accountName: string }) => {
        returnedValues.push(element.accountName);
      });
    } catch (error) {
      console.log(error);
      console.log("error occured while fetching data" + JSON.stringify(error));
    }

    setUserNames(returnedValues);
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Button variant="secondary" onClick={getUsers}>
              Get Users
            </Button>
          </Col>
          {userClick && (
            <Col>
              <ListTable arrayStr={userNames}></ListTable>
            </Col>
          )}
          {!userClick && <Col>Click the button to get the users</Col>}
        </Row>
      </Container>
    </div>
  );
}

export default App;
