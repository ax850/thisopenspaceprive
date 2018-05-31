import React from 'react'
import PropTypes from 'prop-types';

class Paginate extends React.Component {


  getNumberOfPages() {
    return Math.ceil(this.props.total / this.props.page_size)
  }

  setActive(page){
    return 'page-item '+((page===this.props.currPage) ?'active':'default');
  }

  renderButtons() {

    let numPages = this.getNumberOfPages();
    let buttons = [];

    for (let i = 1; i <= numPages; i++) {
      buttons.push(
          <li className={this.setActive(i)} key={i} onClick={this.props.pageClick}><button className="page-link" id={i}>{i}</button></li>
      )
    }
    return buttons

  }

  render() {
    return (
        <div className={'container'} style={{'padding': '3em'}}>
          <div className={'row'}>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item" onClick={this.props.prevClick}><button className="page-link">Previous</button></li>
                {this.renderButtons()}
                <li className="page-item" onClick={this.props.nextClick}><button className="page-link">Next</button></li>
              </ul>
            </nav>
          </div>
        </div>
    )
  }
}

Paginate.propTypes = {
  prevClick: PropTypes.func.isRequired,
  nextClick: PropTypes.func.isRequired,
  pageClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  page_size: PropTypes.number.isRequired
}

export {Paginate}