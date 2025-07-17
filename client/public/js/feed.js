function FeedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

const currentStories = [
    new FeedItem(
        "AI Summit at Marist",
        "Industry leaders gather to discuss AI innovation.",
        "https://www.marist.edu/news/hudson-valley-ai-summit",
        "images/hancock.jpeg"
    ),
    new FeedItem(
        "Generous Alumni Gift",
        "An alumna donates to support student programming campus-wide.", 
        "https://www.marist.edu/news/multimillion-dollar-gift",
        "images/news_pic.png"
    ),
    new FeedItem(
        "Marist Becomes University",
        "The campus community celebrates the transition to university status.",
        "https://www.wxxinews.org/2025-01-29/marist-college-officially-becomes-marist-university",
        "images/redfox.png"
    )
];

function displayItem(item) {
    return `
    <article class="feed-item">
      <h2>${item.title}</h2>
      <img class="feedImage" src="${item.imageUrl}" alt="${item.title}">
      <p>${item.body}</p>
      <a href="${item.linkUrl}" target="_blank">Read more →</a>
    </article>
  `;
}

function newsfeed() {
    const feedDiv = document.getElementById('newsfeed');
    if (feedDiv) {
        feedDiv.innerHTML = currentStories.map(displayItem).join('');
    }

    window.addEventListener('DOMContentLoaded', function() {
  const portal = document.getElementById('portal_button');
  if (portal) {
    portal.style.cursor = 'pointer';
    portal.addEventListener('click', function(e) {
      e.preventDefault(); 
      window.location.href = 'https://my.marist.edu/';
    });
  }
});

  console.log("newsfeed() executed — items rendered:", currentStories.length);
}

window.addEventListener('DOMContentLoaded', newsfeed);

