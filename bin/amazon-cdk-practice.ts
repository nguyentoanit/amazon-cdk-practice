#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import {
  AmazonCdkPracticeLambdaStack,
  AmazonCdkPracticeRDSStack,
  AmazonCdkPracticeSNSStack,
} from '../lib/'

const app = new App()
new AmazonCdkPracticeSNSStack(app, AmazonCdkPracticeSNSStack.name)
new AmazonCdkPracticeLambdaStack(app, AmazonCdkPracticeLambdaStack.name)
new AmazonCdkPracticeRDSStack(app, AmazonCdkPracticeRDSStack.name)
