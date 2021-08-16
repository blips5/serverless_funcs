import type { AWS } from '@serverless/typescript';
import getUser from '@functions/getUser';
import addUser from '@functions/addUser';


const serverlessConfiguration: AWS = {
  service: 'serverless',
  frameworkVersion: '2',
  custom: {

    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    serverlessOffline: {
      httpsProtocol: "dev-certs",
      httpPort: 3000,
      stageVariables: {
        dev: "dev"
      }
    },
    dynamodb: {
      // If you only want to use DynamoDB Local in some stages, declare them here
      stages: ['dev'],
      start: {
        port: 10000,
        inMemory: true,
        migrate: true,
        seed: true,
        // Uncomment only if you already have a DynamoDB running locally
        // noStart: true
      },
      migration: {
        dir: 'offline/migrations'
      }
    }
  },
  plugins: [
    'serverless-webpack',
    // Conflicts when running webpack.
    /*'serverless-plugin-typescript',*/

    'serverless-dynamodb-local',
    // Needs to be last.
    'serverless-offline'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1'
    },
    iamRoleStatements: [{
        Effect: "Allow",
        Action: [
            "dynamodb:Query",
            "dynamodb:Scan",
            "dynamodb:GetItem",
            "dynamodb:PutItem",
            "dynamodb:PostItem",
            "dynamodb:UpdateItem",
            "dynamodb:DeleteItem"
        ],
        Resource: "*",
     }],
    lambdaHashingVersion: '20201221'
  },
  // import the function via paths
  functions: {
        addUser, getUser
  },
  resources: {
    Resources: {
      usersTable: {
        Type: 'AWS::DynamoDB::Table',
        DeletionPolicy: 'Retain',
        Properties: {
          TableName: 'users',
          AttributeDefinitions: [{
            AttributeName: 'id',
            AttributeType: 'S'
          }],
          KeySchema: [{
            AttributeName: 'id',
            KeyType: 'HASH'
          }],
          ProvisionedThroughput: {
              ReadCapacityUnits: 1,
              WriteCapacityUnits: 1

          }
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
