import React from 'react'
import {hostsActions} from "../../../../actions/hosts.actions";

import {connect} from 'react-redux';
import {HostList} from "./hostList";
import {Paginate} from "../Paginate/pagination";

class HostContainer extends React.Component {

  constructor(props) {
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);

  }

  componentDidMount() {
    this.props.dispatch(hostsActions.getHosts(this.props.hosts.page));
  }

  handlePageClick(event) {

    this.props.dispatch(hostsActions.getHosts(event.target.id))
  }

  handlePrevClick(event) {
    let prevPage = this.props.hosts.page === 1 ? 1 : this.props.hosts.page - 1
    this.props.dispatch(hostsActions.getHosts(prevPage))
  }

  handleNextClick(event) {
    let nextPage = this.props.hosts.page === 4 ? 4 : this.props.hosts.page + 1
    this.props.dispatch(hostsActions.getHosts(nextPage))
  }


  render() {

    let data = this.props.hosts.result;
    /* TodO: Create UI component to change Page size? */
    return (
      <div>
        {!data && <p>Loading...</p>}
        {data && <HostList data={data.hosts.data}/>}
        {data && <Paginate
          total={data.hosts.total}
          page_size={10}
          currPage={this.props.hosts.page}
          pageClick={this.handlePageClick}
          nextClick={this.handleNextClick}
          prevClick={this.handlePrevClick}
        />
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  let {hosts} = state;
  return {hosts}
}

const connectedMemoryWrapper = connect(mapStateToProps)(HostContainer);
export {connectedMemoryWrapper as HostContainer}