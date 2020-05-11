import React from 'react';
import Loading from '../loading/Loading';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  BarSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Stack } from '@devexpress/dx-react-chart';
import _ from 'lodash';

const WeeklyData = ({ weekly, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  const aisleSeries = weekly.filter(data => data.PRODUCT === 'Aisle');
  const brandSeries = weekly.filter(data => data.PRODUCT === 'Brand');
  const offerSeries = weekly.filter(data => data.PRODUCT === 'Offer');
  const exposedByProduct = _.chain(weekly)
    .groupBy('WEEK_COMMENCING')
    .toPairs()
    .map(value => ({
      WEEK_COMMENCING: value[0],
      Aisle: value[1][0].EXPOSED,
      Brand: value[1][1].EXPOSED,
      Offer: value[1][2].EXPOSED,
    }))
    .value();
  const controlByProduct = _.chain(weekly)
    .groupBy('WEEK_COMMENCING')
    .toPairs()
    .map(value => ({
      WEEK_COMMENCING: value[0],
      Aisle: value[1][0].CONTROL,
      Brand: value[1][1].CONTROL,
      Offer: value[1][2].CONTROL,
    }))
    .value();

  return (
    <div className="container">
      <div style={{ marginTop: '50px' }}>
        <h2>Aisle Products</h2>
        <p>
          Veniam Lorem elit nulla commodo ea commodo nulla consectetur proident
          ad deserunt. Incididunt ad ex exercitation irure ullamco dolor aliquip
          consequat eiusmod esse occaecat non labore.
        </p>
        <Paper>
          <Chart data={aisleSeries}>
            <ArgumentAxis />
            <ValueAxis />
            <LineSeries valueField="EXPOSED" argumentField="WEEK_COMMENCING" />
            <LineSeries valueField="CONTROL" argumentField="WEEK_COMMENCING" />
            <Stack />
          </Chart>
        </Paper>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h2>Brand Products</h2>
        <p>
          Veniam Lorem elit nulla commodo ea commodo nulla consectetur proident
          ad deserunt. Incididunt ad ex exercitation irure ullamco dolor aliquip
          consequat eiusmod esse occaecat non labore.
        </p>
        <Paper>
          <Chart data={brandSeries}>
            <ArgumentAxis />
            <ValueAxis />
            <LineSeries valueField="EXPOSED" argumentField="WEEK_COMMENCING" />
            <LineSeries valueField="CONTROL" argumentField="WEEK_COMMENCING" />
            <Stack />
          </Chart>
        </Paper>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h2>Offer Products</h2>
        <p>
          Veniam Lorem elit nulla commodo ea commodo nulla consectetur proident
          ad deserunt. Incididunt ad ex exercitation irure ullamco dolor aliquip
          consequat eiusmod esse occaecat non labore.
        </p>
        <Paper>
          <Chart data={offerSeries}>
            <ArgumentAxis labelComponent="Week" />
            <ValueAxis />
            <LineSeries valueField="EXPOSED" argumentField="WEEK_COMMENCING" />
            <LineSeries valueField="CONTROL" argumentField="WEEK_COMMENCING" />
            <Stack />
          </Chart>
        </Paper>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h2>Exposed by Products</h2>
        <p>
          Veniam Lorem elit nulla commodo ea commodo nulla consectetur proident
          ad deserunt. Incididunt ad ex exercitation irure ullamco dolor aliquip
          consequat eiusmod esse occaecat non labore.
        </p>
        <Paper>
          <Chart data={exposedByProduct}>
            <ValueScale name="Aisle" />
            <ValueScale name="Brand" />
            <ValueScale name="Offer" />

            <ArgumentAxis />
            <ValueAxis scaleName="Exposed" showLabels={true} />

            <BarSeries
              name="Aisle"
              valueField="Aisle"
              argumentField="WEEK_COMMENCING"
            />
            <BarSeries
              name="Brand"
              valueField="Brand"
              argumentField="WEEK_COMMENCING"
            />
            <BarSeries
              name="Offer"
              valueField="Offer"
              argumentField="WEEK_COMMENCING"
            />

            <Stack stacks={[{ series: ['Aisle', 'Brand', 'Offer'] }]} />
            <Legend />
          </Chart>
        </Paper>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h2>Control by Products</h2>
        <p>
          Veniam Lorem elit nulla commodo ea commodo nulla consectetur proident
          ad deserunt. Incididunt ad ex exercitation irure ullamco dolor aliquip
          consequat eiusmod esse occaecat non labore.
        </p>
        <Paper>
          <Chart data={controlByProduct}>
            <ValueScale name="Aisle" />
            <ValueScale name="Brand" />
            <ValueScale name="Offer" />

            <ArgumentAxis />
            <ValueAxis scaleName="Control" showLabels={true} />

            <BarSeries
              name="Aisle"
              valueField="Aisle"
              argumentField="WEEK_COMMENCING"
            />
            <BarSeries
              name="Brand"
              valueField="Brand"
              argumentField="WEEK_COMMENCING"
            />
            <BarSeries
              name="Offer"
              valueField="Offer"
              argumentField="WEEK_COMMENCING"
            />

            <Stack stacks={[{ series: ['Aisle', 'Brand', 'Offer'] }]} />
            <Legend />
          </Chart>
        </Paper>
      </div>
    </div>
  );
};

WeeklyData.propTypes = {
  weekly: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool.isRequired,
};

WeeklyData.defaultProps = {
  weekly: null,
};

export default WeeklyData;
