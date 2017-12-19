export default [
  {
    navTitle: 'NAV1',
    url: '/',
    sideItems: [
      {
        title: 'SIDE1',
        isShow: true,
        children: [
          {
            name: 'side1-children1',
            icon: 'fa fa-user',
            url: '/'
          },
          {
            name: 'side1-children2',
            icon: 'fa fa-lock',
            url: '/side2'
          }
        ]
      },
      {
        title: 'SIDE2',
        isShow: false,
        children: [
          {
            name: 'side2-children1',
            icon: 'fa fa-arrow-circle-left',
            url: '/side2-children1'
          },
          {
            name: 'side2-children2',
            icon: 'fa fa-arrows-alt',
            url: '/side2-children2'
          }
        ]
      }
    ]
  },
  {
    navTitle: 'NAV2',
    url: '/nav2',
    sideItems: [
      {
        title: 'NAV-SIDE',
        isShow: true,
        children: [
          {
            name: 'NAV-SIDE1',
            icon: 'fa fa-user',
            url: '/nav2'
          }
        ]
      }
    ]
  },
]