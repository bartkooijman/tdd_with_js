import NewsAgency from "./NewsAgency.mjs";
import NewsChannel from "./NewsChannel.mjs";

const infoQ = new NewsChannel("InfoQ");
const dZone = new NewsChannel("DZone");

const newsAgency = new NewsAgency();

newsAgency.receiveNewsItem("New version of JavaScript released ES3000");