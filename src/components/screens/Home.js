import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
//components
import { POSTS } from "../Data/posts";
import Stories from "../screenComponents/Stories";
import Post from "../screenComponents/Post";
const Home = () => {
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../storage/images/logo.png")}
          />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Image
              style={styles.icons}
              source={{
                uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icons}
              source={{
                uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>11</Text>
            </View>
            <Image
              style={styles.icons}
              source={{
                uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Stories />
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "black",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icons: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Home;
