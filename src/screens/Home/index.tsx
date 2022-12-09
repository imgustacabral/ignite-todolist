import { useState } from 'react';

import {Text, View, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';

// Components
import Todo from '../../components/Todo';


export default function Home() {
    const [inputTodo, setInputTodo] = useState('')
    const [todos, setTodos] = useState<String[]>([])
    const [completedTodos, setCompletedTodos] = useState<String[]>([])

    function handleAddTodo() {
        if (todos.includes(inputTodo)) return
        setTodos([...todos, inputTodo])
        setInputTodo('')
    }
    function handleCheckTodo(name: String) {
        setTodos(todos.filter(t => t !== name))
        setCompletedTodos([...completedTodos, name])
    }
    function handleUncheckTodo(name: String) {
        console.log(name)
        setCompletedTodos(completedTodos.filter(t => t !== name))
        setTodos([...todos, name])
    }
    function handleRemoveTodo(name: String) {
            setTodos(todos.filter(todo => todo!== name))

    } 
    function handleRemoveCheckedTodo(name: String) {
        setCompletedTodos(todos.filter(todo => todo!== name))

}
    return (
        <View className='flex-1 mt-10 bg-[#1A1A1A]'>
            <View className=' absolute h-32 w-full -top-4 bg-[#0D0D0D]'></View>
            <View className='mt-6 mx-auto'>
            <Image className='w-24' resizeMode='contain' source={require('../../../assets/logo.png')} />
            </View>
            <View className="flex-row my-6 mx-4 mt-8 h-10">
          <TextInput
           onChangeText={setInputTodo}
            className="bg-[#1F1E25] flex-1 text-white pl-4 mr-1 text-sm rounded "
            placeholder="Adcione uma nova tarefa"
            placeholderTextColor={"#6b6b6b"}
            value={inputTodo}
          />
          <TouchableOpacity
          onPress={handleAddTodo}
            className="text-3xl items-center justify-center w-10 rounded bg-[#1E6F9F] "
          >
            <Image className='w-3 h-3' resizeMode='contain' source={require('../../../assets/plus.png')} />
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-between mx-4 pb-3 '>
            <View className='flex-row' >
            <Text className='text-[#4EA8DE]'>Criadas</Text>
            <Text className='bg-[#1F1E25] text-[10px] text-white rounded-xl p-1 px-2 ml-1 -mt-0.75'>{todos.length}</Text>
            </View>
            <View className='flex-row' >
            <Text className='text-[#8284FA]'>Concluídas</Text>
            <Text className='bg-[#1F1E25] text-[10px] text-white rounded-xl p-1 px-2 ml-1 -mt-0.75'>{completedTodos.length}</Text>
            </View>
           
        </View>

        {
            todos.length > 0 ? <FlatList windowSize={10}
            data={todos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item}) => (
                <Todo name={item} onCheck={() => handleCheckTodo(item)} onRemove={() => handleRemoveTodo(item)}/>
            )}
            showsVerticalScrollIndicator={false}
             /> : null
        }
        
        {
            completedTodos.length > 0 ? <FlatList
            data={completedTodos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item}) => (
                <Todo name={item} completed={true} onUncheck={() => handleUncheckTodo(item)} onRemove={() => handleRemoveCheckedTodo(item)}/>
            )}
            showsVerticalScrollIndicator={false}
             /> : null
        }
        {
            completedTodos.length === 0 && todos.length === 0 ? 
            <View className='items-center justify-center mt-10'>
                <Image className='mb-2' resizeMode='contain' source={require('../../../assets/clipboard.png')} />
                <Text className='text-gray-400 font-bold'>Você ainda não tem tarefas cadastradas</Text>
                <Text className='text-gray-400 '>Crie tarefas e organize seus itens a fazer</Text></View>

                
            :null
        }

          
        </View>
    )
}