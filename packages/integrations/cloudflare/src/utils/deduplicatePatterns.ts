/**
 * Remove duplicates and redundant patterns from an `include` or `exclude` list.
 * Otherwise Cloudflare will throw an error on deployment. Plus, it saves more entries.
 * E.g. `['/foo/*', '/foo/*', '/foo/bar'] => ['/foo/*']`
 * @param patterns a list of `include` or `exclude` patterns
 * @returns a deduplicated list of patterns
 */
export function deduplicatePatterns(patterns: string[]) {
	const openPatterns: RegExp[] = [];

	return [...new Set(patterns)]
		.sort((a, b) => a.length - b.length)
		.filter((pattern) => {
			if (openPatterns.some((p) => p.test(pattern))) {
				return false;
			}

			if (pattern.endsWith('*')) {
				openPatterns.push(new RegExp(`^${pattern.replace(/(\*\/)*\*$/g, '.*')}`));
			}

			return true;
		});
}
