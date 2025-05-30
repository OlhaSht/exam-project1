import http from '../interceptor';

//  AUTH
export const registerRequest = data => http.post('registration', data);
export const loginRequest = data => http.post('login', data);

// USER
export const getUser = data => http.get('getUser', data);
export const updateUser = data => http.put('updateUser', data);
export const changeMark = data => http.put('changeMark', data);

// CONTESTS
export const updateContest = data => http.put('updateContest', data);
export const dataForContest = data => http.post('dataForContest', data);
export const getCustomersContests = data => http.get('getCustomersContests',
  { limit: data.limit, offset: data.offset },
  {headers: {status: data.contestStatus,},});
export const getActiveContests = ({
    offset,
    limit,
    typeIndex,
    contestId,
    industry,
    awardSort,
    ownEntries,
  }) =>
    http.get('getAllContests', {
      offset,
      limit,
      typeIndex,
      contestId,
      industry,
      awardSort,
      ownEntries,
    });
export const getContestById = data => http.get('getContestById', {
        headers: {contestId: data.contestId,},});      

// OFFER        
export const setNewOffer = data => http.post('setNewOffer', data);
export const setOfferStatus = data => http.patch('setOfferStatus', data);
export const downloadContestFile = data => http.get(`downloadFile/${data.fileName}`);

// FINANCE
export const payMent = data => http.post('pay', data.formData);
export const cashOut = data => http.post('cashout', data);

// CHATS
export const getPreviewChat = () => http.get('getPreview');
export const getDialog = data => http.get('getChat', data);
export const newMessage = data => http.post('newMessage', data);
export const changeChatFavorite = data => http.put('favorite', data);
export const changeChatBlock = data => http.put('blackList', data);

// CATALOG
export const getCatalogList = data => http.get('getCatalogs', data);
export const addChatToCatalog = data => http.post('addNewChatToCatalog', data);
export const createCatalog = data => http.post('createCatalog', data);
export const deleteCatalog = data => http.delete('deleteCatalog', data);
export const removeChatFromCatalog = data => http.delete('removeChatFromCatalog', data);
export const changeCatalogName = data => http.put('updateNameCatalog', data);

// MODERATOR
export const getAllOffersForModerator = ({
    page = 1, 
    limit = 5
  }) =>http.get('getAllOffersForModerator', {
    params: { 
      page, limit 
    },
  });
  export const approveOfferByModerator = id =>http.put(`approveOfferByModerator/${id}`);
  export const rejectOfferByModerator = id =>http.put(`rejectOfferByModerator/${id}`);

  export const getApprovedOffersForCustomer = () =>http.get('getApprovedOffersForCustomer');
