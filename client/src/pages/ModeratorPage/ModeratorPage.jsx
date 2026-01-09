import React, { useEffect } from 'react';
import styles from './ModeratorPage.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import {
  getModeratorOffers,
  approveModeratorOffer,
  rejectModeratorOffer,
} from '../../store/slices/moderatorSlice';
import CONSTANTS from '../../constants';

const ModeratorPage = () => {
  const dispatch = useDispatch();
  const { offers, isFetching, error, currentPage, totalPages } = useSelector(
    (state) => state.moderator
  );

  useEffect(() => {
    dispatch(getModeratorOffers({ page: currentPage }));
  }, [dispatch, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      dispatch(getModeratorOffers({ page: newPage }));
    }
  };

  const handleApprove = (offerId) => {
    dispatch(approveModeratorOffer(offerId))
      .unwrap()
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert('Failed to approve the offer. Please try again.');
        console.error(err);
      });
  };

  const handleReject = (offerId) => {
    dispatch(rejectModeratorOffer(offerId))
      .unwrap()
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert('Failed to reject the offer. Please try again.');
        console.error(err);
      });
  };

  console.log('Offers from state:', offers);

  if (isFetching) return <p>Loading offers...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.moderatorContainer}>
      <section className={styles.tableContainer}>
        <div className={styles.inputWrapper}>
          <h1>Offers</h1>
        </div>

        <article>
          {offers.length > 0 ? (
            offers.map((offer) => (
              <div className={styles.inputWrapper} key={offer.id}>
                <div className={styles.wrapperInputInfo}>
                  <div className={styles.inputInfo}>
                    {offer.User?.firstName} {offer.User?.lastName}
                  </div>
                  {/* <div className={styles.inputInfo}>{offer.text || 'No details available'}</div> */}
                  <div className={styles.inputInfo}>
                    {offer.text && offer.text}

                    {!offer.text && offer.fileName && (
                      <img
                        src={`${CONSTANTS.publicURL}${offer.fileName}`}
                        alt="offer preview"
                        className={styles.offerImage}
                      />
                    )}

                    {!offer.text && !offer.fileName && 'No details available'}
                  </div>

                  <div className={styles.inputInfo}>
                    {offer.moderatorStatus || 'Pending'}
                  </div>
                  <div className={styles.inputInfo}>
                    <button
                      className={styles.buttonApprove}
                      onClick={() => handleApprove(offer.id)}
                      disabled={offer.moderatorStatus === 'approved'}
                    >
                      Approve
                    </button>
                    <button
                      className={styles.buttonReject}
                      onClick={() => handleReject(offer.id)}
                      disabled={offer.moderatorStatus === 'rejected'}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No offers available</p>
          )}
        </article>
        <div className={styles.pagination}>
          <button
            className={styles.buttonBack}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Back
          </button>
          <span className={styles.pageNamber}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={styles.buttonNext}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default ModeratorPage;
