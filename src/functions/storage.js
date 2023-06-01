import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';





export default function useStorage() {
    const utils = {}

    utils.uploadImage = function (file) {

    }

    utils.getURL = async function (path) {

        try{
            let url = await storage()
            //.setMaxOperationRetryTime(30)
            .ref(path)
            .getDownloadURL();
            return url
        }
        catch(e){
            console.log(e)
            throw e
        }
        
    }

    return utils;
}