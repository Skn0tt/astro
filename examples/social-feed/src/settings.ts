import avatar from './assets/avatar.webp'

export default {
	name: 'Houston Astro',
	username: '@houston',
	avatar: {
		src: avatar,
		alt: 'Astro mascot Houston smiling',
	},
	rss: {
		title: 'Houston Astro’s Feed',
		description: 'Stay up-to-date with the latest posts from Houston Astro!',
	},
	pronouns: 'They/Them',
	location: 'Space',
	homepage: 'https://astro.build',
	social: {
		twitter: 'https://twitter.com/astrodotbuild',
		twitch: 'https://www.twitch.tv/bholmesdev',
		github: 'https://github.com/withastro',
		devto: 'https://dev.to/search?q=astro',
		codepen: 'https://codepen.io/delucis',
		mastodon: 'https://m.webtoo.ls/@astro',
		youtube: 'https://www.youtube.com/@astrodotbuild',
	},
} as const;
