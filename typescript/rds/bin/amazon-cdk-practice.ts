#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { AmazonCdkPracticeRDSStack } from '../lib/'

const app = new App()
new AmazonCdkPracticeRDSStack(app, AmazonCdkPracticeRDSStack.name)
