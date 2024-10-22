import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

// Boat component that displays each boat's details
const Boat = ({title, desc, icon_name, poster}) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image source={poster} />
            <Text>{desc}</Text>
            <Icon name={icon_name} size={30} color={"#00FFFF"} />
        </View>
    );
};

// Main component that displays all boats in a scrollable view
const AllBoats = () => {
    return (
        <ScrollView>
            <Boat title="Sea Ray 500 Sundancer"
                  desc="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                  icon_name="sailboat"
                  poster={require('../img/sea_ray.jpg')} />

            <Boat title="Four Winns Horizon 180"
                  desc="A sporty look and refined details truly set the Horizon 180 above all others."
                  icon_name="sailboat"
                  poster={require('../img/four_winns.jpg')} />

            <Boat title="Flipper 640 ST"
                  desc="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                  icon_name="sailboat"
                  poster={require('../img/flipper.jpg')} />

            <Boat title="Bayliner VR5"
                  desc="A stylish and affordable way to hit the water and enjoy everything boating has to offer."
                  icon_name="sailboat"
                  poster={require('../img/bayliner.jpg')} />

            <Boat title="Fairline Targa 45"
                  desc="Combining the perfect balance of luxurious design and powerful performance."
                  icon_name="sailboat"
                  poster={require('../img/fairline.jpg')} />

            <Boat title="Princess V50"
                  desc="An innovative and unique motor yacht providing a luxury experience on the water."
                  icon_name="sailboat"
                  poster={require('../img/princess.jpg')} />
        </ScrollView>
    );
};

export default AllBoats;

