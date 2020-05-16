import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    const tron = Reactotron.configure()
        .useReactNative()
        .connect({ host: '192.168.25.10' });

    console.tron = tron;

    tron.clear();
}
