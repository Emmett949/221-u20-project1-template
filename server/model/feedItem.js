class FeedItem {
  constructor({ id, title, body, linkUrl, imageUrl }) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
  }
}

const feedItems = [];

module.exports = { FeedItem, feedItems };
