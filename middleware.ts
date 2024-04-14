import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        '/',
        '/favicon.ico',
        '/assets/images/logo.svg',
        'events:id',
        'api/webhook/clerk',
        'api/webhook/stripe',
        'api/uploadthing',
    ],
    ignoredRoutes: [
        'api/webhook/clerk',
        'api/webhook/stripe',
        'api/uploadthing'
    ]
});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};