import { Component } from 'react';

class Filter extends Component {
  render() {
    const { handleFilterChange, filter } = this.props;
    return (
      <>
        <input type="text" onChange={handleFilterChange} value={filter} />
      </>
    );
  }
}

export default Filter;
