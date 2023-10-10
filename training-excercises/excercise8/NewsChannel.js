class NewsChannel {
  constructor(channelName) {
    this.channelName = channelName;
  }

  publishNewsItem(newsItem) {
    console.log(`${this.channelName}: ${newsItem}`);
  }
}

module.exports = NewsChannel;