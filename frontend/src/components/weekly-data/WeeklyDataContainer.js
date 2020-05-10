import { connect } from 'react-redux';
import WeeklyData from './WeeklyData';

const mapStateToProps = ({ data }) => {
  const { weekly, isLoading } = data;

  return {
    weekly,
    isLoading,
  };
};

export default connect(mapStateToProps)(WeeklyData);
