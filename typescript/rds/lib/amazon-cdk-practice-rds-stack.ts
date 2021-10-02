import { App, Duration, Stack, StackProps } from '@aws-cdk/core'
import {
  SecurityGroup,
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

// WIP
export class AmazonCdkPracticeRDSStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    // TODO: Add a rule in security group to limit IP Address which can access RDS
    const vpc = new Vpc(this, 'CDKPracticeVpcForRDS')
    const securityGroup = new SecurityGroup(this, 'CDKPracticeRDSSecurityGroup', {
      vpc,
    })

    const database = new DatabaseInstance(this, 'CDKPracticeInstance', {
      engine: DatabaseInstanceEngine.postgres({ version: PostgresEngineVersion.VER_13_3 }),
      instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
      storageType: StorageType.STANDARD,
      credentials: Credentials.fromGeneratedSecret('rds_developer1'),
      vpc,
      allocatedStorage: 20,
      iamAuthentication: false,
      publiclyAccessible: true,
      backupRetention: Duration.days(0),
    })
  }
}
