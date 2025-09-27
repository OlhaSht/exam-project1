import http from '../interceptor';

//  AUTH
export const registerRequest = data => http.post('/auth/registration', data);
export const loginRequest = data => http.post('/auth/login', data);
export const refreshRequest = () => http.post('/auth/refresh',{}, { withCredentials: true });
export const apilogout = () => http.post('/auth/logout',{},{
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});


// USER
export const getUser = data => http.get('/user/getUser', data);
export const updateUser = data => http.put('/user/updateUser', data);

// CONTESTS
export const updateContest = data => http.put('/contest/updateContest', data);
export const dataForContest = data => http.post('/contest/dataForContest', data);
export const getCustomersContests = data => http.get('/contest/getCustomersContests',{
  params:{
    limit: data.limit,
    offset: data.offset,
    status: data.contestStatus,
    }
  });
export const getActiveContests = ({
    offset,
    limit,
    typeIndex,
    contestId,
    industry,
    awardSort,
    ownEntries,
  }) =>
    http.get('/contest/getAllContests', {
      offset,
      limit,
      typeIndex,
      contestId,
      industry,
      awardSort,
      ownEntries,
    });
export const getContestById = data => http.get('/contest/getContestById', {
        headers: {contestId: data.contestId,},});

export const downloadContestFile = data => http.get(`/contest/downloadFile/${data.fileName}`);     

// OFFER        
export const setNewOffer = data => http.post('/offer/setNewOffer', data);
export const setOfferStatus = data => http.patch('/offer/setOfferStatus', data);
export const getApprovedOffersForCustomer = () =>http.get('/offer/getApprovedOffersForCustomer');


// FINANCE
export const payMent = data => http.post('/finance/pay', data.formData);
export const cashOut = data => http.post('/finance/cashout', data);
export const changeMark = data => http.put('/finance/changeMark', data);

// CHATS
export const getPreviewChat = () => http.get('/chat/getPreview');
export const getDialog = (interlocutorId) => http.get(`/chat/getChat?interlocutorId=${interlocutorId}`);
export const newMessage = data => http.post('/chat/newMessage', data);
export const changeChatFavorite = data => http.put('/chat/favorite', data);
export const changeChatBlock = data => http.put('/chat/blackList', data);

// CATALOG
export const getCatalogList = data => http.get('/catalog/getCatalogs', data);
export const addChatToCatalog = data => http.post('/catalog/addNewChatToCatalog', data);
export const createCatalog = data => http.post('/catalog/createCatalog', data);
export const deleteCatalog = (catalogId) => http.delete(`/catalog/deleteCatalog?catalogId=${catalogId}`);
export const removeChatFromCatalog = data => http.delete('/catalog/removeChatFromCatalog', data);
export const changeCatalogName = data => http.put('/catalog/updateNameCatalog', data);

// MODERATOR
export const getAllOffersForModerator = ({
    page = 1, 
    limit = 5
  }) =>http.get('/moderator/getAllOffersForModerator', {
    params: { 
      page, limit 
    },
  });
  export const approveOfferByModerator = id =>http.put(`/moderator/approveOfferByModerator/${id}`);
  export const rejectOfferByModerator = id =>http.put(`/moderator/rejectOfferByModerator/${id}`);

  
