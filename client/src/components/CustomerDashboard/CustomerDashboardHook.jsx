import { useEffect } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {
  getContests,
  clearContestsList,
  setNewCustomerFilter,
} from '../../store/slices/contestsSlice';
import CONSTANTS from '../../constants';
import ContestsContainer from '../ContestsContainer/ContestsContainerHook';
import ContestBox from '../ContestBox/ContestBox';
import styles from './CustomerDashboard.module.sass';
import TryAgain from '../TryAgain/TryAgain';

function CustomerDashboard(props) {
  const { contests, error, haveMore, customerFilter, history, isFetching } =
    props;

  const loadMore = (startFrom) => {
    props.getContests({
      limit: 8,
      offset: startFrom,
      contestStatus: customerFilter,
    });
  };

  const getContestsData = () => {
    props.getContests({
      limit: 8,
      contestStatus: customerFilter,
    });
  };

  useEffect(() => {
    getContestsData();
  }, []);

  useEffect(() => {
    getContestsData();
  }, [customerFilter]);

  useEffect(() => {
    return () => {
      props.clearContestsList();
    };
  }, []);

  const goToExtended = (contest_id) => {
    history.push(`/contest/${contest_id}`);
  };

  const setContestList = () => {
    return contests.map((contest) => (
      <ContestBox key={contest.id} data={contest} goToExtended={goToExtended} />
    ));
  };

  const tryToGetContest = () => {
    props.clearContestsList();
    getContestsData();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.filterContainer}>
        <div
          onClick={() => props.newFilter(CONSTANTS.CONTEST_STATUS_ACTIVE)}
          className={classNames({
            [styles.activeFilter]:
              CONSTANTS.CONTEST_STATUS_ACTIVE === customerFilter,
            [styles.filter]: CONSTANTS.CONTEST_STATUS_ACTIVE !== customerFilter,
          })}
        >
          Active Contests
        </div>
        <div
          onClick={() => props.newFilter(CONSTANTS.CONTEST_STATUS_FINISHED)}
          className={classNames({
            [styles.activeFilter]:
              CONSTANTS.CONTEST_STATUS_FINISHED === customerFilter,
            [styles.filter]:
              CONSTANTS.CONTEST_STATUS_FINISHED !== customerFilter,
          })}
        >
          Completed Contests
        </div>
        <div
          onClick={() => props.newFilter(CONSTANTS.CONTEST_STATUS_PENDING)}
          className={classNames({
            [styles.activeFilter]:
              CONSTANTS.CONTEST_STATUS_PENDING === customerFilter,
            [styles.filter]:
              CONSTANTS.CONTEST_STATUS_PENDING !== customerFilter,
          })}
        >
          Inactive Contests
        </div>
      </div>

      <div className={styles.contestsContainer}>
        {error ? (
          <TryAgain getData={tryToGetContest} />
        ) : (
          <ContestsContainer
            isFetching={isFetching}
            loadMore={loadMore}
            history={history}
            haveMore={haveMore}
          >
            {setContestList()}
          </ContestsContainer>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => state.contestsList;

const mapDispatchToProps = (dispatch) => ({
  getContests: (data) =>
    dispatch(getContests({ requestData: data, role: CONSTANTS.CUSTOMER })),
  clearContestsList: () => dispatch(clearContestsList()),
  newFilter: (filter) => dispatch(setNewCustomerFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDashboard);
