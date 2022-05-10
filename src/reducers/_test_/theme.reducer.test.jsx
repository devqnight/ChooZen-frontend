import theme from "../theme.reducer";

test("should return THEME_SWITCH_REQUEST", () => {
    const action = {
        type: "THEME_SWITCH_REQUEST"
    }
    const newState = theme(undefined, action);
    expect(newState).toEqual({
        bar: {
            activeTint: "#FFF",
            inactiveTint: "#D5B0D5",
            activeBackground: "#D5B0D5",
            inactiveBackground: "#FFFFFF",
        },
        accentColor: "#D5B0D5",
        backgroundColor: "#D5B0D5"
    });
});

test("should return RESTORE_THEME_REQUEST", () => {
    const action = {
        type: "RESTORE_THEME_REQUEST"
    }
    const newState = theme(undefined, action);
    expect(newState).toEqual({
        bar: {
            activeTint: "#FFF",
            inactiveTint: "#D5B0D5",
            activeBackground: "#D5B0D5",
            inactiveBackground: "#FFFFFF",
        },
        accentColor: "#D5B0D5",
        backgroundColor: "#D5B0D5"
    });
});


