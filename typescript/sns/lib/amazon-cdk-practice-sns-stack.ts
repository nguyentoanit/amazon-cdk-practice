import { Topic } from '@aws-cdk/aws-sns'
import { SqsSubscription } from '@aws-cdk/aws-sns-subscriptions'
import { Queue } from '@aws-cdk/aws-sqs'
import { App, Duration, Stack, StackProps } from '@aws-cdk/core'

export class AmazonCdkPracticeSNSStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    const queue = new Queue(this, 'AmazonCdkPracticeQueue', {
      visibilityTimeout: Duration.seconds(300)
    })

    const topic = new Topic(this, 'AmazonCdkPracticeTopic')

    topic.addSubscription(new SqsSubscription(queue))
  }
}
