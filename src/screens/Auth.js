import {Text, View, Button} from 'react-native';
import useAuth from '../contexts/AuthContext';

const Auth = () => {
  const {signIn} = useAuth();
  return (
    <View>
      <Button title="Google Sign-In" onPress={async () => await signIn()} />
    </View>
  );
};

export default Auth;
