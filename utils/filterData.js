export const filterData = [
  {
    items: [
      { name: 'Buy', value: 'for-sale' },
      { name: 'Buy from owner', value: 'for-sale-by-owner' },
    ],
    placeholder: 'Purpose',
    queryName: 'sf',
  },
  {
    items: [
      { name: '10,000', value: '10000' },
      { name: '20,000', value: '20000' },
      { name: '30,000', value: '30000' },
      { name: '40,000', value: '40000' },
      { name: '50,000', value: '50000' },
      { name: '60,000', value: '60000' },
      { name: '85,000', value: '85000' },
    ],
    placeholder: 'Min Price(USD)',
    queryName: 'min_price',
  },
  {
    items: [
      { name: '400,000', value: '400000' },
      { name: '500,000', value: '500000' },
      { name: '600,000', value: '600000' },
      { name: '700,000', value: '700000' },
      { name: '800,000', value: '800000' },
      { name: '900,000', value: '900000' },
      { name: '1000,000', value: '1000000' },
    ],
    placeholder: 'Max Price(USD)',
    queryName: 'max_price',
  },
  {
    items: [
      { name: 'Lowest Price', value: 'price-asc' },
      { name: 'Highest Price', value: 'price-des' },
      { name: 'Newest', value: 'date-asc' },
      { name: 'Oldest', value: 'date-desc' },
      { name: 'Verified', value: 'verified-score' },
      { name: 'City Level Score', value: 'city-level-score' },
    ],
    placeholder: 'Sort',
    queryName: 'sort',
  },
  {
    items: [
      { name: '1000', value: '1000' },
      { name: '2000', value: '2000' },
      { name: '3000', value: '3000' },
      { name: '4000', value: '4000' },
      { name: '5000', value: '5000' },
      { name: '10000', value: '10000' },
      { name: '20000', value: '20000' },
    ],
    placeholder: 'Max Area(sqft)',
    queryName: 'sqftInfo',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
    ],
    placeholder: 'Rooms',
    queryName: 'num_beds',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
    ],
    placeholder: 'Baths',
    queryName: 'num_baths',
  },
  {
    items: [
      { name: 'Home', value: '1' },
      { name: 'Condo', value: '2' },
      { name: 'Townhouse', value: '3' },
      { name: 'Multi-family', value: '4' },
      { name: 'Land', value: '5' },
      { name: 'Other', value: '6' },
      { name: 'Manufactured', value: '7' },
      { name: 'Co-op', value: '8' },
    ],
    placeholder: 'Property Type',
    queryName: 'uipt',
  },
];

export const getFilterValues = (filterValues) => {
  const {
    purpose,
    region_id,
    region_type,
    status,
    min_price,
    max_price,
    sqftInfo,
    num_beds,
    num_baths,
    sort,
    uipt,
  } = filterValues;

  const values = [
    {
      name: 'purpose',
      value: purpose,
    },
    {
      name: 'min_price',
      value: min_price,
    },
    {
      name: 'max_price',
      value: max_price,
    },
    {
      name: 'sqftInfo',
      value: sqftInfo,
    },
    {
      name: 'num_beds',
      value: num_beds,
    },
    {
      name: 'num_baths',
      value: num_baths,
    },
    {
      name: 'sort',
      value: sort,
    },
    {
      name: 'region_id',
      value: region_id,
    },
    {
      name: 'region_type',
      value: region_type,
    },
    {
      name: 'status',
      value: status,
    },
    {
      name: 'uipt',
      value: uipt,
    },
    // {
    //   name: 'sf',
    //   value: sf,
    // },
    // {
    //   name: 'categoryExternalID',
    //   value: categoryExternalID,
    // },
  ];

  return values;
};
