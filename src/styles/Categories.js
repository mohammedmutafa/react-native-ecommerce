export default CategoryList = {
    'MainCategory': [
        {
            id: 0,
            title: 'Mobiles',
            icon: 'phone-android',
            parent: undefined,
            children: 'Mobiles',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_phones.jpg?alt=media&token=edce8750-9cdf-4ce0-8650-530eba310ed1'
        },
        {
            id: 1,
            title: 'Electronics & Appliances',
            icon: 'devices-other',
            parent: undefined,
            children: 'ElectronicsAppliances',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_appliances.jpg?alt=media&token=2007b48e-9da0-46ca-b2e3-76373ea1d61d'
        },
        {
            id: 2,
            title: 'Properties',
            icon: 'location-city',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_realestate.jpg?alt=media&token=bb3545e4-d66d-494d-9525-38770840e79a'
        },
        {
            id: 3,
            title: 'Vehicles',
            icon: 'motorcycle',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_cars.jpg?alt=media&token=475bad74-d9d4-437e-bf61-992667d5c8d3'
        },
        {
            id: 4,
            title: 'Adventure & Holiday Packages',
            icon: 'landscape',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_adventure.jpg?alt=media&token=ed714ad7-2c4e-4834-88da-f1b9a28abf84'
        },
        {
            id: 5,
            title: 'Hotels',
            icon: 'hotel',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_hotels.jpg?alt=media&token=a9f71dbe-ae30-41ea-8838-07042ce7a920'
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
            icon: 'spa',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_services.jpg?alt=media&token=d69708c3-ecc5-4cc5-8497-bfcbf0b682be'
        },
        {
            id: 9,
            title: 'Pets',
            icon: 'pets',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_pets.jpg?alt=media&token=b3a40604-8503-49ef-9f3d-edda476072ae'
        },
        {
            id: 10,
            title: 'Books, Sports & Hobbies',
            icon: 'school',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_sports.jpg?alt=media&token=95e84743-5b63-490c-9154-7df92ca73ac7'
        },
        {
            id: 11,
            title: 'Fashion',
            icon: 'local-mall',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_fashion.jpg?alt=media&token=21fd59e7-85bc-4cc1-8ea7-88f5ca87c1e6'
        },
        {
            id: 12,
            title: 'Flight & Bus Tickets',
            icon: 'flight-takeoff',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_tickets.jpg?alt=media&token=a7385e1c-af4e-49ac-9bcf-5dc08e3ff123'
        },
        {
            id: 13,
            title: 'Events',
            icon: 'insert-invitation',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/categoryThumbnails%2Fcategory_events.jpg?alt=media&token=b809f37c-37d1-494f-835a-67f7ef267dad'
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
