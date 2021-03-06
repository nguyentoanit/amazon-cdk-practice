import { App, Stack, StackProps } from '@aws-cdk/core'
import { LambdaRestApi } from '@aws-cdk/aws-apigateway'
const lambda = require('@aws-cdk/aws-lambda')

export class AmazonCdkPracticeLambdaStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,    // execution environment
      code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
      handler: 'hello.handler'                // file is "hello", function is "handler"
    })

    // defines an API Gateway REST API resource backed by our "hello" function.
    new LambdaRestApi(this, 'Endpoint', {
      handler: hello
    })
  }
}
