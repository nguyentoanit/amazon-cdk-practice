#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import {
  AmazonCdkPracticeLambdaStack,
} from '../lib/'

const app = new App()
new AmazonCdkPracticeLambdaStack(app, AmazonCdkPracticeLambdaStack.name)
