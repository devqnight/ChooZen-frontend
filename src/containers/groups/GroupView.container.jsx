import {useEffect, useState} from "react";
import {Text, View, Pressable, Image, StyleSheet, ScrollView} from "react-native";
import { useSelector } from "react-redux";
import { ScrollMovieList } from "../movies/ScrollMovieList.container";

import GroupDetail from "./GroupDetail.container";

const GroupView = (props) => {
    const theme = useSelector((state) => state.theme);
    const user = useSelector((state) => state.user);

    const styles = StyleSheet.create({
        tabs: {
            flexDirection: "row",
            margin: 16,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: theme.bar.inactiveBackground,
        },
        tab: {
            flex: 1,
            textAlign: "center",
            paddingStart: 16,
            paddingEnd: 16,
            paddingTop: 8,
            paddingBottom: 8,
            color: theme.bar.inactiveTint
        },
        tabSelected: {
            backgroundColor: theme.bar.activeBackground,
            color: theme.bar.activeTint,
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
    const movies = useSelector((state) => state.data.movies);

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
                    style={tabStyles}
                    onPress={() => setSelectedTab(tab.id)}>

                    {tab.label}
              </Text>)
    });

    return (
      <View style={styles.container}>
          <View style={styles.tabs}>
              {tabsElems}
          </View>

          {selectedTab == TAB_DETAILS &&
              <GroupDetail/>
          }

          {selectedTab == TAB_MOVIES &&
              <View style={styles.listContainer}>
                    { ((movies.movies && movies.movies.length > 0) || (movies.voted && movies.voted.length > 0)) &&
                        <ScrollMovieList 
                            movies={[...movies.movies, ...movies.voted]}
                            user={user}
                            theme={theme}
                            height={580}
                            marginBottom={60}
                        />
                    }
                    {}
              </View>
          }
      </View>
    )
};

export {GroupView};
