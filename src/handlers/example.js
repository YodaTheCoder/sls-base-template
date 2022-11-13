async function example(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "endpoint is working" }),
  };
}

export const handler = example;
