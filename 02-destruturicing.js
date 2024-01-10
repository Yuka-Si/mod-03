// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location, avatar, stats } = profile;
// console.log(name, tag, location, avatar, followers, views, likes);


const rgb = [255, 100, 80];
const [red, green, blue] = rgb;
// console.log(red, green, blue);


const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};
const entries = Object.entries(authors);

for (const [name, rating] of entries) {

    console.log(name, rating);
}