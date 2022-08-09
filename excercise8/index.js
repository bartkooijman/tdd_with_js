class NewsAgency {
  newsItems = [];

  receiveNewsItem(newsItem) {
    debugger;
    this.newsItems.push(newsItem);
  }
}

class NewsChannel {
  constructor(channelName) {
    this.channelName = channelName;
  }

  publishNewsItem(newsItem) {
    console.log(newsItem);
  }
}

const infoQ = new NewsChannel("InfoQ");
const dZone = new NewsChannel("DZone");

const newsAgency = new NewsAgency();

newsAgency.receiveNewsItem("New version of JavaScript released: ES3000");