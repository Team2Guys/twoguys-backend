import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ApolloError } from 'apollo-server-express';

export const customHttpException = (error: any, status?: string) => {
   if (error instanceof PrismaClientKnownRequestError) {
      switch (error.code) {
         case 'P2002':
            throw new ApolloError(
               'A record with this value already exists.',
               'P2002'
            );
         case 'P2025':
            throw new ApolloError(
               'The requested record does not exist.',
               'P2025'
            );
         default:
            throw new ApolloError('A database error occurred.', error.code || 'DB_ERROR');
      }
   }

   throw new ApolloError(error.message || 'An unexpected error occurredsdfds.', status || 'INTERNAL_SERVER_ERROR');
};
