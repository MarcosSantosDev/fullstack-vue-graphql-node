const { ApolloServer } = require("apollo-server");

const typeDefs = `

    type Item {
        id: Int,
        type: String,
        description: String
    }

    type Query {
        items(type: String): [Item]
    }

`;

const items = [
	{ id: 1, type: 'prefix', description: 'Git' },
	{ id: 2, type: 'prefix', description: 'Google' },
	{ id: 3, type: 'prefix', description: 'Docker' },
	{ id: 4, type: 'prefix', description: 'Super' },
	{ id: 5, type: 'sufix', description: 'Hub' },
	{ id: 6, type: 'sufix', description: 'Lab' },
	{ id: 7, type: 'sufix', description: 'Chrome' },
];

const resolvers = {
	Query: {
		items(opt, args) {
			return items.filter(item => item.type === args.type);
		}
	}
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen();