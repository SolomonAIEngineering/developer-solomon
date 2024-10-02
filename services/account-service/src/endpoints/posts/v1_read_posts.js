import { createRoute, z } from "@hono/zod-openapi";
import { openApiErrorResponses } from "../../pkg/errors/index.js";
import { readPost } from "../../utils/index.js";
const readPostRoute = createRoute({
    tags: ["posts"],
    operationId: "readPost",
    method: "get",
    path: "/v1/posts/{slug}",
    request: {
        params: z.object({
            slug: z.string(),
        }),
    },
    responses: {
        200: {
            description: "Post content",
            content: {
                "text/plain": {
                    schema: z.string(),
                },
            },
        },
        ...openApiErrorResponses,
    },
});
export const registerV1ReadPost = (app) => app.openapi(readPostRoute, async (c) => {
    const { slug } = c.req.valid("param");
    const post = await readPost(c.env.DB, slug);
    if (post === null) {
        return c.json({ error: "Post not found" }, 404);
    }
    return c.text(post.body);
});
