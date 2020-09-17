import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: 'https://github.com/diego3.png'}} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Diego Fernandes</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;