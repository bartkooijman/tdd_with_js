import NewsAgency from "./NewsAgency.mjs";
import NewsChannel from "./NewsChannel.mjs";

//A news agency receives news items and makes it available for NewsChannels
//News channels subscribe to news items from news agencies and show them to their readers

const nos = new NewsChannel("NOS");
const rtl = new NewsChannel("RTL Nieuws");

const newsAgency = new NewsAgency();

newsAgency.subscribe(nos)
newsAgency.subscribe(rtl)

newsAgency.receiveNewsItem("New president elected in the USA");