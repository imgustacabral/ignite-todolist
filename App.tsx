import { StatusBar } from 'expo-status-bar';
import { styled } from 'nativewind';

const StyledBar = styled(StatusBar)
import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#0D0D0D' style='dark' />
      <Home />
    </>
  );
}
