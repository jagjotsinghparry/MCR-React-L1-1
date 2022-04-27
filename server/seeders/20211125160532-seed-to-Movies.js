'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Movies',
      [
        {
          id: 1,
          title: 'batman and robin',
          slug: 'batman-and-robin',
          synopsis: 'batman and robin is bestfriend',
          trailerUrl: 'https://www.youtube.com/watch?v=NLOp_6uPccQ',
          imgUrl:
            'http://4.bp.blogspot.com/-pIVd8qe4dKo/Xe4b3SW7E8I/AAAAAAAASRY/UDipHOal2tk5pWB07IJ9yiOKzzX16ojQwCKgBGAsYHg/w919/batman-dc-uhdpaper.com-4K-4.2132-wp.thumbnail.jpg',
          rating: 4,
          genreId: 1,
          authorId: 2,
          createdAt: '2021-11-22T07:49:03.498Z',
          updatedAt: '2021-11-22T07:49:03.498Z',
        },
        {
          id: 2,
          title: 'batman and robin',
          slug: 'batman-and-robin',
          synopsis: 'batman and rorong is bestfriend',
          trailerUrl: 'https://www.youtube.com/watch?v=NLOp_6uPccQ',
          imgUrl:
            'http://4.bp.blogspot.com/-pIVd8qe4dKo/Xe4b3SW7E8I/AAAAAAAASRY/UDipHOal2tk5pWB07IJ9yiOKzzX16ojQwCKgBGAsYHg/w919/batman-dc-uhdpaper.com-4K-4.2132-wp.thumbnail.jpg',
          rating: 4,
          genreId: 4,
          authorId: 3,
          createdAt: '2021-11-22T07:49:03.498Z',
          updatedAt: '2021-11-22T07:49:03.498Z',
        },
        {
          id: 3,
          title: 'batman and spider',
          slug: 'batman-and-spider',
          synopsis: 'batman and rorong is bestfriend',
          trailerUrl: 'https://www.youtube.com/watch?v=NLOp_6uPccQ',
          imgUrl:
            'http://4.bp.blogspot.com/-pIVd8qe4dKo/Xe4b3SW7E8I/AAAAAAAASRY/UDipHOal2tk5pWB07IJ9yiOKzzX16ojQwCKgBGAsYHg/w919/batman-dc-uhdpaper.com-4K-4.2132-wp.thumbnail.jpg',
          rating: 5,
          genreId: 2,
          authorId: 1,
          createdAt: '2021-11-22T07:49:03.498Z',
          updatedAt: '2021-11-22T07:49:03.498Z',
        },
        {
          id: 4,
          title: 'batman and rorong',
          slug: 'batman-and-rongrong',
          synopsis: 'batman and rorong is bestfriend',
          trailerUrl: 'https://www.youtube.com/watch?v=NLOp_6uPccQ',
          imgUrl:
            'http://4.bp.blogspot.com/-pIVd8qe4dKo/Xe4b3SW7E8I/AAAAAAAASRY/UDipHOal2tk5pWB07IJ9yiOKzzX16ojQwCKgBGAsYHg/w919/batman-dc-uhdpaper.com-4K-4.2132-wp.thumbnail.jpg',
          rating: 4,
          genreId: 2,
          authorId: 3,
          createdAt: '2021-11-22T07:49:03.498Z',
          updatedAt: '2021-11-22T07:49:03.498Z',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', null, {});
  },
};
