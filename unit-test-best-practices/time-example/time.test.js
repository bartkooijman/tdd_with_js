test("test message during daytime", () => {
  expect(messageDuringTheDay()).toBe("The sun is shining");
});

function messageDuringTheDay() {
  const date = new Date();
  const currentHour = date.getHours();
  return currentHour >= 9 && currentHour < 18
    ? "The sun is shining"
    : "The moon is shining";
}
