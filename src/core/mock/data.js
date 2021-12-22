module.exports = {

  // GET /api/v1/bookings
  bookings: [
    { id: "e4ad7321-434c-46a8-9f04-9a87ef34a651", bookedAt: '2021-08-03T15:43:22.333Z', date: '2021-08-05', time: '19:00', groupSize: 5, name: 'Fam. de Vries', deals: ['bowling', 'dinner'] },
    { id: "01272e35-9ef5-4176-b044-0a86def29c1f", bookedAt: '2021-08-03T16:13:29.412Z', date: '2021-08-05', time: '18:00', groupSize: 3, name: 'Gerda Wevendael', deals: ['bowling'] },
    { id: "d74171d5-f978-45c2-bda7-b63e2f984e7d", bookedAt: '2021-08-03T15:43:28.659Z', date: '2021-08-05', time: '17:00', groupSize: 12, name: 'Rachid Al-Hadithi', deals: ['group-bowling'] },
    { id: "d1fece5c-7e8f-46d8-b50f-ed96ae82db12", bookedAt: '2021-08-03T15:45:42.165Z', date: '2021-08-05', time: '18:00', groupSize: 5, name: 'Patrick den Overste', deals: ['bowling'] },
    { id: "0d0e5755-46ca-498d-be3a-135b03f06214", bookedAt: '2021-08-03T15:47:37.523Z', date: '2021-08-06', time: '20:00', groupSize: 0, name: null, deals: ['dinner'] },
    { id: "7a463d41-aa30-457a-9e05-64b8ca5d5ceb", bookedAt: '2021-08-03T15:47:26.123Z', date: '2021-08-05', time: '18:00', groupSize: 4, name: 'G. Stickselar', deals: ['bowling', 'dinner'] },
    { id: "ea802f56-78ef-44ef-8b10-04fbb8bb0a97", bookedAt: '2021-08-03T15:39:52.123Z', date: '2021-08-05', time: '21:45', groupSize: 6, name: 'Francé d\'Lamouge', deals: ['bowling-disco'] },
    { id: "5bb0e279-aa76-4ecd-ade2-7155bce91854", bookedAt: '2021-08-03T16:43:22.873Z', date: '2021-08-06', time: '21:15', groupSize: 8, name: 'Peter Groenezoon', deals: ['bowling-with-bitterballen'] },
    { id: "de8162b6-b706-497c-9a63-8487af53f961", bookedAt: '2021-08-03T17:52:55.123Z', date: '2021-08-05', time: '18:30', groupSize: 23, name: 'Maria Bakkerszoon', deals: ['group-bowling-with-dinner'] },
    { id: "31e9ee33-40cb-44bb-b98b-fc95ebef55ad", bookedAt: '2021-08-03T18:51:22.993Z', date: '2021-08-08', time: '18:00', groupSize: 6, name: 'Гарри Кимович Каспаров', deals: ['bowling'] },
    { id: "b50761c1-dea1-4a29-995f-a171ec4e96a9", bookedAt: '2021-08-03T20:43:54.123Z', date: '2021-08-13', time: '18:00', groupSize: 4, name: 'alert("lets see if we can hack this site...")', deals: ['bowling'] },
    { id: "a44c9a6c-9b6b-45c1-a880-7d42d4437480", bookedAt: '2021-08-03T20:43:22.123Z', date: '2021-08-05', time: '18:00', groupSize: 5, name: 'Kalia Mazepin', deals: ['bowling', 'dinner'] },
    { id: "741ddffe-4074-4787-a9f5-57b2567da91c", bookedAt: '2021-08-03T21:33:57.783Z', date: '2021-08-12', time: '16:15', groupSize: 8, name: 'John Kiffersson', deals: ['bowling', 'dinner'] },
    { id: "610c3f37-3662-4821-827c-4d419d84043b", bookedAt: '2021-08-03T23:53:32.123Z', date: '2021-08-05', time: '17:45', groupSize: 6, name: 'Jane Doe', deals: ['bowling'] },
    { id: "e93a5e7f-7092-4992-a93d-245ea5b9bf08", bookedAt: '2021-08-04T09:43:22.173Z', date: '2021-08-19', time: '16:45', groupSize: 3, name: 'T.', deals: ['bowling'] },
    { id: "fe0bdeab-235f-4869-bb4c-f14473ff2a98", bookedAt: '2021-08-04T11:43:22.123Z', date: '2021-08-20', time: '20:30', groupSize: 9, name: 'Marco de la Cruz', deals: ['bowling-with-bitterballen'] },
    { id: "fa20b472-ce62-48fc-9a6e-8224a80f249e", bookedAt: '2021-08-04T14:23:11.143Z', date: '2021-08-20', time: '20:45', groupSize: 10, name: 'Penelope von Greutzhause-Mariennedijkstra', deals: ['bowling'] },
    { id: "ec8ccca2-af02-483a-83dd-470089b7b87c", bookedAt: '2021-08-04T13:43:22.123Z', date: '2021-09-05', time: '17:15', groupSize: 7, name: 'B. Lenters', deals: ['bowling', 'dinner'] },
    { id: "40975d2d-3de9-4c8d-b6d0-7ffde30baa2e", bookedAt: '2021-08-04T18:33:22.123Z', date: '2021-08-28', time: '21:45', groupSize: 22, name: 'Dennis Lors', deals: ['group-bowling'] },
    { id: "033ff845-f3d4-47a7-830a-e57c64164048", bookedAt: '2021-08-04T19:13:02.223Z', date: '2021-08-30', time: '17:00', groupSize: 4, name: 'Kamil Louati', deals: ['dinner'] },
    // etc. (no more test data available)
  ],

  // GET /api/v1/bookings/stats
  stats: {
    fetchedAtUtc: "2021-07-29T12:54:30.184Z",
    kpis: {
      bookings: {
        madeThisDay: 42,
        madeThisWeek: 187,
        neededThisWeekForBreakEven: 350,
        targetForThisWeek: 475,
      },
      howBusyIsItFactor: {
        thisDay: 0.83,
        thisWeek: 0.73,
      },
    },
  },

};
