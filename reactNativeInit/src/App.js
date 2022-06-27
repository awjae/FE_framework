// import { StatusBar } from 'expo-status-bar';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { StatusBar } from 'react-native';

const Container= styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Change dir, </Text>
    //   <Text style={{ color: 'blue' }}>Hi</Text>
    //   <StatusBar style="auto" />
    // </View>
    <ThemeProvider theme={theme}>
      <Container>
        <Title>TODO List</Title>
        <StatusBar 
          barStyle="light-content"
          backgroundColor={theme.background}></StatusBar>
      </Container>  
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
