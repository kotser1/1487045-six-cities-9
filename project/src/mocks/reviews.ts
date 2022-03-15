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
    'date': 'April 2020',
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
    'date': 'May 2021',
  },
  {
    'id': 3,
    'user': {
      'id': 17,
      'isPro': false,
      'name': 'Emely',
      'avatarUrl': 'https://9.react.pages.academy/static/avatar/8.jpg',
    },
    'rating': 4,
    'comment': 'I stayed here for one night and it was an unpleasant experience.',
    'date': 'September 2021',
  },
];

export { mockReviews };
