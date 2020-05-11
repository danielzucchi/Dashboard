import React from 'react';
import Loading from '../loading/Loading';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack } from '@devexpress/dx-react-chart';

const TopData = ({ top, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  const spendSeries = top.filter(data => data.METRIC === 'Spend');
  const unitsSeries = top.filter(data => data.METRIC === 'Units');
  const visitsSeries = top.filter(data => data.METRIC === 'Visits');
  const totalCustSeries = top.filter(data => data.METRIC === 'Total_custs');

  return (
    <div className="container">
      <div
        style={{
          display: 'flex',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            marginTop: '50px',
            maxWidth: '600px',
            float: 'left',
            marginRight: '20px',
          }}
        >
          <h2>Spend by Products</h2>
          <p>
            Veniam Lorem elit nulla commodo ea commodo nulla consectetur
            proident ad deserunt. Incididunt ad ex exercitation irure ullamco
            dolor aliquip consequat eiusmod esse occaecat non labore.
          </p>
          <Paper>
            <Chart data={spendSeries}>
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
                valueField="EXPOSED"
                argumentField="PRODUCT"
                name="Exposed"
              />
              <BarSeries
                valueField="CONTROL"
                argumentField="PRODUCT"
                name="Control"
              />
              <BarSeries
                valueField="UPLIFT"
                argumentField="PRODUCT"
                name="Uplift"
              />

              <Stack />
              <Legend />
            </Chart>
          </Paper>
        </div>

        <div style={{ marginTop: '50px', maxWidth: '600px', float: 'left' }}>
          <h2>Spend Percentage Uplift by Products</h2>
          <p>
            Veniam Lorem elit nulla commodo ea commodo nulla consectetur
            proident ad deserunt. Incididunt ad ex exercitation irure ullamco
            dolor aliquip consequat eiusmod esse occaecat non labore.
          </p>
          <Paper>
            <Chart data={spendSeries}>
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
                valueField="PCT_UPLIFT"
                argumentField="PRODUCT"
                name="Uplift"
              />

              <Stack />
            </Chart>
          </Paper>
        </div>
      </div>

      <div style={{ display: 'flex', textAlign: 'center' }}>
        <div
          style={{
            marginTop: '50px',
            maxWidth: '600px',
            float: 'left',
            marginRight: '20px',
          }}
        >
          <h2>Unit Sales by Products</h2>
          <p>
            Veniam Lorem elit nulla commodo ea commodo nulla consectetur
            proident ad deserunt. Incididunt ad ex exercitation irure ullamco
            dolor aliquip consequat eiusmod esse occaecat non labore.
          </p>
          <Paper>
            <Chart data={unitsSeries}>
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
                valueField="EXPOSED"
                argumentField="PRODUCT"
                name="Exposed"
              />
              <BarSeries
                valueField="CONTROL"
                argumentField="PRODUCT"
                name="Control"
              />
              <BarSeries
                valueField="UPLIFT"
                argumentField="PRODUCT"
                name="Uplift"
              />

              <Stack />
              <Legend />
            </Chart>
          </Paper>
        </div>

        <div style={{ marginTop: '50px', maxWidth: '600px', float: 'left' }}>
          <h2>Unit Sales Percentage Uplift by Products</h2>
          <p>
            Veniam Lorem elit nulla commodo ea commodo nulla consectetur
            proident ad deserunt. Incididunt ad ex exercitation irure ullamco
            dolor aliquip consequat eiusmod esse occaecat non labore.
          </p>
          <Paper>
            <Chart data={unitsSeries}>
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
                valueField="PCT_UPLIFT"
                argumentField="PRODUCT"
                name="Uplift"
              />

              <Stack />
            </Chart>
          </Paper>
        </div>
      </div>

      <div style={{ display: 'flex', textAlign: 'center' }}>
        <div
          style={{
            marginTop: '50px',
            maxWidth: '600px',
            float: 'left',
            marginRight: '20px',
          }}
        >
          <h2>Visits by Products</h2>
          <p>
            Veniam Lorem elit nulla commodo ea commodo nulla consectetur
            proident ad deserunt. Incididunt ad ex exercitation irure ullamco
            dolor aliquip consequat eiusmod esse occaecat non labore.
          </p>
          <Paper>
            <Chart data={visitsSeries}>
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
                valueField="EXPOSED"
                argumentField="PRODUCT"
                name="Exposed"
              />
              <BarSeries
                valueField="CONTROL"
                argumentField="PRODUCT"
                name="Control"
              />
              <BarSeries
                valueField="UPLIFT"
                argumentField="PRODUCT"
                name="Uplift"
              />

              <Stack />
              <Legend />
            </Chart>
          </Paper>
        </div>

        <div style={{ marginTop: '50px', maxWidth: '600px', float: 'left' }}>
          <h2>Visits Percentage Uplift by Products</h2>
          <p>
            Veniam Lorem elit nulla commodo ea commodo nulla consectetur
            proident ad deserunt. Incididunt ad ex exercitation irure ullamco
            dolor aliquip consequat eiusmod esse occaecat non labore.
          </p>
          <Paper>
            <Chart data={visitsSeries}>
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
                valueField="PCT_UPLIFT"
                argumentField="PRODUCT"
                name="Uplift"
              />

              <Stack />
            </Chart>
          </Paper>
        </div>
      </div>

      <div style={{ display: 'flex', textAlign: 'center' }}>
        <div
          style={{
            marginTop: '50px',
            maxWidth: '600px',
            float: 'left',
            marginRight: '20px',
          }}
        >
          <h2>Total Customers by Products</h2>
          <p>
            Veniam Lorem elit nulla commodo ea commodo nulla consectetur
            proident ad deserunt. Incididunt ad ex exercitation irure ullamco
            dolor aliquip consequat eiusmod esse occaecat non labore.
          </p>
          <Paper>
            <Chart data={totalCustSeries}>
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
                valueField="EXPOSED"
                argumentField="PRODUCT"
                name="Exposed"
              />
              <BarSeries
                valueField="CONTROL"
                argumentField="PRODUCT"
                name="Control"
              />
              <BarSeries
                valueField="UPLIFT"
                argumentField="PRODUCT"
                name="Uplift"
              />

              <Stack />
              <Legend />
            </Chart>
          </Paper>
        </div>

        <div style={{ marginTop: '50px', maxWidth: '600px', float: 'left' }}>
          <h2>Total Customers Percentage Uplift by Products</h2>
          <p>
            Veniam Lorem elit nulla commodo ea commodo nulla consectetur
            proident ad deserunt. Incididunt ad ex exercitation irure ullamco
            dolor aliquip consequat eiusmod esse occaecat non labore.
          </p>
          <Paper>
            <Chart data={totalCustSeries}>
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
                valueField="PCT_UPLIFT"
                argumentField="PRODUCT"
                name="Uplift"
              />

              <Stack />
            </Chart>
          </Paper>
        </div>
      </div>
    </div>
  );
};

TopData.propTypes = {
  top: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool.isRequired,
};

TopData.defaultProps = {
  top: null,
};

export default TopData;
