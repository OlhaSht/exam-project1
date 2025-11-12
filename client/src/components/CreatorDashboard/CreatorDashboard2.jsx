import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import {
  getContests,
  clearContestsList,
  setNewCreatorFilter,
} from '../../store/slices/contestsSlice';
import { getDataForContest } from '../../store/slices/dataForContestSlice';
import ContestsContainer from '../ContestsContainer/ContestsContainerHook';
import ContestBox from '../ContestBox/ContestBox';
import TryAgain from '../TryAgain/TryAgain';
import CONSTANTS from '../../constants';
import styles from './CreatorDashboard.module.sass';

const types = [
  '',
  'name,tagline,logo',
  'name',
  'tagline',
  'logo',
  'name,tagline',
  'logo,tagline',
  'name,logo',
];

const CreatorDashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { contests, error, haveMore, creatorFilter, isFetching } = useSelector(
    (state) => state.contestsList
  );
  const dataForContest = useSelector((state) => state.dataForContest);

  // === helpers ===
  const getContestsList = useCallback(
    (filter) => {
      dispatch(
        getContests({
          requestData: {
            limit: 8,
            offset: 0,
            ...filter,
          },
          role: CONSTANTS.CREATOR,
        })
      );
    },
    [dispatch]
  );

  const parseParamsToUrl = useCallback(
    (filter) => {
      const obj = {};
      Object.keys(filter).forEach((el) => {
        if (filter[el]) obj[el] = filter[el];
      });
      history.push(`/Dashboard?${queryString.stringify(obj)}`);
    },
    [history]
  );

  const parseUrlForParams = useCallback(
    (search) => {
      const obj = queryString.parse(search);
      const filter = {
        typeIndex: obj.typeIndex || 1,
        contestId: obj.contestId || '',
        industry: obj.industry || '',
        awardSort: obj.awardSort || 'asc',
        ownEntries:
          typeof obj.ownEntries === 'undefined'
            ? false
            : obj.ownEntries === 'true',
      };
      if (!isEqual(filter, creatorFilter)) {
        dispatch(setNewCreatorFilter(filter));
        dispatch(clearContestsList());
        getContestsList(filter);
        return false;
      }
      return true;
    },
    [creatorFilter, dispatch, getContestsList]
  );

  const changePredicate = useCallback(
    ({ name, value }) => {
      const updated = {
        ...creatorFilter,
        [name]: value === 'Choose industry' ? null : value,
      };
      dispatch(setNewCreatorFilter(updated));
      parseParamsToUrl(updated);
    },
    [creatorFilter, dispatch, parseParamsToUrl]
  );

  const getPredicateOfRequest = useCallback(() => {
    const obj = {};
    Object.keys(creatorFilter).forEach((el) => {
      if (creatorFilter[el]) obj[el] = creatorFilter[el];
    });
    obj.ownEntries = creatorFilter.ownEntries;
    return obj;
  }, [creatorFilter]);

  const loadMore = (startFrom) => {
    dispatch(
      getContests({
        requestData: {
          limit: 8,
          offset: startFrom,
          ...getPredicateOfRequest(),
        },
        role: CONSTANTS.CREATOR,
      })
    );
  };

  const tryLoadAgain = () => {
    dispatch(clearContestsList());
    getContestsList(getPredicateOfRequest());
  };

  const goToExtended = (contestId) => {
    history.push(`/contest/${contestId}`);
  };

  // === effects ===
  useEffect(() => {
    dispatch(getDataForContest());
  }, [dispatch]);

  useEffect(() => {
    const parsed = parseUrlForParams(location.search);
    if (parsed && !contests.length) {
      getContestsList(creatorFilter);
    }
  }, [location.search]); // аналог componentWillReceiveProps

  // === render parts ===
  const renderSelectType = () => (
    <select
      onChange={({ target }) =>
        changePredicate({
          name: 'typeIndex',
          value: types.indexOf(target.value),
        })
      }
      value={types[creatorFilter.typeIndex]}
      className={styles.input}
    >
      {types
        .filter((el, i) => i)
        .map((el, i) => (
          <option key={i - 1} value={el}>
            {el}
          </option>
        ))}
    </select>
  );

  const renderIndustryType = () => {
    const industries = dataForContest.data.industry || [];
    return (
      <select
        onChange={({ target }) =>
          changePredicate({
            name: 'industry',
            value: target.value,
          })
        }
        value={creatorFilter.industry}
        className={styles.input}
      >
        <option key={0} value="">
          Choose industry
        </option>
        {industries.map((ind, i) => (
          <option key={i + 1} value={ind}>
            {ind}
          </option>
        ))}
      </select>
    );
  };

  const setContestList = () =>
    contests.map((contest) => (
      <ContestBox data={contest} key={contest.id} goToExtended={goToExtended} />
    ));

  // === render ===
  return (
    <div className={styles.mainContainer}>
      <div className={styles.filterContainer}>
        <span className={styles.headerFilter}>Filter Results</span>
        <div className={styles.inputsContainer}>
          <div
            onClick={() =>
              changePredicate({
                name: 'ownEntries',
                value: !creatorFilter.ownEntries,
              })
            }
            className={classNames(styles.myEntries, {
              [styles.activeMyEntries]: creatorFilter.ownEntries,
            })}
          >
            My Entries
          </div>
          <div className={styles.inputContainer}>
            <span>By contest type</span>
            {renderSelectType()}
          </div>
          <div className={styles.inputContainer}>
            <span>By contest ID</span>
            <input
              type="text"
              onChange={({ target }) =>
                changePredicate({
                  name: 'contestId',
                  value: target.value,
                })
              }
              name="contestId"
              value={creatorFilter.contestId}
              className={styles.input}
            />
          </div>
          {!dataForContest.isFetching && (
            <div className={styles.inputContainer}>
              <span>By industry</span>
              {renderIndustryType()}
            </div>
          )}
          <div className={styles.inputContainer}>
            <span>By amount award</span>
            <select
              onChange={({ target }) =>
                changePredicate({
                  name: 'awardSort',
                  value: target.value,
                })
              }
              value={creatorFilter.awardSort}
              className={styles.input}
            >
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </select>
          </div>
        </div>
      </div>

      {error ? (
        <div className={styles.messageContainer}>
          <TryAgain getData={tryLoadAgain} />
        </div>
      ) : (
        <ContestsContainer
          isFetching={isFetching}
          loadMore={loadMore}
          haveMore={haveMore}
        >
          {setContestList()}
        </ContestsContainer>
      )}
    </div>
  );
};

export default CreatorDashboard;
