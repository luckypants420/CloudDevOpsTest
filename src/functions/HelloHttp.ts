import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function HelloHttp(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!, this is my first azure function` };
};

app.http('HelloHttp', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: HelloHttp
});
