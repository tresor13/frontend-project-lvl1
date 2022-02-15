const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [{ name: 'Taywin', gender: 'male' }],
  },
];

export default function getGirlfriends(object) {
  const filteredFriends = object.map(({ friends }) => friends);
  const allFriends = filteredFriends.flat(2);
  const result = allFriends.filter((user) => user.gender === 'female');
  console.log(result);
  return result.flat(2);
}

getGirlfriends(users);
