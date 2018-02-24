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
            icon: 'motorcycle',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/category_vehicles.jpg?alt=media&token=057e3653-2f1a-4223-83dd-c4b43344f55a'
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
            icon: 'weekend',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/category_furniture.jpg?alt=media&token=0913af63-d24c-4315-b9a2-d888b2e63167'
        },
        {
            id: 7,
            title: 'Jobs',
            icon: 'business-center',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/category_jobs.jpg?alt=media&token=78aa7265-97b4-4d0d-a10c-a7ea5465655e'
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
    'Heater': [{ id: 0, title: 'ZEX', parent: 'ElectronicsAppliances', parentTitle: 'Electronics Appliances' }],
    'Car': [{ id: 0, title: 'Max', parent: 'ElectronicsAppliances', parentTitle: 'Electronics Appliances' }]
}
