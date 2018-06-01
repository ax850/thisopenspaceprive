import React from 'react';
import PropTypes from 'prop-types';


class HostItem extends React.Component {


  render() {

    return (
      <div className={'card'} style={{'padding': '2em', 'margin': '2em'}}>
        <div className={'row'}>
          <div className={'col-lg-6 col-md-12'}>
            <img width={'100%'} src={this.props.primary_photo_css_url_small} alt={''} style={{'margin-bottom': '2em'}}/>
          </div>
          <div className={'col-lg-6 col-md-12'}>
            <p>Name: {this.props.name}</p>
            <p>Address: {this.props.address}</p>
            <p>Hourly Price: {this.props.hourly_price}</p>
            <p>Daily Price: {this.props.daily_price}</p>
            <p>Square Footage: {this.props.square_footage}</p>
            <p>Capacity: {this.props.capacity}</p>
            <p>Views Count: {this.props.views_count}</p>
          </div>
        </div>
      </div>
    )
  }
}

HostItem.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  hourly_price: PropTypes.number,
  daily_price: PropTypes.number.isRequired,
  square_footage: PropTypes.number,
  capacity: PropTypes.number.isRequired,
  views_count: PropTypes.number.isRequired,
  primary_photo_css_url_small: PropTypes.string.isRequired

};

export {HostItem}