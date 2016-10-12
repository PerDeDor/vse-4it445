import React, { Component } from 'react';
import classNames from 'classnames';

export class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: 0,
    };
  }

  selectTab(event, tabId) {
    event.preventDefault();
    this.setState({
      activeTabId: tabId,
    });
  }

  renderTab(activeTabId) {
        const { productId } = this.props.params;
    if(activeTabId == 0) {
      return <div>
      <h3>id: {productId}</h3>
      <p>price: <span className="price">750 000 Kč</span></p>
      <p>Luxury car produced in the Czech Republic.</p>
      </div>;
    }
      return <div>
        <p>Parametr 1: ...</p>
        <p>Parametr 2: ...</p>
        <p>Parametr 3: ...</p>
        <p>Parametr 4: ...</p>
        <p>Parametr 5: ...</p>
      </div>;
  }

  render() {

    const { activeTabId } = this.state;

    console.log('activeTabId', activeTabId);

// ukol - udelat if aby se podle activeTabId menit obsah tabu

    return (
      <div>
        <div className="jumbotron">
          <h1>Škoda Superb</h1>
        </div>
        <div className="product">
          <ul className="nav nav-tabs">
            <li role="presentation" className={classNames({ active: 0 === activeTabId })}>
              <a href="#" onClick={(event) => this.selectTab(event, 0)}>
                Description
              </a>
            </li>
            <li role="presentation" className={classNames({ active: 1 === activeTabId })}>
              <a href="#" onClick={(event) => this.selectTab(event, 1)}>
                Parameters
              </a>
            </li>
          </ul>

          {this.renderTab(activeTabId)}


        </div>
      </div>
    );
  }
}