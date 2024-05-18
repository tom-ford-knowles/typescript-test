import { createErrorMethods } from "../src/index"

describe("testing index file", () => {
  test("createErrorMethods should return an object of methods", () => {
    expect(
      createErrorMethods([
        {
          methodName: "badRequest",
          statusCode: 400,
          message: "Bad request",
        },
      ])
    ).toEqual({
      badRequest: expect.any(Function),
    })
  })
})
