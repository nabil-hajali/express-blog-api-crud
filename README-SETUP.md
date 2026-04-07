# Express Blog Routing — Setup

Run locally:

```bash
cd /Users/nabil/Desktop/Boolean/express/express-blog-routing
npm install
npm start
```

Endpoints:

- `GET /` -> returns plain text: "Server del mio blog"
- `GET /bacheca` -> returns JSON object `{ posts: [...] }` with the posts array

Images are served from `public/images`, accessible at `/images/*.svg`.
