import newsAgency from "./NewsAgency.mjs";
import NewsChannel from "./NewsChannel.mjs";

const infoQ = new NewsChannel("InfoQ");
const dZone = new NewsChannel("DZone");

//No longer needed when it becomes singleton
//const newsAgency = new NewsAgency();

//solution
newsAgency.subscribe(infoQ)
newsAgency.subscribe(dZone)

newsAgency.receiveNewsItem("New version of JavaScript released ES3000");