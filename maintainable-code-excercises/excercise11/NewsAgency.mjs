class NewsAgency {
  constructor() {
    if (NewsAgency.instance == null) {
      this._newsChannels = [];
      NewsAgency.instance = this
    }
    return NewsAgency.instance
  }

  subscribe(newsChannel) {
    this._newsChannels.push(newsChannel);
  }

  unsubscribe(newsChannel) {
    this._newsChannels = this._newsChannels.filter((ns) => newsChannel !== ns);
  }

  receiveNewsItem(newsItem) {
    this._newsChannels.forEach((newsChannel) => {
      newsChannel.publishNewsItem(newsItem);
    });
  }
}

const newsAgency = new NewsAgency()
Object.freeze(newsAgency)
export default newsAgency