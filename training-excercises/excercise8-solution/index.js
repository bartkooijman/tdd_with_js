const newsAgency = require("./NewsAgency.js");
const NewsChannel = require("./NewsChannel.js");

//A news agency receives news items and makes it available for NewsChannels
//News channels subscribe to news items from news agencies and show them to their readers

const nos = new NewsChannel("NOS");
const rtl = new NewsChannel("RTL Nieuws");

//No longer needed when it becomes singleton
//const newsAgency = new NewsAgency();

newsAgency.subscribe(nos)
newsAgency.subscribe(rtl)

newsAgency.receiveNewsItem("New president elected in the USA");