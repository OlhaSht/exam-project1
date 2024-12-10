import React, { useEffect, useState } from 'react';
import { 
  getAllOffersForModerator, 
  approveOfferByModerator, 
  rejectOfferByModerator 
} from '../../api/rest/restController';

const ModeratorPage = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Получение всех офферов
  const fetchOffers = async () => {
    try {
      setLoading(true);
      const response = await getAllOffersForModerator();
      setOffers(response.data);
    } catch (err) {
      setError('Failed to load offers. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

const handleApprove = async (offerId) => {
    try {
      const response = await approveOfferByModerator(offerId);
      alert(response.data.message);
      fetchOffers(); // Полное обновление списка
    } catch (err) {
      alert('Failed to approve the offer. Please try again.');
      console.error(err);
    }
  };
  
  const handleReject = async (offerId) => {
    try {
      const response = await rejectOfferByModerator(offerId);
      alert(response.data.message);
      fetchOffers(); // Полное обновление списка
    } catch (err) {
      alert('Failed to reject the offer. Please try again.');
      console.error(err);
    }
  };
  

  // Загрузка офферов при первом рендере
  useEffect(() => {
    fetchOffers();
  }, []);

  if (loading) return <p>Loading offers...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Moderator Page</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
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
              <td>{offer.text || 'No details available'}</td>
              <td>{offer.moderatorStatus || 'Pending'}</td>
              {/* <td>{offer.moderatorStatus}</td> */}
              <td>
                <button onClick={() => handleApprove(offer.id)} disabled={offer.moderatorStatus === 'approved'}>
                  Approve
                </button>
                <button onClick={() => handleReject(offer.id)} disabled={offer.moderatorStatus === 'rejected'}>
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


