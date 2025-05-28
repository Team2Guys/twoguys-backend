// enums/comment-status.enum.ts
import { registerEnumType } from '@nestjs/graphql';

export enum CommentStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

// Register ONCE globally
registerEnumType(CommentStatus, {
  name: 'CommentStatus',
  description: 'Status for product reviews or questions',
});
