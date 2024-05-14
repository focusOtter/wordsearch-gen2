import { type ClientSchema, a, defineData } from '@aws-amplify/backend'

const schema = a.schema({
	WordSearch: a
		.model({
			id: a.id().required(),
			name: a.string().required(),
			columns: a.integer().required(),
			rows: a.integer().required(),
			wordBank: a.string().array().required(),
		})
		.authorization((allow) => [allow.owner()]),
	generateWordSearchWords: a
		.mutation()
		.arguments({ theme: a.string().required() })
		.returns(a.string().required())
		.authorization((allow) => [allow.authenticated()])
		.handler(
			a.handler.custom({
				dataSource: 'BedrockDataSource',
				entry: './generateWordSearchWords.js',
			})
		),
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
	schema,
	name: 'Wordsearch-API',
	authorizationModes: {
		defaultAuthorizationMode: 'userPool',
	},
})
