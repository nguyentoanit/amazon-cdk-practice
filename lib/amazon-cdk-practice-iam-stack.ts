import { App, Stack, StackProps } from '@aws-cdk/core'
import { Secret } from '@aws-cdk/aws-secretsmanager'
import {
  Group,
  User,
} from '@aws-cdk/aws-iam'


export class AmazonCdkPracticeIAMStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    const secret = new Secret(this, 'AmazonCdkPracticeDeveloper1Password')
    const group = new Group(this, 'AmazonCdkPracticeDeveloper')
    const user = new User(this, 'Developer1', { password: secret.secretValue })
    group.addUser(user)
    // TODO: add policy for this group.
  }
}
