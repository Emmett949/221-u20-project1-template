const { FeedItem, feedItems } = require('../model/feedItem');

exports.getAll = (req, res) => {
  res.json(feedItems);
};

exports.create = (req, res) => {
  const { title, body, linkUrl, imageUrl } = req.body;
  const item = new FeedItem({
    id: Date.now().toString(),
    title, body, linkUrl, imageUrl
  });
  feedItems.push(item);
  res.status(201).json(item);
};

exports.getById = (req, res) => {
  const item = feedItems.find(i => i.id === req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
};

exports.deleteById = (req, res) => {
  const idx = feedItems.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Not found' });
  feedItems.splice(idx, 1);
  res.sendStatus(204);
};

exports.updateById = (req, res) => {
  const item = feedItems.find(i => i.id === req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  const { title, body, linkUrl, imageUrl } = req.body;
  if (title !== undefined) item.title = title;
  if (body !== undefined) item.body = body;
  if (linkUrl !== undefined) item.linkUrl = linkUrl;
  if (imageUrl !== undefined) item.imageUrl = imageUrl;
  res.json(item);
};
