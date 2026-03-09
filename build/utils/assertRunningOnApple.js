import { Platform } from 'react-native';
export const assertRunningOnApple = () => {
    if (Platform.OS !== 'ios') {
        console.error(`Voltra is available only on iOS!`);
        return false;
    }
    return true;
};
//# sourceMappingURL=assertRunningOnApple.js.map