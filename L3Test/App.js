import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

// Custom InputBox Component
const InputBox = ({ label, onChangeText }) => (
    <View style={{ marginBottom: 20 }}>
        <Text>{label}</Text>
        <TextInput
            style={{ borderWidth: 1, padding: 8 }}
            onChangeText={onChangeText}
        />
    </View>
);

const MyApp = () => {
    // State variables for user type, username, and password
    const [userType, setUserType] = useState('');
    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');

    // Function to display the welcome message based on userType and username
    const handleLogin = () => {
        if (userType && username) {
            const message = `Welcome ${userType} ${username}`;
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Please select a user type and enter your username.", ToastAndroid.SHORT);
        }
    };

    // Function to check the password
    const checkPassword = () => {
        const correctPassword = '123';
        const message = pw === correctPassword
            ? `Welcome ${userType} ${username}`
            : "Error! Wrong Password!";
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    return (
        <View style={{ padding: 20, paddingTop: 50 }}>
            {/* Picker Select for User Type */}
            <Text>User Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => setUserType(value)}
                items={[
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Guest', value: 'Guest' },
                ]}
                placeholder={{ label: 'Select User Type', value: null }}
            />

            {/* InputBox for Username */}
            <InputBox
                label="Username:"
                onChangeText={(text) => setUsername(text)}
            />

            {/* InputBox for Password */}
            <InputBox
                label="Password:"
                onChangeText={(text) => setPw(text)}
            />

            {/* TouchableOpacity for Log In with Toast */}
            <TouchableOpacity onPress={handleLogin} style={{ marginTop: 10 }}>
                <Text style={{ color: 'blue' }}>LOG IN</Text>
            </TouchableOpacity>

            {/* TouchableOpacity to Check Password */}
            <TouchableOpacity onPress={checkPassword} style={{ marginTop: 20 }}>
                <Text style={{ color: 'green' }}>Check Password</Text>
            </TouchableOpacity>

            {/* Display the current password for debugging purposes */}
            <Text style={{ marginTop: 20 }}>Current Password: {pw}</Text>
        </View>
    );
};

export default MyApp;





