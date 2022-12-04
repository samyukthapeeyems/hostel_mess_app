import firestore from '@react-native-firebase/firestore';
import useStorage from './storage'

async function getItemList(itemIdList) {
    if (itemIdList.length > 10)
        throw new Error("Maximum number of items cannot be more than 10")
    try {
        let resultSnapShot = await firestore()
            .collection('items')
            .where(firestore.FieldPath.documentId(), 'in', itemIdList)
            .get()

        return resultSnapShot;
    }
    catch (error) {
        console.log(error)
        throw e;
    }
}


export function mapItemWithDocId(itemSnapShot) {
    let items = [];
    itemSnapShot.forEach(item => {
        items.push({
            id: item.id,
            ...item.data(),
        });
    });
    return items
}

// exp
// export async function mapItemWithImageURL(itemList) {

//     const { getURL } = useStorage()
//     let urlPromiseList = itemList.map(item => getURL(item.image));
//     let result = await Promise.all(urlPromiseList)

//     itemList.forEach((item, index) => {

//         let { quantity } = items.find(item => item.id === p.id)
//         e[ind] = {
//           ...p,
//           price: quantity * p.price
//         }
//       })

// }

export async function searchItems(name) {
    try {

        let snapShotList = await firestore().collection('items')
            .where('name', '>=', name)
            .where('name', '<=', name + '\uf8ff')
            .orderBy('name', 'asc')
            .orderBy('isAvailable', 'desc')
            .get();

        return snapShotList;
    }
    catch (error) {
        console.log(error)
        throw error;
    }
}

export const useItems = () => {
    return {
        getItemList,
        searchItems,
        mapItemWithDocId
    }
}
