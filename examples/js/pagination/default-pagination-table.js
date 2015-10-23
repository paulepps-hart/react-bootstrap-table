'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [];

function addProducts(quantity) {
  var startId = products.length;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    products.push({
      id: id,
      name: "Item name " + id,
      price: 2100 + i
    });
  }
}

addProducts(70);

export default class DefaultPaginationTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: undefined,
      sizePerPage: undefined,
    };

    this.options = {
      onPageChange: this.onPageChange.bind(this),
    };
  }

  onPageChange(page, sizePerPage) {
    console.info('onPageChange', arguments);
    this.setState({
      page,
      sizePerPage,
    });
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={products}
          pagination
          options={this.options}
        >
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
        </BootstrapTable>
        pagination: page={this.state.page}, sizePerPage={this.state.sizePerPage}
      </div>
    );
  }
};