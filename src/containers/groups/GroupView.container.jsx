import {useEffect, useState} from "react";
import {Text, View, Pressable, Image, StyleSheet, ScrollView} from "react-native";
import { useSelector } from "react-redux";

import GroupDetail from "./GroupDetail.container";

//En attendant movies dans la bdd pour démonstration
const API = "https://imdb-api.com/en/API/SearchMovie/k_x0kc5v5x/Wars"

const GroupView = (props) => {
    const theme = useSelector((state) => state.theme);

    const styles = StyleSheet.create({
        tabs: {
            flexDirection: "row",
            margin: 16,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: theme.backgroundColor
        },
        tab: {
            flex: 1,
            textAlign: "center",
            paddingStart: 16,
            paddingEnd: 16,
            paddingTop: 8,
            paddingBottom: 8,
            color: "white"
        },
        tabSelected: {
            backgroundColor: "#FFFFFF40",
            fontWeight: "bold"
        },
        listContentContainer: {
            alignItems: "center",
            paddingStart: 10,
            paddingEnd: 10
        },
        movie: {
            width: "100%",
            maxWidth: 800,
            padding: 10,
            marginBottom: 10,
            borderRadius: 10,
            borderColor: "#dddddd",
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center"
        },
        movieImage: {
            width: 60,
            height: 90,
            marginEnd: 10
        },
        movieSide: {
            flex: 1
        },
        movieTitle: {
            fontSize: 18,
            marginBottom: 5
        },
        movieDescription: {
            fontSize: 14
        }
    });

    const TAB_DETAILS = 0,
    TAB_MOVIES  = 1;

    const [selectedTab, setSelectedTab] = useState(TAB_DETAILS);
    const [movies, setMovies] = useState([]);

    const tabs = [
      {
          id: TAB_DETAILS,
          label: "Group details"
      },
      {
          id: TAB_MOVIES,
          label: "Group movies"
      }
    ];

    const tabsElems = tabs.map(tab => {
      const tabStyles = [styles.tab];

      if(selectedTab == tab.id) {
          tabStyles.push(styles.tabSelected);
      }

      return (<Text key={tab.id}
                    style={[tabStyles]}
                    onPress={() => setSelectedTab(tab.id)}>

                    {tab.label}
              </Text>)
    });

    useEffect(() => {
      fetch (API)
          .then((res) => res.json())
          .then((data) => {
              setMovies(data.results);
      });
    }, []);

    return (
      <>
          <View style={styles.tabs}>
              {tabsElems}
          </View>

          {selectedTab == TAB_DETAILS &&
              <GroupDetail/>
          }

          {selectedTab == TAB_MOVIES &&
              <>
                  <ScrollView contentContainerStyle={styles.listContentContainer}>
                      {movies.map((movie, index) => (
                          <Pressable key={index} style={styles.movie}>

                              <Image style={styles.movieImage}
                                     source={{uri: movie.image}}
                                     accessibilityLabel="movie"/>

                              <View style={styles.movieSide}>
                                  <Text style={[styles.movieTitle]}>
                                      {movie.title}
                                  </Text>
                                  <Text style={styles.movieDescription}>
                                      {movie.description}
                                  </Text>
                              </View>
                          </Pressable>
                      ))}
                  </ScrollView>
              </>
          }
      </>
    )
};

export {GroupView};
