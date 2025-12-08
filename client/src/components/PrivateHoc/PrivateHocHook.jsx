import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../store/slices/userSlice';
import Spinner from '../Spinner/Spinner';

const PrivateHoc = (WrappedComponent, extraProps = {}) => {
  function Hoc(props) {
    useEffect(() => {
      const { data, isLoggedIn } = props;
      if (!data && isLoggedIn) {
        props.getUser();
      }
    }, []);

    return (
      <>
        {props.isFetching ? (
          <Spinner />
        ) : (
          <WrappedComponent {...props} {...extraProps} />
          //<Component history={props.history} match={props.match} {...props} />
        )}
      </>
    );
  }

  const mapStateToProps = (state) => ({
    ...state.userStore,
    isLoggedIn: state.userStore.isLoggedIn,
  });

  const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Hoc);
};

export default PrivateHoc;
