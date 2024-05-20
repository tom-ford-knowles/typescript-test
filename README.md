# Information

This task was to produce a method which generates further methods based on configuration passed in. It is based around HTTP error responses and codes.
The key function being implemented is called createErrorMethods. It accepts an array of objects with the type of MethodConfig. Each method config should have the following
- A method name
- A status code from the HttpStatusCode enum
- A message

The method then generates a method for each config passed to the function. For example, if the following was passed:
`[{methodName: 'badRequest', statusCode: HttpStatusCode.ClientErrorBadRequest, message: 'Bad request'}]`

Then the following method would be produced
`badRequest (messageOverride?: string): HttpResponse => {
  return {
    statusCode: 400,
    message: messageOverride ?? 'Bad request'
  }
}`

Each method can have it's message overwritten. Each method returns an object of the HttpResponse type which is
- statusCode; Read Only, corresponds to a value from the HttpStatusCode enum
- message; Read Only, is a string and is either the override or the one from the original method setup.

Multiple methods can be created at once, each with different names, status codes and messages. The TypeScript also fully specifies that the return properties are read only and cannot be modified. An error is thrown if a user tries to do so.

As an additional element, a small Jest test was created which ensures that the createErrorMethods function returns an object of functions. Further tests can be added to this if necessary.

# Potential Changes

As further potential changes, a class could be created to house the method and any additional elements it uses. Furthermore, to expand the status codes, the enum can be added to.
