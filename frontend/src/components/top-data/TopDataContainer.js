import { connect } from 'react-redux';
import TopData from './TopData';

const mapStateToProps = ({ data }) => {
  const { top, isLoading } = data;

  return {
    top,
    isLoading,
  };
};

export default connect(mapStateToProps)(TopData);
