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

const WeeklyData = ({
  isLoading,
  aisleSeries,
  brandSeries,
  offerSeries,
  exposedByWeek,
  controlByWeek,
}) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div style={{ marginTop: '50px' }}>
        <h2>Aisle Products over Time</h2>
        <p>
          Veniam Lorem elit nulla commodo ea commodo nulla consectetur proident
          ad deserunt. Incididunt ad ex exercitation irure ullamco dolor aliquip
          consequat eiusmod esse occaecat non labore.
        </p>
        <Paper>
          <Chart data={aisleSeries}>
            <ArgumentAxis />
            <ValueAxis />
            <LineSeries
              valueField="EXPOSED"
              name="Exposed"
              argumentField="WEEK_COMMENCING"
            />
            <LineSeries
              valueField="CONTROL"
              name="Control"
              argumentField="WEEK_COMMENCING"
            />
            <Stack />
            <Legend />
          </Chart>
        </Paper>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2>Brand Products Over Time</h2>
        <p>
          Veniam Lorem elit nulla commodo ea commodo nulla consectetur proident
          ad deserunt. Incididunt ad ex exercitation irure ullamco dolor aliquip
          consequat eiusmod esse occaecat non labore.
        </p>
        <Paper>
          <Chart data={brandSeries}>
            <ArgumentAxis />
            <ValueAxis />
            <LineSeries
              valueField="EXPOSED"
              name="Exposed"
              argumentField="WEEK_COMMENCING"
            />
            <LineSeries
              valueField="CONTROL"
              name="Control"
              argumentField="WEEK_COMMENCING"
            />
            <Stack />
            <Legend />
          </Chart>
        </Paper>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2>Offer Products over Time</h2>
        <p>
          Veniam Lorem elit nulla commodo ea commodo nulla consectetur proident
          ad deserunt. Incididunt ad ex exercitation irure ullamco dolor aliquip
          consequat eiusmod esse occaecat non labore.
        </p>
        <Paper>
          <Chart data={offerSeries}>
            <ArgumentAxis />
            <ValueAxis />
            <LineSeries
              valueField="EXPOSED"
              name="Exposed"
              argumentField="WEEK_COMMENCING"
            />
            <LineSeries
              valueField="CONTROL"
              name="Control"
              argumentField="WEEK_COMMENCING"
            />
            <Stack />
            <Legend />
          </Chart>
        </Paper>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2>Exposed by Products over Time</h2>
        <p>
          Veniam Lorem elit nulla commodo ea commodo nulla consectetur proident
          ad deserunt. Incididunt ad ex exercitation irure ullamco dolor aliquip
          consequat eiusmod esse occaecat non labore.
        </p>
        <Paper>
          <Chart data={exposedByWeek}>
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
        <h2>Control by Products over Time</h2>
        <p>
          Veniam Lorem elit nulla commodo ea commodo nulla consectetur proident
          ad deserunt. Incididunt ad ex exercitation irure ullamco dolor aliquip
          consequat eiusmod esse occaecat non labore.
        </p>
        <Paper>
          <Chart data={controlByWeek}>
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
