import { Application, Router, send  } from "https://deno.land/x/oak/mod.ts";

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});

const router = new Router();
router
  .get("/", async (context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}`,
      index: "index.html",
    });
  })
  .get("/feedback/new", (context) => {
    context.response.body = Array.from(books.values());
  })
  .get("/feedback/starts", (context) => {
    context.response.body = Array.from(books.values());
  })

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 80 });