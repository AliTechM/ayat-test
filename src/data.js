export const createData = (id, name) => {
    return {
      id,
      name,
      details: [
        {
          id: `${id}-1`,
          name: 'Lorem ipsum dolor sit amet, consectetur',
          details: [
            { id: `${id}-1-1`, name: 'Lorem ipsum dolor sit amet, consectetur' },
            { id: `${id}-1-2`, name: 'Lorem ipsum dolor sit amet, consectetur' },
          ],
        },
        {
          id: `${id}-2`,
          name: 'Lorem ipsum dolor sit amet, consectetur',
          details: [
            { id: `${id}-2-1`, name: 'Lorem ipsum dolor sit amet, consectetur' },
            { id: `${id}-2-2`, name: 'Lorem ipsum dolor sit amet, consectetur' },
          ],
        },
      ],
    };
  };
  
  export const rows = [
    createData(1, 'Lorem ipsum dolor sit amet, consectetur'),
    createData(2, 'Lorem ipsum dolor sit amet, consectetur'),
    createData(3, 'Lorem ipsum dolor sit amet, consectetur'),
    createData(4, 'Lorem ipsum dolor sit amet, consectetur'),
  ];
  