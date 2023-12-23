import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useState } from 'react';

const Home = () => {

    // create a list that stores item name and description
    const [items, setItems] = useState([
        { itemName: 'Item 1', itemDescription: 'Expires: Dec 1' },
        { itemName: 'Item 2', itemDescription: 'Expires: Dec 2' },
        { itemName: 'Item 3', itemDescription: 'Expires: Dec 3' },
        { itemName: 'Item 4', itemDescription: 'Expires: Dec 4' },
        { itemName: 'Item 5', itemDescription: 'Expires: Dec 5' },
        { itemName: 'Item 6', itemDescription: 'Expires: Dec 6' },
        { itemName: 'Item 7', itemDescription: 'Expires: Dec 7' },
        { itemName: 'Item 8', itemDescription: 'Expires: Dec 8' },
        { itemName: 'Item 9', itemDescription: 'Expires: Dec 9' },
        { itemName: 'Item 10', itemDescription: 'Expires: Dec 10' },
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