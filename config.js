// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Marques',
  imageBackground: false,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep,',

  // Weather
  weatherKey: 'd5392e9190af57a190ca98595deab27c',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '38.643330',
  weatherLongitude: '-9.167230',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'PowerBI',
      icon: 'bar-chart',
      link: 'https://app.powerbi.com/groups/me/apps/c5d26f6f-df03-4c39-8160-96a50e90ae74/reports/d0d698c8-1904-4b1a-8c51-b41aa6e892c0/ReportSection6d1a6e72dc5b4459cd31?ctid=1e7930e6-1ca4-40df-ac06-adabc2b139a3&bookmarkGuid=Bookmarkeb9e787c137d047a58b9',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'VictorOps',
      icon: 'film',
      link: 'https://portal.victorops.com/ui/talkdesk-inc/incidents',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'github',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'GS KB',
      icon: 'database',
      link: 'https://talkdesk.atlassian.net/wiki/spaces/VAN/overview?homepageId=1509491585',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'Media',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/',
      },
      {
        name: 'HBO',
        link: 'https://hboportugal.com/',
      },
      {
        name: 'Netflix',
        link: 'https://netflix.com/',
      },
      {
        name: 'BeachCam',
        link: 'https://beachcam.meo.pt/livecams/',
      },
      {
        name: 'Surfline',
        link: 'https://www.surfline.com/surf-report/costa-da-caparica/5842041f4e65fad6a7708e65',
      },
    ],
    secondList: [
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/',
      },
      {
        name: 'Udemy',
        link: 'https://www.udemy.com/',
      },
      {
        name: 'Amazon.es',
        link: 'http://amazon.es/',
      },
      {
        name: 'WhatsApp',
        link: 'https://web.whatsapp.com/',
      },
    ],
  },
};
