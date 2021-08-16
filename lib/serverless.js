import getUser from '@functions/getUser';
const serverlessConfiguration = {
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
            stages: ['dev'],
            start: {
                port: 8000,
                inMemory: true,
                heapInitial: 200,
                heapMax: 1,
                migrate: true,
                seed: true,
                convertEmptyValues: true
            },
            migration: {
                dir: 'offline/migrations'
            }
        }
    },
    plugins: [
        'serverless-webpack',
        'serverless-dynamodb-local',
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
    functions: {
        getUser
    },
    resources: {
        Resources: {
            usersTable: {
                Type: 'AWS::DynamoDB::Table',
                DeletionPolicy: 'Retain',
                Properties: {
                    TableName: 'users',
                    AttributeDefinitions: [{
                            attributeName: 'id',
                            attributeType: 'N'
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
//# sourceMappingURL=serverless.js.map
