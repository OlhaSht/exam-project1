import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser, logout } from '../../store/slices/userSlice';

const AuthBootstrap = ({ getUser, logout }) => {
  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      getUser();
    } else {
      logout();
    }
  }, []);
  return null;
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  logout: () => dispatch(logout()),
});
console.log('AUTH_BOOTSTRAP');
export default connect(null, mapDispatchToProps)(AuthBootstrap);
