// import { StatusBar } from 'expo-status-bar';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { StatusBar } from 'react-native';
import Input from './components/Input';
import { useState } from 'react';
import IconButton from './components/IconButton';
import { icons } from './icons';
import Task from './components/Task';

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

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;


export default function App() {
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    if (newTask.length < 1) {
      return;
    }
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    storeData({ ...tasks, ...newTaskObject });
  };
  const width = Dimensions.get('window').width;

  const tempData = {
    '1': { id: '1', text: 'React Native', completed: false },
    '2': { id: '2', text: 'Expo', completed: true },
    '3': { id: '3', text: 'Javascript', completed: false }
  };

  const [tasks, setTasks] = useState(tempData);

  

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
        <List width={width}>
          {
            Object.values(tasks)
              .reverse()
              .map(item => {
                <Task key={item.id} text= {item.text} />
              })
          }
        </List>
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
