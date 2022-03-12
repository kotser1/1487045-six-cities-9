import { Review } from '../types/review';

const mockReviews: Review[] = [
  {
    'id': 1,
    'user': {
      'id': 13,
      'isPro': false,
      'name': 'Zak',
      'avatarUrl': 'https://9.react.pages.academy/static/avatar/4.jpg',
    },
    'rating': 5,
    'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    'date': '2022-02-01T21:48:13.667Z',
  },
  {
    'id': 2,
    'user': {
      'id': 10,
      'isPro': true,
      'name': 'Max',
      'avatarUrl': 'https://9.react.pages.academy/static/avatar/1.jpg',
    },
    'rating': 5,
    'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    'date': '2022-02-01T21:48:13.667Z',
  },
];

export { mockReviews };
