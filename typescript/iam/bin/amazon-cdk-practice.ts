#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { AmazonCdkPracticeIAMStack } from '../lib/'

const app = new App()
new AmazonCdkPracticeIAMStack(app, AmazonCdkPracticeIAMStack.name)
