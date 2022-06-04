//importing native components from react native
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
  const navigation = useNavigation(); // To navigate between different screens
  const USERS = [
    {
      id: 1,
      user: "Your Story",
      image: require("../../storage/images/image1.png"),
    },
    {
      id: 2,
      user: "Lin Dan",
      image: require("../../storage/images/image2.jpg"),
    },
    {
      id: 3,
      user: "Scarlett Johansson",
      image: require("../../storage/images/image3.jpg"),
    },
    {
      id: 4,
      user: "Emma Watson",
      image: require("../../storage/images/image4.jpg"),
    },
    {
      id: 5,
      user: "Will Smith",
      image: require("../../storage/images/image5.jpg"),
    },

    {
      id: 6,
      user: "Selena Gomez",
      image: require("../../storage/images/image6.jpg"),
    },
  ];

  return (
    /* to scroll stories horizontally */
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.stories}
    >
      {USERS.map((story, index) => {
        return (
          /* we are able to touch so that we can view it as large image */
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push("Status", {
                user: story.user,
                image: story.image,
              })
            }
          >
            <View style={styles.view}>
              {
                //if id is 1 then plus icon should be shown
                story.id === 1 ? (
                  <View style={styles.views}>
                    <Entypo name="circle-with-plus" style={styles.story} />
                  </View>
                ) : null
              }
              {/* view for displaying image and username */}
              <View style={styles.imageContainer}>
                <Image source={story.image} style={styles.image} />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                }}
              >
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + "..."
                  : story.user.toLowerCase()}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
//styling
const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    paddingHorizontal: 8,
    position: "relative",
  },
  views: {
    position: "absolute",
    bottom: 15,
    right: 10,
    zIndex: 1,
  },
  imageContainer: {
    width: 68,
    height: 68,
    borderRadius: 50,
    backgroundColor: "#c61063",
    justifyContent: "center",
  },
  image: {
    resizeMode: "cover",
    width: "92%",
    height: "92%",
    marginLeft: 2.5,
    borderRadius: 50,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  stories: {
    paddingVertical: 20,
  },
  story: {
    fontSize: 20,
    color: "#405de6",
    backgroundColor: "white",
    borderRadius: 100,
  },
});
export default Stories;
//   return (
//     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//       {USERS.map((story, index) => {
//         return (
//           <TouchableOpacity
//             key={index}
//             style={{ marginBottom: 25 }}
//             onPress={() =>
//               navigation.push("Status", {
//                 user: story.user,
//                 image: story.image,
//               })
//             }
//           >
//             <View
//               style={{
//                 flexDirection: "column",
//                 paddingHorizontal: 8,
//                 position: "relative",
//               }}
//             >
//               {story.id == 1 ? (
//                 <View
//                   style={{
//                     position: "absolute",
//                     bottom: 12,
//                     right: 10,
//                     zIndex: 1,
//                   }}
//                 >
//                   <Entypo
//                     name="circle-with-plus"
//                     style={{
//                       fontSize: 20,
//                       color: "#405de6",
//                       backgroundColor: "white",
//                       borderRadius: 100,
//                     }}
//                   />
//                 </View>
//               ) : null}
//               <View
//                 style={{
//                   width: 68,
//                   height: 68,
//                   backgroundColor: "#c61063",
//                   borderWidth: 0.5,
//                   borderRadius: 100,
//                   borderColor: "#c13584",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Image
//                   source={{ uri: story.image }}
//                   style={{
//                     resizeMode: "cover",
//                     width: "93%",
//                     height: "93%",
//                     borderRadius: 100,
//                     backgroundColor: "orange",
//                   }}
//                 />
//               </View>
//               <Text
//                 style={{
//                   textAlign: "center",
//                   fontSize: 10,
//                   color: "white",
//                 }}
//               >
//                 {story.user.length > 11
//                   ? story.user.slice(0, 10).toLowerCase() + "..."
//                   : story.user.toLowerCase()}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   );
// };

// export default Stories;
