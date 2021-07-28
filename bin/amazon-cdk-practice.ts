#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AmazonCdkPracticeStack } from '../lib/amazon-cdk-practice-stack';

const app = new cdk.App();
new AmazonCdkPracticeStack(app, 'AmazonCdkPracticeStack');
