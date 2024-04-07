import { defineBackend } from '@aws-amplify/backend'
import { auth } from './auth/resource'
import { data } from './data/resource'
import { PolicyStatement } from 'aws-cdk-lib/aws-iam'

export const backend = defineBackend({
	auth,
	data,
})

const bedrockDS = backend.data.addHttpDataSource(
	'BedrockDataSource',
	'https://bedrock-runtime.us-east-1.amazonaws.com',
	{
		authorizationConfig: {
			signingRegion: 'us-east-1',
			signingServiceName: 'bedrock',
		},
	}
)

bedrockDS.grantPrincipal.addToPrincipalPolicy(
	new PolicyStatement({
		resources: [
			'arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-v2',
		],
		actions: ['bedrock:InvokeModel'],
	})
)
