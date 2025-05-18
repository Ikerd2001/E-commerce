// src/data/products.js

const initialProducts = [
  {
    id: 1,
    name: 'Nylon Blouse',
    price: 39.99,
    discount: 0.15,
    images: [
      '/images/blouse-black.jpg',    // for rgb(14, 13, 14)
      '/images/blouse-blue.jpg',    // for rgb(93, 204, 226)
      '/images/blouse-pink.jpg'    // for rgb(242, 146, 200)
    ],
    variants: {
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['rgb(15, 15, 15)', 'rgb(93, 204, 226)', 'rgb(242, 146, 200)']
    },
    isNew: true
  },
  {
    id: 2,
    name: 'Diner Dress',
    price: 79.99,
    discount: 0.20,
    images: [
      '/images/dress-pink.jpg',   // for rgb(240, 173, 212)
      '/images/dress-red.jpg'   // for rgb(249, 48, 48)
    ],
    variants: {
      sizes: ['M', 'L', 'XL'],
      colors: ['rgb(240, 173, 212)', 'rgb(249, 48, 48)']
    }
  },
  {
    id: 3,
    name: 'Sweater Jacket',
    price: 25.99,
    discount: 0.0,
    images: [
      '/images/jacket-blue.jpg',         // for rgb(77, 86, 244)
      '/images/jacket-red.jpg'           // for rgb(239, 58, 58)
    ],
    variants: {
      sizes: ['S', 'M', 'L'],
      colors: ['rgb(77, 86, 244)', 'rgb(239, 58, 58)']
    }
  },
  {
    id: 4,
    name: 'Denim Jeans Trousers',
    price: 59.99,
    discount: 0.15,
    images: [
      '/images/jeans-denim.jpg',    // for rgb(54, 71, 91)
    ],
    variants: {
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['rgb(54, 71, 91)']
    },
  },
  {
    id: 5,
    name: 'Cotton T-Shirt',
    price: 15.99,
    discount: 0.0,
    images: [
      '/images/shirt-black.jpg',    // for rgb(11, 11, 11)
      '/images/shirt-navy.jpg',    // for rgb(37, 52, 73)
      '/images/shirt-red.jpg'    // for rgb(242, 29, 29)
    ],
    variants: {
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['rgb(11, 11, 11)', 'rgb(37, 52, 73)', 'rgb(242, 29, 29)']
    },
    isNew: true
  },
  {
    id: 6,
    name: 'Cotton Skirt',
    price: 29.99,
    discount: 0.10,
    images: [
      '/images/skirt-blue.jpg',    // for rgb(48, 160, 211)
      '/images/skirt-purple.jpg',    // for rgb(204, 112, 207)
      '/images/skirt-red.jpg'    // for rgb(234, 77, 53)
    ],
    variants: {
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['rgb(48, 160, 211)', 'rgb(204, 112, 207)', 'rgb(234, 77, 53)']
    },
  }
];

export default initialProducts;
