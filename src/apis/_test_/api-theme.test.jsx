import {changeColor} from "../api-theme";

describe("Theme", () => {
  it("should change the theme", async () => {
    const theme = await changeColor("#FF0000")
    expect(theme).toEqual({
      bar: {
        activeTint: "#FFF",
        inactiveTint: "#FF0000",
        activeBackground: "#FF0000",
        inactiveBackground: "#FFFFFF",
      },
      accentColor: "#FF0000",
      backgroundColor: "#FF0000"
    })
  })
})

