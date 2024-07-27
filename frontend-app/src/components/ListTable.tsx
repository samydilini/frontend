import React from "react";
import { Table } from "react-bootstrap";

interface ListTableProps {
  arrayStr: string[];
}

const ListTable: React.FC<ListTableProps> = (props) => {
  if (!Array.isArray(props.arrayStr)) {
    console.error("arrayStr is not an array:", props.arrayStr);
    return null;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.arrayStr.length === 0 && (
          <tr>
            <th colSpan={2}>No values to show</th>
          </tr>
        )}
        {props.arrayStr.map((name: string, index: React.Key) => (
          <tr key={index}>
            <td>{Number(index) + 1}</td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListTable;
