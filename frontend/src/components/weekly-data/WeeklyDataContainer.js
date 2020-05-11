import { connect } from 'react-redux';
import WeeklyData from './WeeklyData';
import _ from 'lodash';

const mapStateToProps = ({ data }) => {
  const { weekly, isLoading } = data;

  const aisleSeries = weekly.filter(data => data.PRODUCT === 'Aisle');
  const brandSeries = weekly.filter(data => data.PRODUCT === 'Brand');
  const offerSeries = weekly.filter(data => data.PRODUCT === 'Offer');

  const exposedByWeek = _.chain(weekly)
    .groupBy('WEEK_COMMENCING')
    .toPairs()
    .map(value => ({
      WEEK_COMMENCING: value[0],
      Aisle: value[1][0].EXPOSED,
      Brand: value[1][1].EXPOSED,
      Offer: value[1][2].EXPOSED,
    }))
    .value();

  const controlByWeek = _.chain(weekly)
    .groupBy('WEEK_COMMENCING')
    .toPairs()
    .map(value => ({
      WEEK_COMMENCING: value[0],
      Aisle: value[1][0].CONTROL,
      Brand: value[1][1].CONTROL,
      Offer: value[1][2].CONTROL,
    }))
    .value();

  return {
    weekly,
    isLoading,
    aisleSeries,
    brandSeries,
    offerSeries,
    exposedByWeek,
    controlByWeek,
  };
};

export default connect(mapStateToProps)(WeeklyData);
