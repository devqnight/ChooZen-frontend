
const changeColor = async (color) => {
    return {
        bar: {
            activeTint: "#FFF",
            inactiveTint: color,
            activeBackground: color,
            inactiveBackground: "#FFFFFF",
        },
        accentColor: color,
        backgroundColor: color
    }
}

export {changeColor}