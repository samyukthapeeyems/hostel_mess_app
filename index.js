/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { AuthProvider } from './src/contexts/AuthContext';

const Init = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
)


AppRegistry.registerComponent(appName, () => Init);
