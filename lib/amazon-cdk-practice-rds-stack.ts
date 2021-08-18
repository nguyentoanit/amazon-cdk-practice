import { App, Duration, Stack, StackProps } from '@aws-cdk/core'
import {
  InstanceType,
  InstanceClass,
  InstanceSize,
  Vpc,
} from '@aws-cdk/aws-ec2'
import {
  Credentials,
  DatabaseInstance,
  DatabaseInstanceEngine,
  PostgresEngineVersion,
  StorageType,
} from '@aws-cdk/aws-rds'

export class AmazonCdkPracticeRDSStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    // TODO: Add a policy to limit IP Address which can access RDS
    const vpc = new Vpc(this, 'CDKPracticeVpcForRDS')

    const instance = new DatabaseInstance(this, 'CDKPracticeInstance', {
      engine: DatabaseInstanceEngine.postgres({ version: PostgresEngineVersion.VER_13_3 }),
      instanceType: InstanceType.of(InstanceClass.BURSTABLE2, InstanceSize.NANO),
      storageType: StorageType.STANDARD,
      credentials: Credentials.fromGeneratedSecret('cdk-practice-rds'),
      vpc,
      allocatedStorage: 20, // Minimum is 20 GiB.
      backupRetention: Duration.days(7),
    })
  }
}
