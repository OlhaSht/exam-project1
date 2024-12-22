// import React, { useEffect, useState } from 'react';
// import { 
//   getAllOffersForModerator, 
//   approveOfferByModerator, 
//   rejectOfferByModerator 
// } from '../../api/rest/restController';

// const ModeratorPage = () => {
//   const [offers, setOffers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Получение всех офферов
//   const fetchOffers = async () => {
//     try {
//       setLoading(true);
//       const response = await getAllOffersForModerator();
//       setOffers(response.data);
//     } catch (err) {
//       setError('Failed to load offers. Please try again later.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

// const handleApprove = async (offerId) => {
//     try {
//       const response = await approveOfferByModerator(offerId);
//       alert(response.data.message);
//       fetchOffers(); // Полное обновление списка
//     } catch (err) {
//       alert('Failed to approve the offer. Please try again.');
//       console.error(err);
//     }
//   };
  
//   const handleReject = async (offerId) => {
//     try {
//       const response = await rejectOfferByModerator(offerId);
//       alert(response.data.message);
//       fetchOffers(); // Полное обновление списка
//     } catch (err) {
//       alert('Failed to reject the offer. Please try again.');
//       console.error(err);
//     }
//   };
  

//   // Загрузка офферов при первом рендере
//   useEffect(() => {
//     fetchOffers();
//   }, []);

//   if (loading) return <p>Loading offers...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Moderator Page</h1>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>User</th>
//             <th>Details</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {offers.map((offer) => (
//             <tr key={offer.id}>
//               <td>{offer.id}</td>
//               <td>{offer.User?.firstName} {offer.User?.lastName}</td>
//               <td>{offer.text || 'No details available'}</td>
//               <td>{offer.moderatorStatus || 'Pending'}</td>
//               {/* <td>{offer.moderatorStatus}</td> */}
//               <td>
//                 <button onClick={() => handleApprove(offer.id)} disabled={offer.moderatorStatus === 'approved'}>
//                   Approve
//                 </button>
//                 <button onClick={() => handleReject(offer.id)} disabled={offer.moderatorStatus === 'rejected'}>
//                   Reject
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ModeratorPage;



import React, { useEffect } from 'react';
import styles from './ModeratorPage.module.sass'
import { useDispatch, useSelector } from 'react-redux';
import {
  getModeratorOffers,
  approveModeratorOffer,
  rejectModeratorOffer,
} from '../../store/slices/moderatorSlice';

const ModeratorPage = () => {
  const dispatch = useDispatch();
  const { offers, isFetching, error, currentPage, totalPages } = useSelector((state) => state.moderator);

  useEffect(() => {
    dispatch(getModeratorOffers({page: currentPage}));
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
      {/* <section className = {styles.tableContainer} border="1"> */}
      <section className = {styles.tableContainer}>
       
          <div className = {styles.inputWrapper}>
            <h1>Offers</h1>
          </div>
        
        <article>
          {offers.length > 0 ? (
            offers.map((offer) => (
            <div className = {styles.inputWrapper}>
            <div className = {styles.wrapperInputInfo} key={offer.id}>
              <span className={styles.inputInfo}>{offer.User?.firstName} {offer.User?.lastName}</span>
              <span className={styles.inputInfo}>{offer.text || 'No details available'}</span>
              <span className={styles.inputInfo}>{offer.moderatorStatus || 'Pending'}</span>
              <span className={styles.inputInfo}>
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
              </span>
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
          <span className={styles.pageNamber}>Page {currentPage} of {totalPages}</span>
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

