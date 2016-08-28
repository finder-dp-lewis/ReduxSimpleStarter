import _ from 'lodash';
import React, { Component } from 'react';

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default (props) => {

  return (
    <div>
      <Sparklines height={80} width={120} data={props.data}>
        <SparklinesReferenceLine type="avg" />
        <SparklinesLine color={props.color} />
        <div>{average(props.data)} {props.units}</div>
      </Sparklines>
    </div>
  );
};
