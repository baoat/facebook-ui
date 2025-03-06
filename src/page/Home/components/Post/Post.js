import Item from './components/Item/Item';

function Post() {
  const userDataPost = [
    {
      id: 1,
      avatar:
        'https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/476169811_122139579734560526_4089897883020855991_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHiWuTlbtceceYihcmP3KZRYZ3M6tuoW8xhnczq26hbzOEgIEuiHDgAo1rXcO_5hhypX8voQFQ20yOPI-rzoAUv&_nc_ohc=yUWpJ7yY5GMQ7kNvgHpj1NM&_nc_oc=Adier5FClKLNTANTQMxm5Q2TRorj2uMcGjYUUm1z6fMFliz77vXhWDaJgzTqQx1pJwwr3x8hj5xae81av5WolBFQ&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=Auh0s7XwAP2eO970ajQIguE&oh=00_AYBP437MzqIJCdWSTalN1sSlOWedQ2FrRb2NoHn-6UVsaw&oe=67CF475B',
      name: 'Jennie',
      cap: 'Hiiiiiiiiiiiii',
      imgPost:
        'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/468533401_122123425196560526_2373868260560475943_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4cmjnY0-MhPaclF0RMm_YW2TBmF46fCVbZMGYXjp8JaT65mkHKpKf0KHkjtrEakTaIEnZeEIMW4g7RvSDTr41&_nc_ohc=BI7HZpxOVIMQ7kNvgGTE5nD&_nc_oc=AdgAplRkVRAzq6rQ1jQGUZhsfMSMuSH8lGUrGVPBZligMCAuQaOXzN0wKvxvNPPLtLcVQQKLowbUOUrx9RkNhR0P&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=At7byQmJt_JZubIAAITWl0N&oh=00_AYCwFL13BDsjrhAMbo93vI4h-LpU18UzRGS2BdiwCMtx6A&oe=67CF1C2D',
      emotionsChildren: {
        emotions: [
          { type: 'Like', quantity: 1000 },
          { type: 'Heart', quantity: 1000 },
          { type: 'Haha', quantity: 1000 },
          { type: 'Wow', quantity: 1000 },
          { type: 'Sad', quantity: 1000 },
          { type: 'Angry', quantity: 1000 },
        ],
      },
      commentChildren: {
        comment: [
          {
            avatar: 'https://media.vov.vn/sites/default/files/styles/large/public/2021-04/exi4mw9uyacfpyl.jpg',
            name: 'V',
            content: 'No cap',
          },
        ],
      },
      share: 100,
    },
    {
      id: 2,
      avatar:
        'https://www.musicmundial.com/en/wp-content/uploads/2023/03/BTS-Jungkook-goes-shirtless-for-a-new-Calvin-Klein-campaign-and-wows-everyone-1.jpg',
      name: 'Jungkook',
      cap: 'Love everyone',
      imgPost: 'https://www.nme.com/wp-content/uploads/2023/03/jungkook-calvin-klein-campaign.jpg',
      emotionsChildren: {
        emotions: [
          { type: 'Like', quantity: 1122 },
          { type: 'Heart', quantity: 1511 },
          { type: 'Haha', quantity: 0 },
          { type: 'Wow', quantity: 0 },
          { type: 'Sad', quantity: 0 },
          { type: 'Angry', quantity: 0 },
        ],
      },
      commentChildren: {
        comment: [
          {
            avatar: 'https://tse1.mm.bing.net/th?id=OIP.zC7Cp81kWoA29iztSRx5UgHaFy&pid=Api&P=0&h=180',
            name: 'RM',
            content: 'Đẹp lắm em trai',
          },
        ],
      },
      share: 100,
    },
  ];

  return userDataPost.map((user) => <Item user={user} />);
}

export default Post;
