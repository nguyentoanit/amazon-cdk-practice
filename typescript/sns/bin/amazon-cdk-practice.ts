#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { AmazonCdkPracticeSNSStack } from '../lib/'

const app = new App()
new AmazonCdkPracticeSNSStack(app, AmazonCdkPracticeSNSStack.name)
