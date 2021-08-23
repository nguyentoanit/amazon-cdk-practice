# Amazon CDK Practice

This is my Amazon CDK practice. Follow [CDK workshop.](https://cdkworkshop.com/)

## Set up

Use [AWS Vault](https://github.com/99designs/aws-vault) to securely store and access AWS credentials in a development environment.

## Examples

- Create a user, add into a group and set password as generated secret key ([amazon-cdk-practice-iam-stack.ts](./lib/amazon-cdk-practice-iam-stack.ts)).
- Create a lambda function and define an API Gateway REST API resource backed by our function ([amazon-cdk-practice-lambda-stack.ts](./lib/amazon-cdk-practice-lambda-stack.ts)).
- [WIP] Publish a database in RDS ([amazon-cdk-practice-rds-stack.ts](./lib/amazon-cdk-practice-rds-stack.ts)).
- Create a topic and subscribe a queue  ([amazon-cdk-practice-sns-stack.ts](./lib/amazon-cdk-practice-sns-stack.ts)).
