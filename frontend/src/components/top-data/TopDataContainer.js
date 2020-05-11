import { connect } from 'react-redux';
import TopData from './TopData';

const mapStateToProps = ({ data }) => {
  const { top, isLoading } = data;

  const spendSeries = top.filter(data => data.METRIC === 'Spend');
  const unitsSeries = top.filter(data => data.METRIC === 'Units');
  const visitsSeries = top.filter(data => data.METRIC === 'Visits');
  const totalCustSeries = top.filter(data => data.METRIC === 'Total_custs');

  return {
    top,
    isLoading,
    spendSeries,
    unitsSeries,
    visitsSeries,
    totalCustSeries,
  };
};

export default connect(mapStateToProps)(TopData);
