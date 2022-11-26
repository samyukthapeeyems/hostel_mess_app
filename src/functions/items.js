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
        resultSnapShot.forEach((item) => {
            itemList.push(item.data())
        });
        return itemList;
    }
    catch (error) {
        console.log(error)
        throw e;
    }
}


export async function searchItems(name) {
    try {
        
        let snapShotList = await firestore().collection('items')
            .where('name', '>=', name)
            .where('name', '<=', name + '\uf8ff')
            .get();

        return snapShotList;
    }
    catch (error) {
        console.log(error)
        throw e;
    }
}

export const useItems = () => {
    return {
        getItemList,
        searchItems
    }
}
