export default CategoryList = {
    'MainCategory': [
        {
            id: 0,
            title: 'Mobiles',
            icon: 'phone-android',
            parent: undefined,
            children: 'Mobiles'
        },
        {
            id: 1,
            title: 'Electronics & Appliances',
            icon: 'devices-other',
            parent: undefined,
            children: 'ElectronicsAppliances'
        },
        {
            id: 2,
            title: 'Properties',
            icon: 'location-city'
        },
        {
            id: 3,
            title: 'Vehicles',
            icon: 'motorcycle'
        },
        {
            id: 4,
            title: 'Adventure & Holiday Packages',
            icon: 'landscape'
        },
        {
            id: 5,
            title: 'Hotels',
            icon: 'hotel'
        },
        {
            id: 6,
            title: 'Furniture',
            icon: 'weekend'
        },
        {
            id: 7,
            title: 'Jobs',
            icon: 'business-center'
        },
        {
            id: 8,
            title: 'Services',
            icon: 'spa'
        },
        {
            id: 9,
            title: 'Pets',
            icon: 'pets'
        },
        {
            id: 10,
            title: 'Books, Sports & Hobbies',
            icon: 'school'
        },
        {
            id: 11,
            title: 'Fashion',
            icon: 'local-mall'
        },
        {
            id: 12,
            title: 'Flight & Bus Tickets',
            icon: 'flight-takeoff'
        },
        {
            id: 13,
            title: 'Events',
            icon: 'insert-invitation'
        }
    ],
    'Mobiles': [
        { id: 0, title: 'Mobile Phones', parent: 'MainCategory', parentTitle: 'Main Category', children: 'MobilePhones' },
        { id: 1, title: 'Tablet', parent: 'MainCategory', parentTitle: 'Main Category' },
        { id: 3, title: 'Accessories', parent: 'MainCategory', parentTitle: 'Main Category' }
    ],
    'MobilePhones': [
        { id: 0, title: 'Samsung', mainCategory: 'Mobiles', parent: 'Mobiles', parentTitle: 'Mobiles' }
    ],
    'ElectronicsAppliances': [
        { id: 0, title: 'Heater', children: 'Heater', parent: 'MainCategory', parentTitle: 'Main Category' },
        { id: 1, title: 'Car', children: 'Car', parent: 'MainCategory', parentTitle: 'Main Category' },
        { id: 3, title: 'Plugs', parent: 'MainCategory', parentTitle: 'Main Category' }
    ],
    'Heater': [{ id: 0, title: 'ZEX', parent: 'ElectronicsAppliances', parentTitle: 'ElectronicsAppliances' }],
    'Car': [{ id: 0, title: 'Max', parent: 'ElectronicsAppliances', parentTitle: 'ElectronicsAppliances' }]
}
