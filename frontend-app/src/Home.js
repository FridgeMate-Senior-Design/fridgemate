import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useState } from 'react';

const Home = () => {

    // create a list that stores item name and description
    const [items, setItems] = useState([
        { itemName: 'Item 1', itemDescription: 'This is item 1' },
        { itemName: 'Item 2', itemDescription: 'This is item 2' },
        { itemName: 'Item 3', itemDescription: 'This is item 3' },
        { itemName: 'Item 4', itemDescription: 'This is item 4' },
        { itemName: 'Item 5', itemDescription: 'This is item 5' },
        { itemName: 'Item 6', itemDescription: 'This is item 6' },
        { itemName: 'Item 7', itemDescription: 'This is item 7' },
        { itemName: 'Item 8', itemDescription: 'This is item 8' },
        { itemName: 'Item 9', itemDescription: 'This is item 9' },
        { itemName: 'Item 10', itemDescription: 'This is item 10' },
    ]);

    // create return a View that contains the list of items
    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <View className="flex flex-col" key={index}>
                    <Text className="text-2xl">{item.itemName}</Text>
                    <Text className="text-2xl">{item.itemDescription}</Text>
                </View>
            )
        })
    }

    return (
        // create the login screen
        <View className="flex flex-col items-center justify-center bg-white">
            {renderItems()}
        </View>
    )
}

export default Home;