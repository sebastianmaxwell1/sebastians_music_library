import React from "react";
// import { render } from "react-dom";

class FilteredTable extends React.Component {

  state = {
    rows: [{}]
  };
  handleChange = idx => e => {
    const { name, value } = e.target.value;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  handleAddRow = () => {
    const song = {
      title: "",
      artist: "",
      album:"",
      release_date:""

    };
    this.setState({
      rows: [...this.state.rows, song]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> id# </th>
                    <th className="text-center"> Title </th>
                    <th className="text-center"> Artist </th>
                    <th className="text-center">Album</th>
                    <th className="text-center">Release Date</th>
                    <th />
                  </tr>
                </thead>
                
                <tbody>
                  {this.state.rows.map((song, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td>
                        <input
                          type="text"
                          name="Title"
                          value={this.state.rows[idx].title}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Artist"
                          value={this.state.rows[idx].artist}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Album"
                          value={this.state.rows[idx].album}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Release Date"
                          value={this.state.rows[idx].release_date}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={this.handleAddRow} className="btn btn-primary">
                Add New Song
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Song
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilteredTable;

// render(<App />, document.getElementById("root"));