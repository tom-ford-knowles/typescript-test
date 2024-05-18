enum HttpStatusCode {
  ClientErrorBadRequest = 400,
  ClientErrorConflict = 409,
  ClientErrorExpectationFailed = 417,
  ClientErrorFailedDependency = 424,
  ClientErrorForbidden = 403,
  ClientErrorGone = 410,
  ClientErrorImATeapot = 418,
  ClientErrorLengthRequired = 411,
  ClientErrorLocked = 423,
  ClientErrorLoginTimeOut = 440,
  ClientErrorMethodNotAllowed = 405,
  ClientErrorMisdirectedRequest = 421,
  ClientErrorNotAcceptable = 406,
  ClientErrorNotFound = 404,
  ClientErrorPayloadTooLarge = 413,
  ClientErrorPaymentRequired = 402,
  ClientErrorPreconditionFailed = 412,
  ClientErrorPreconditionRequired = 428,
  ClientErrorProxyAuthRequired = 407,
  ClientErrorRangeNotSatisfiable = 416,
  ClientErrorRequestHeaderFieldsTooLarge = 431,
  ClientErrorRequestTimeout = 408,
  ClientErrorRetryWith = 449,
  ClientErrorTooManyRequests = 429,
  ClientErrorUnauthorized = 401,
  ClientErrorUnavailableForLegalReasons = 451,
  ClientErrorUnprocessableEntity = 422,
  ClientErrorUnsupportedMediaType = 415,
  ClientErrorUpgradeRequired = 426,
  ClientErrorURITooLong = 414,
  ServerErrorBadGateway = 502,
  ServerErrorBandwidthLimitExceeded = 509,
  ServerErrorGatewayTimeout = 504,
  ServerErrorHTTPVersionNotSupported = 505,
  ServerErrorInsufficientStorage = 507,
  ServerErrorInternal = 500,
  ServerErrorLoopDetected = 508,
  ServerErrorNetworkAuthRequired = 511,
  ServerErrorNotExtended = 510,
  ServerErrorNotImplemented = 501,
  ServerErrorServiceUnavailable = 503,
  ServerErrorVariantAlsoNegotiates = 506,
}

type MethodConfig = {
  methodName: string
  statusCode: HttpStatusCode
  message: string
}

type HttpResponse = {
  readonly statusCode: HttpStatusCode
  readonly message: string
}

function createErrorMethods(config: MethodConfig[]) {
  const methods: {
    [key: string]: (messageOverride?: string) => HttpResponse
  } = {}
  config.forEach(configObject => {
    methods[configObject.methodName] = function (
      messageOverride?: string
    ): HttpResponse {
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
    statusCode: HttpStatusCode.ClientErrorBadRequest,
    message: "Bad request",
  },
  {
    methodName: "notFound",
    statusCode: HttpStatusCode.ClientErrorNotFound,
    message: "Not found",
  },
])
const { badRequest, notFound } = errorMethods
