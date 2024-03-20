import { useQuery } from 'react-query';
import firestore from '@react-native-firebase/firestore';

export const useWallet = (userId) => {
  return useQuery(
    ['wallet', userId], // Query key to identify and refetch this data
    () => firestore().collection('wallet').where('userId', '==', userId).get().then(snap => {
      const result = snap.docs[0];
      return { balance: result.data().balance, walletId: result.id }
    }),
    {
      enabled: !!userId // Only execute when the userId exists
    }
  );
};

export const useTransactions = (walletId) => {
  return useQuery(
    ['transactions', walletId], 
    () => firestore().collection('transaction').where('instrumentId', '==', walletId).get()
      .then(snap => snap.docs.map(doc => doc.data())),
    {
      enabled: !!walletId,
    }  
  );
};
