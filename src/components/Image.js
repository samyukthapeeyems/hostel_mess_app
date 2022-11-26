import { useEffect, useState } from 'react';
import useStorage from '../functions/storage';
import { Image, Text } from 'react-native';

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
      {loading && <Text style={{ color: 'black' }}>lOADING</Text>}

      {url && (
        <>
          <Image
            source={{ uri: url }}
            style={{ borderRadius: 10, height: 75, width: 75 }}
            resizeMode="cover"
          />
        </>
      )}
    </>
  );
}
