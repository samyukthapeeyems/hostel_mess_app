import firestore from '@react-native-firebase/firestore';


async function getItemList(itemIdList) {
    let itemPromiseList = [];
    itemIdList.forEach((itemId) => {
        itemPromiseList.push(
            firestore().collection('items').doc(itemId).get()
        );
    });

    try {
        let itemList = [];
        let resultSnapShot = await Promise.all(itemPromiseList);
        return resultSnapShot;
    }
    catch (error) {
        console.log(error)
        throw e;
    }
}


export function mapItemWithItemId(itemSnapShot) {
    let items = [];
    itemSnapShot.forEach(item => {
        items.push({
            id: item.id,
            ...item.data(),
        });
    });
    return items
}

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
        mapItemWithItemId
    }
}
