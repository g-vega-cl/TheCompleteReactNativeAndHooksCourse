import React, {useContext, useEffect} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BlogContext from '../context/BlogContext';

interface listItem{
    item: {
        title: string
    }
}

const IndexScreen = () => {
    const fullContext = useContext(BlogContext);
    const blogPosts = fullContext.blogPosts;
    const addBlogPost = fullContext.addBlogPost;
    
    
    const renderBlogPostsList: React.FC<listItem> = ({item}) => {
        return(<Text>{item.title}</Text>)
    }

    return (
        <View>
            <Text>Index</Text>
            <Button
                title="Add Post"
                onPress={addBlogPost}
            />
            <FlatList
                data = {blogPosts}
                keyExtractor = {(blogPost) => blogPost.title}
                renderItem={renderBlogPostsList}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen;