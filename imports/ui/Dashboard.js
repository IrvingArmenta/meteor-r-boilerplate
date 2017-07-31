import React, {Component} from 'react';
import {onEnterPrivatePage} from '../routes/Routes';
import PrivateHeader from './PrivateHeader';


export default class Link extends Component {
  componentWillMount() {
    onEnterPrivatePage();
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Dashboard"/>
        <div className="page-content">
         Dashboard Page Content
        </div>
      </div>
    );
  }
}
