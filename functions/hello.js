const faker = require("faker");

exports.handler = async function (event, context) {
  console.log("running function")
  const name = faker.name.firstName();
  console.log(`generated name is: ${name}`);
  return {
    statusCode: 200,
    headers: {
      "Cache-Contorl": "max-age=300,s-max-age=600,public",
    },
    body: JSON.stringify({ name })
  };
}