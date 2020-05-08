// import "./css/jquery.dataTables.css";
import React, { Component } from "react";

const $ = require("jquery");
$.Datatable = require("datatables.net");

export default class Tbl extends Component {
  componentDidMount() {
    const titles = Object.keys(this.props.data[0]).map((el) => ({
      title: el,
    }));
    const data = this.props.data.map((el) => {
      const result = [];
      for (const key in el) {
        const element = el[key];
        result.push(element);
      }
      return result;
    });
    console.log(this.el);
    this.$el = $(this.el);
    this.$el.DataTable({
      data,
      columns: titles,
    });

    console.log(titles);
    console.log(data);
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        <table
          className="display"
          width="100%"
          ref={(el) => (this.el = el)}
        ></table>
      </div>
    );
  }
}
