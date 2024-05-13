// Please read the README for instructions on what to do.

function createErrorMethods(config) {
 // TODO: your function implementation here
}

const errorMethods = createErrorMethods(/* TODO: your config here */);
const { badRequest, notFound } = errorMethods;

// Example usage: Bad Request
badRequest();
badRequest("Overriden bad request message.");

// Example usage: Not Found
notFound();
notFound("This is an override message for the 'Not Found' method.");

// Example usage: Gateway Timeout
errorMethods.gatewayTimeout();
errorMethods.gatewayTimeout("Overriding the default message.");