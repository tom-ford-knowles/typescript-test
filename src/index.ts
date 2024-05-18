// Please read the README for instructions on what to do.
import { StatusCode } from "status-code-enum"

type MethodConfig = {
  methodName: string
  statusCode: StatusCode
  message: string
}

type HttpResponse = {
  statusCode: StatusCode
  message: string
}

function createErrorMethods(config: MethodConfig[]) {
  const methods: {
    [key: string]: (messageOverride?: string) => HttpResponse
  } = {}
  config.forEach(configObject => {
    const methodName = configObject.methodName
    methods[methodName] = function (messageOverride?: string): HttpResponse {
      return {
        statusCode: configObject.statusCode,
        message: messageOverride ?? configObject.message,
      }
    }
  })

  return methods
}

const errorMethods = createErrorMethods([
  {
    methodName: "badRequest",
    statusCode: StatusCode.ClientErrorBadRequest,
    message: "Bad request",
  },
  {
    methodName: "notFound",
    statusCode: StatusCode.ClientErrorNotFound,
    message: "Not found",
  },
])
const { badRequest, notFound } = errorMethods
