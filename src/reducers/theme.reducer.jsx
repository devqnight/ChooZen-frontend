const initialState = {
    bar: {
        activeTint: "#FFF",
        inactiveTint: "#D5B0D5",
        activeBackground: "#D5B0D5",
        inactiveBackground: "#FFFFFF",
    },
    accentColor: "#D5B0D5",
    backgroundColor: "#D5B0D5"
}

const theme = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default theme;