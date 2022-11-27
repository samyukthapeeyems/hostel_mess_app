import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import useStorage from '../functions/storage';

export default function _Image({ path }) {
    const [url, setURL] = useState();
    const [loading, setLoading] = useState(true);

    const { getURL } = useStorage();

    useEffect(() => {
        getURL(path).then(url => {
            setURL(url);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {
                loading && <SkeletonPlaceholder>
                    <View style={styles.image}></View>
                </SkeletonPlaceholder>
            }

            {
                url && <Image source={{ uri: url }}
                    style={styles.image}
                    resizeMode="cover"
                />
            }
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 10,
        height: 75,
        width: 75
    }
})
