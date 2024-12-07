import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type InferInferPostBodyParam = FromSchema<typeof schemas.InferInferPost.body>;
export type InferInferPostResponse200 = FromSchema<typeof schemas.InferInferPost.response['200']>;
export type InferInferPostResponse422 = FromSchema<typeof schemas.InferInferPost.response['422']>;
