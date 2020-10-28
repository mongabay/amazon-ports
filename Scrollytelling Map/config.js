var config = {
    style: 'mapbox://styles/mongabay/ckeogv8t81ff619mx5jl1yshj',
    accessToken: 'REPLACE_WITH_MAPBOX_TOKEN',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'amazon-region',
            title: 'Logistics hubs in the Amazon',
            image: '',
            description:  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
              center: [-56.67828, -5.98458],
              zoom: 5.09,
              pitch: 40.50,
              bearing: -22.38
            },
            onChapterEnter: [
                // {
                //      layer: 'amazon-ports',
                //      opacity: 1
                //  }
            ],
            onChapterExit: [
                 // {
                 //     layer: 'amazon-ports',
                 //     opacity: 0
                 // }
            ]
        },
        {
            id: 'itaituba',
            title: 'Itaitube',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-55.97280, -4.34176],
              zoom: 8.94,
              pitch: 35.50,
              bearing: 33.60
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third',
            title: 'Porto Velho',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-63.65107, -8.55536],
              zoom: 7.32,
              pitch: 52.50,
              bearing: 45.52
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
