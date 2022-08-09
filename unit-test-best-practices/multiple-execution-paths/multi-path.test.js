const colors = ["orange", "blue", "red"]

test("conditional test", () => {
  if(colors.length == 3) {
    expect(colors.length).toBe(3)
  } else {
    expect(colors.length).toBeGreaterThan(1)
  }
})

//gain more control over the behavior of the colors array