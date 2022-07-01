// import { StatusBar } from 'expo-status-bar';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { StatusBar } from 'react-native';
import Input from './components/Input';
import { useState } from 'react';
import IconButton from './components/IconButton';
import { icons } from './icons';

const Container= styled.View`
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
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    alert(newTask);
    setNewTask('');
  }

  return (
    // <View style={styles.container}>
    //   <Text>Change dir, </Text>
    //   <Text style={{ color: 'blue' }}>Hi</Text>
    //   <StatusBar style="auto" />
    // </View>
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar 
          barStyle="light-content"
          backgroundColor={theme.background}>
        </StatusBar>
        <Title>TODO List</Title>
        <Input 
          placeholder=" + Add a Task"
          value={newTask}
          onChangeText={text => setNewTask(text)}
          onSubmitEditing={addTask}
        ></Input>
        <IconButton icon={icons.check} onPress={() => alert('check')}></IconButton>
        <IconButton icon={icons.unCheck} onPress={() => alert('unCheck')}></IconButton>
        <IconButton icon={icons.edit} onPress={() => alert('edite')}></IconButton>
        <IconButton icon={icons.delete} onPress={() => alert('delete')}></IconButton>
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
