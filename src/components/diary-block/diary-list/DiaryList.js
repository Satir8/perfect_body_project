import React from 'react';
import { Table, Row, Cell } from 'react-responsive-table';

const DiaryList = ({ productsList, deleteProduct }) => {
  return (
    <Table>
      {productsList.map(({_id, title, weight, calories}) => (
        <Row key={_id}>
          <Cell key={_id+1} minWidthPx={100}>{title.ru}</Cell>
          <Cell key={_id+2} minWidthPx={100}>{weight} г</Cell>
          <Cell key={_id+3} minWidthPx={100}>{calories}</Cell>
					<Cell key={_id+4}><button type="button" onClick={() => (deleteProduct(_id))}>DELETE</button></Cell>
        </Row>
      ))}
    </Table>
  );
};

export default DiaryList;
