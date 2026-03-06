// posts.js

function loadPostList() {
  fetch('./posts/post.json')
    .then(r => r.json())
    .then(data => {
      data.posts.sort((a, b) => b.date.localeCompare(a.date));

      const el = document.getElementById('posts');
      if (!el) {
        console.error('posts container not found');
        return;
      }

      const container = document.createElement('div');
      container.className = 'post-list';

      data.posts.forEach(p => {
        const href = p.file.endsWith('.md') ? p.file + '.html' : p.file;

        const post = document.createElement('article');
        post.className = 'post-item';

        post.innerHTML = `
          <header class="post-header">
            <a class="post-title" href="${href}">${p.title}</a>
            <span class="post-date">${p.date}</span>
          </header>

          <div class="post-body">
            <img class="post-image"
                 src="${p.image}"
                 alt="Preview for ${p.title}"
                 loading="lazy">
            <p class="post-summary">${p.summary}</p>
          </div>
          
        `;

        container.appendChild(post);
      });

      el.innerHTML = '';
      el.appendChild(container);
    })
    .catch(err => console.error('Failed to load posts', err));
}

loadPostList();
