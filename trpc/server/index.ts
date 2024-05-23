import {publicProcedure, router} from "./trpc"
import {z} from "zod"
import { createHTTPServer } from '@trpc/server/adapters/standalone';


const todoInputType = z.object({
  title: z.string(),
  desc: z.string()
})

const appRouter = router({
  createTodo: publicProcedure
    .input(todoInputType)
    .mutation(async (opts) => {
      const title = opts.input.title;
      const desc = opts.input.desc;
      const username = opts.ctx.username;  // get context similar to jwt header.userid


      // do db stuff here


      return { id: "1", username, title, desc }
    })
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,

  // write contex here 
  createContext(opts) {
    let authHeader = opts.req.headers["authorization"];
    console.log(authHeader);
    //jwt verify
    return {
      username: "123"
    }
  }
});
 
server.listen(3000);