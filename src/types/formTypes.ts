export interface FieldRule {
	required: boolean;
	message: string;
}

export interface FieldRules {
	[key: string]: FieldRule;
}
