const byPlane = [
    {
      id: 1,
      img: "data:image/jpeg;base64,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",
  
      city: "Bishkek",
      go: [
        {
          id: 1,
          city: "Cholpon-Ata",
          price: {
            chas: "2h 51min",
            sena: 3300,
          },
        },
        {
          id: 2,
          city: "Osh",
          price: {
            chas: " 2h 51min",
            sena: 3300,
          },
        },
        {
          id: 3,
          city: "Karakol",
          price: {
            chas: "2h 51min",
            sena: 3300,
          },
        },
      ],
    },
    {
      id: 2,
      img: "https://adventuresoflilnicki.com/wp-content/uploads/2020/07/Suleiman-Too-Osh-Kyrgyzstan.jpg",
  
      city: "Osh",
      go: [
        {
          id: 1,
          city: "Cholpon-Ata",
          price: {
            chas: "2h 51min",
            sena: 3300,
          },
        },
        {
          id: 2,
          city: "Bishkek",
          price: {
            chas: " 2h 51min",
            sena: 3300,
          },
        },
        {
          id: 3,
          city: "Karakol",
          price: {
            chas: "2h 51min",
            sena: 3300,
          },
        },
      ],
    },
    {
      id: 2,
      img: "https://kabar.kg/site/assets/files/59075/12-1.jpg",
      city: "Karakol",
      go: [
        {
          id: 1,
          city: "Cholpon-Ata",
          price: {
            chas: "2h 51min",
            sena: 3300,
          },
        },
        {
          id: 2,
          city: "Bishkek",
          price: {
            chas: " 2h 51min",
            sena: 3300,
          },
        },
        {
          id: 3,
          city: "Osh",
          price: {
            chas: "2h 51min",
            sena: 3300,
          },
        },
      ],
    },
    {
      id: 2,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/95/19/26/getlstd-property-photo.jpg",
      city: "Cholpon-Ata",
      go: [
        {
          id: 1,
          city: "Karakol",
          price: {
            chas: "2h 51min",
            sena: 3300,
          },
        },
        {
          id: 2,
          city: "Osh",
          price:{
            chas:' 2h 51min',
            sena: 3300,
          },
        },
        {
          id:3,
          city:"Karakol",
          price:{
            chas: '2h 51min',
            sena: 3300,
          },
        },
    
      ],
    },
  ];
  
  export default byPlane;
  