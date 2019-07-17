import { GraphQLString, GraphQLNonNull } from 'graphql';
import { Author } from '../types/Author';
import { fakeDatabase } from '../../FakeDatabase';

export default {
    author: {
        type: Author,
        description: 'Get a specific author',
        // 獲取arguments
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: function(parent, {args}) {
            console.log(arg);
            return fakeDatabase.getAuthor(args.id);
        }
    }
}