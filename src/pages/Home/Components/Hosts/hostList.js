import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {HostItem} from "./hostItem";

class HostList extends React.Component {

  renderItems(hosts) {
    return _.map(hosts, (host, index) =>
      <HostItem key={index} {...host} />
    )
  }

  render() {
    let data = this.props.data
    return (
      <div className={'container'} style={{'height': '35em', 'overflow': 'auto'}}>
        {this.renderItems(data)}
      </div>
    )
  }
}

HostList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    hourly_price: PropTypes.number,
    daily_price: PropTypes.string.number,
    square_footage: PropTypes.number,
    capacity: PropTypes.number.isRequired,
    views_count: PropTypes.number.isRequired,
    primary_photo_css_url_small: PropTypes.string.isRequired

  })).isRequired

};

export {HostList}