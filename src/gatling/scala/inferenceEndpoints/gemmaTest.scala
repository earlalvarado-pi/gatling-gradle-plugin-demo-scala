package inferenceEndpoints

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class gemmaTest extends Simulation {

  val feeder = csv("gemma.csv").random

  val defaultEndpoint= ""
  val endpoint = System.getProperty("endpointUrl", defaultEndpoint)

  val postQuestions= scenario("Post JSON Data")
    .feed(feeder)
    .exec(
      http("PostRequest")
        .post(endpoint)
        .header("Content-Type", "application/json")
        .header("Accept", "application/json")
        //.header("Authorization", "Bearer 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")
        .body(StringBody("""{
                              "inputs": "${Sentence}",
                              "parameters": {}
                         }""")).asJson

        .check(status.is(200))
    )

  val users = scenario("Users").exec(postQuestions)

  setUp(
    users.inject(rampUsers(10).during(100)),
  )
}
