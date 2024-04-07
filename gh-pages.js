import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		repo: 'https://github.com/irshadshalu/my-routed-app.git', // Change accordingly
		user: {
			name: 'Author Name',
			email: 'Author Email'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
