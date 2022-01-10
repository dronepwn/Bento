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
      name: 'VictorOps',
      icon: 'list',
      link: 'https://portal.victorops.com/ui/talkdesk-inc/incidents',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'VINC',
      icon: 'film',
      link: 'https://talkdesk.atlassian.net/jira/software/projects/VINC/boards/1196',
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
      name: 'Vanguard KB',
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
