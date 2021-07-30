#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AmazonCdkPracticeLambdaStack } from '../lib/amazon-cdk-practice-lambda-stack';
import { AmazonCdkPracticeSNSStack } from '../lib/amazon-cdk-practice-sns-stack';

const app = new cdk.App();
new AmazonCdkPracticeSNSStack(app, 'AmazonCdkPracticeSNSStack');
new AmazonCdkPracticeLambdaStack(app, 'AmazonCdkPracticeLambdaStack')
