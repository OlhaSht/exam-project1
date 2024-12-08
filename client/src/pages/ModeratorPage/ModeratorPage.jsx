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

//   // Принять оффер
//   const handleApprove = async (offerId) => {
//     try {
//       const response = await approveOfferByModerator(offerId);
//       alert(response.data.message); // Показываем уведомление
//       setOffers((prevOffers) =>
//         prevOffers.map((offer) =>
//           offer.id === offerId ? { ...offer, moderatorStatus: 'approved' } : offer
//         )
//       );
//     } catch (err) {
//       alert('Failed to approve the offer. Please try again.');
//       console.error(err);
//     }
//   };

//   // Отклонить оффер
//   const handleReject = async (offerId) => {
//     try {
//       const response = await rejectOfferByModerator(offerId);
//       alert(response.data.message); // Показываем уведомление
//     //   fetchOffers(); // Обновляем список
//     setOffers((prevOffers) =>
//         prevOffers.map((offer) =>
//           offer.id === offerId ? { ...offer, moderatorStatus: 'rejected' } : offer
//         )
//       );
//     } catch (err) {
//       alert('Failed to reject the offer. Please try again.');
//       console.error(err);
//     }
//   };

// // const handleApprove = async (offerId) => {
// //     try {
// //       const response = await approveOfferByModerator(offerId);
// //       alert(response.data.message);
// //       fetchOffers(); // Полное обновление списка
// //     } catch (err) {
// //       alert('Failed to approve the offer. Please try again.');
// //       console.error(err);
// //     }
// //   };
  
// //   const handleReject = async (offerId) => {
// //     try {
// //       const response = await rejectOfferByModerator(offerId);
// //       alert(response.data.message);
// //       fetchOffers(); // Полное обновление списка
// //     } catch (err) {
// //       alert('Failed to reject the offer. Please try again.');
// //       console.error(err);
// //     }
// //   };
  

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


import React, { useState, useEffect } from 'react';
import {
  getAllOffersForModerator,
  approveOfferByModerator,
  rejectOfferByModerator,
} from '../../api/rest/restController'; 

const ModeratorPage = () => {
  const [offers, setOffers] = useState([]);

  // Загрузка офферов из localStorage или сервера
  const fetchOffers = async () => {
    const storedOffers = localStorage.getItem('moderatorOffers');
    if (storedOffers) {
      setOffers(JSON.parse(storedOffers));
    } else {
      try {
        const response = await getAllOffersForModerator();
        setOffers(response.data);
        localStorage.setItem('moderatorOffers', JSON.stringify(response.data));
      } catch (err) {
        alert('Failed to fetch offers. Please try again.');
        console.error(err);
      }
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  // Обновляем состояние и localStorage после изменений
  const updateOfferStatus = (offerId, status) => {
    setOffers((prevOffers) => {
      const updatedOffers = prevOffers.map((offer) =>
        offer.id === offerId ? { ...offer, moderatorStatus: status } : offer
      );
      localStorage.setItem('moderatorOffers', JSON.stringify(updatedOffers));
      return updatedOffers;
    });
  };

  const handleApprove = async (offerId) => {
    try {
      const response = await approveOfferByModerator(offerId);
      alert(response.data.message);
      updateOfferStatus(offerId, 'approved');
    } catch (err) {
      alert('Failed to approve the offer. Please try again.');
      console.error(err);
    }
  };

  const handleReject = async (offerId) => {
    try {
      const response = await rejectOfferByModerator(offerId);
      alert(response.data.message);
      updateOfferStatus(offerId, 'rejected');
    } catch (err) {
      alert('Failed to reject the offer. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Moderator Page</h1>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Offer ID</th>
            <th>Details</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.id}>
              <td>{offer.id}</td>
              <td>{offer.User?.firstName} {offer.User?.lastName}</td>
              <td>{offer.text}</td>
              <td>{offer.moderatorStatus || 'Pending'}</td>
              <td>
                <button
                  onClick={() => handleApprove(offer.id)}
                  disabled={offer.moderatorStatus === 'approved'}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(offer.id)}
                  disabled={offer.moderatorStatus === 'rejected'}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModeratorPage;
