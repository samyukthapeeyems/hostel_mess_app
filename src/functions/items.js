import firestore from '@react-native-firebase/firestore';
import useStorage from './storage'


async function loadItemBundle(cachePolicy = "default") {
    // console.log("cache", cachePolicy)
    let resp = await fetch("https://hostel-mess-5d9a7.web.app/bundle", {cache: "no-cache"});
    let bundle = await resp.text()
    await firestore().loadBundle(bundle);
}


async function getItemList(itemIdList) {
    if (itemIdList.length > 10)
        throw new Error("Maximum number of items cannot be more than 10")
    try {
        let resultSnapShot = await firestore()
            .namedQuery('itemsBundle')
            .where(firestore.FieldPath.documentId(), 'in', itemIdList)
            .get({ source: 'cache' })

        return resultSnapShot;
    }
    catch (error) {
        console.log(error)
        throw e;
    }
}


function mapItemWithDocId(itemSnapShot) {
    let items = [];
    itemSnapShot.forEach(item => {
        items.push({
            id: item.id,
            ...item.data(),
        });
    });
    return items
}

async function searchItems(name) {
    try {
        return await firestore()
            .namedQuery('itemBundle')
            .where('name', '>=', name)
            .where('name', '<=', name + '\uf8ff')
            .orderBy('name', 'asc')
            .orderBy('isAvailable', 'desc')
            .get({ source: 'cache' });
    }
    catch (error) {
        console.log(error)
        throw error;
    }
}

async function getAllItems() {
    try {
        return await firestore().namedQuery('itemBundle')
            .orderBy('isAvailable', 'desc')
            .get({ source: 'cache' })
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
        mapItemWithDocId,
        loadItemBundle,
        getAllItems
    }
}
