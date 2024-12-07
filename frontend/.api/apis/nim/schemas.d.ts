declare const InferInferPost: {
    readonly body: {
        readonly additionalProperties: false;
        readonly properties: {
            readonly height: {
                readonly maximum: 1024;
                readonly minimum: 1024;
                readonly type: "integer";
                readonly default: 1024;
                readonly description: "Height of the image to generate, in pixels. Only height=1024 is supported";
                readonly title: "Height";
            };
            readonly width: {
                readonly maximum: 1024;
                readonly minimum: 1024;
                readonly type: "integer";
                readonly default: 1024;
                readonly description: "Width of the image to generate, in pixels. Only width=1024 is supported";
                readonly title: "Width";
            };
            readonly text_prompts: {
                readonly description: "An array of text prompts to use for generation";
                readonly items: {
                    readonly additionalProperties: false;
                    readonly properties: {
                        readonly text: {
                            readonly description: "The prompt itself";
                            readonly examples: readonly ["A photo of a Shiba Inu dog with a backpack riding a bike"];
                            readonly title: "Text";
                            readonly type: "string";
                        };
                        readonly weight: {
                            readonly enum: readonly [1, -1];
                            readonly type: "number";
                            readonly default: 1;
                            readonly description: "Weight of the prompt, only weight=1.0 for prompt and weight=-1 for negative prompt is supported\n\nDefault: `1`";
                            readonly title: "Weight";
                        };
                    };
                    readonly required: readonly ["text"];
                    readonly title: "TextPrompt";
                    readonly type: "object";
                };
                readonly maxItems: 2;
                readonly minItems: 1;
                readonly title: "Text Prompts";
                readonly type: "array";
            };
            readonly cfg_scale: {
                readonly exclusiveMinimum: 1;
                readonly maximum: 9;
                readonly type: "number";
                readonly default: 5;
                readonly description: "How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt).";
                readonly title: "Cfg Scale";
            };
            readonly clip_guidance_preset: {
                readonly enum: readonly ["NONE"];
                readonly type: "string";
                readonly default: "NONE";
                readonly description: "clip guidance preset. Only clip_guidance_preset=`NONE` is supported\n\nDefault: `NONE`";
                readonly title: "Clip Guidance Preset";
            };
            readonly sampler: {
                readonly enum: readonly ["DDIM", "K_EULER_ANCESTRAL", "K_LMS", "K_DPM_2_ANCESTRAL"];
                readonly type: "string";
                readonly default: "K_DPM_2_ANCESTRAL";
                readonly description: "The sampler to use for generation. Varying diffusion samplers will vary outputs significantly.\n\nDefault: `K_DPM_2_ANCESTRAL`";
                readonly title: "Sampler";
            };
            readonly samples: {
                readonly maximum: 1;
                readonly minimum: 1;
                readonly type: "integer";
                readonly default: 1;
                readonly description: "Number of images to generate. Only samples=1 is supported";
                readonly title: "Samples";
            };
            readonly seed: {
                readonly exclusiveMaximum: 4294967296;
                readonly minimum: 0;
                readonly type: "integer";
                readonly default: 0;
                readonly description: "The seed which governs generation. Omit this option or use 0 for a random seed";
                readonly title: "Seed";
            };
            readonly steps: {
                readonly maximum: 100;
                readonly minimum: 5;
                readonly type: "integer";
                readonly default: 25;
                readonly description: "Number of diffusion steps to run";
                readonly title: "Steps";
            };
            readonly style_preset: {
                readonly enum: readonly ["none"];
                readonly type: "string";
                readonly default: "none";
                readonly description: "Pass in a style preset to guide the image model towards a particular style. This list of style presets is subject to change. style_preset=`none` is supported\n\nDefault: `none`";
                readonly title: "Style Preset";
            };
        };
        readonly required: readonly ["text_prompts"];
        readonly title: "ImageRequest";
        readonly type: "object";
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly artifacts: {
                    readonly items: {
                        readonly properties: {
                            readonly base64: {
                                readonly description: "A base64-encoded string of the generated image (JPEG)";
                                readonly examples: readonly ["/9j/4AAQSkZ...b+AVZ/9k="];
                                readonly title: "Base64";
                                readonly type: "string";
                            };
                            readonly finishReason: {
                                readonly description: "The result of the generation process. `SUCCESS` indicates success. `ERROR` indicates an error. `CONTENT_FILTERED` indicates the result affected by the content filter\n\n`CONTENT_FILTERED` `ERROR` `SUCCESS`";
                                readonly enum: readonly ["CONTENT_FILTERED", "ERROR", "SUCCESS"];
                                readonly title: "FinishReason";
                                readonly type: "string";
                            };
                            readonly seed: {
                                readonly description: "The seed used during generation";
                                readonly title: "Seed";
                                readonly type: "integer";
                            };
                        };
                        readonly required: readonly ["base64", "finishReason", "seed"];
                        readonly title: "Artifact";
                        readonly type: "object";
                    };
                    readonly maxItems: 1;
                    readonly minItems: 1;
                    readonly title: "Artifacts";
                    readonly type: "array";
                };
            };
            readonly required: readonly ["artifacts"];
            readonly title: "ImageResponse";
            readonly type: "object";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly detail: {
                    readonly items: {
                        readonly properties: {
                            readonly loc: {
                                readonly items: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                };
                                readonly type: "array";
                                readonly title: "Location";
                            };
                            readonly msg: {
                                readonly type: "string";
                                readonly title: "Message";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly title: "Error Type";
                            };
                        };
                        readonly type: "object";
                        readonly required: readonly ["loc", "msg", "type"];
                        readonly title: "ValidationError";
                    };
                    readonly type: "array";
                    readonly title: "Detail";
                };
            };
            readonly type: "object";
            readonly title: "HTTPValidationError";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { InferInferPost };
