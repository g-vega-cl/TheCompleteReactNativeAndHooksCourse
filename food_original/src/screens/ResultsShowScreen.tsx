import React, {useState, useEffect, ReactElement} from 'react';
import {FlatList, Image, ListRenderItem, StyleSheet, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import yelp from '../api/yelp';

// Working with navigation in typescript
// https://www.reddit.com/r/reactnative/comments/fu11it/how_can_i_use_new_react_navigation_with/

const ResultsShowScreen = () => {
    const navigation = useNavigation();
    const [result, setResult] = useState(Object)
    const id = navigation.getParam('id');

    const getResult = async (id: any) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    const renderImageItem: ListRenderItem<any> = ({item}) => {
        return (
            <Image style = {styles.image} source = {{uri: item}}/>
        )
    }

    useEffect(() => {
        getResult(id);
    }, [])

    !result ? null : (
        <View>
            <Text>Results show</Text>
            <FlatList
                data = {result.photos}
                keyExtractor = {(photo) => photo }
                renderItem={renderImageItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    }
})

export default ResultsShowScreen;