#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import {
  AmazonCdkPracticeIAMStack,
  AmazonCdkPracticeLambdaStack,
  AmazonCdkPracticeRDSStack,
  AmazonCdkPracticeSNSStack,
} from '../lib/'

const app = new App()
new AmazonCdkPracticeIAMStack(app, AmazonCdkPracticeIAMStack.name)
new AmazonCdkPracticeSNSStack(app, AmazonCdkPracticeSNSStack.name)
new AmazonCdkPracticeLambdaStack(app, AmazonCdkPracticeLambdaStack.name)
new AmazonCdkPracticeRDSStack(app, AmazonCdkPracticeRDSStack.name)
