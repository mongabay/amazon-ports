var config = {
    style: 'mapbox://styles/mongabay/ckeogv8t81ff619mx5jl1yshj',
    accessToken: REPLACE_WITH_MAPBOX_TOKEN,
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
          title: 'Industrial Amazon',
          image: '',
          description:  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          location: {
            center: [-58.02830, -2.70680],
            zoom: 4.42,
            pitch: 0.00,
            bearing: -8.78
          },
          onChapterEnter: [
              {
                   layer: 'amazon-ports',
                   opacity: 1
               }
          ],
          onChapterExit: [
               // {
               //     layer: 'amazon-ports',
               //     opacity: 0
               // }
          ]
      },
        {
            id: 'amazon-logistics',
            title: 'Logistics hubs in the Amazon',
            image: '',
            description:  'in July 2006, in an agreement between major trading companies working in Brazil that they would not buy soy from any area that was deforested after 2006. This agreement is the Soy Moratorium. The program was hugely successful but critics say this transformation was only possible because the Cerrado biome, which enjoys fewer protections, was right next to the forest. and could take in the growth that would otherwise have spread through the rainforest.',
            location: {
              center: [-56.67828, -5.98458],
              zoom: 5.09,
              pitch: 40.50,
              bearing: -22.38
            },
            onChapterEnter: [
                {
                     layer: 'soy-storage-facilities',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'soy-storage-facilities',
                     opacity: .3
                 }
            ]
        },
        {
            id: 'cerrado',
            title: 'The Forgotten Biome',
            image: '',
            description:  'in July 2006, in an agreement between major trading companies working in Brazil that they would not buy soy from any area that was deforested after 2006. This agreement is the Soy Moratorium. The program was hugely successful but critics say this transformation was only possible because the Cerrado biome, which enjoys fewer protections, was right next to the forest. and could take in the growth that would otherwise have spread through the rainforest.',
            location: {
              center: [-55.95516, -12.19992],
              zoom: 4.37,
              pitch: 0.00,
              bearing: -8.78
            },
            onChapterEnter: [
                {
                     layer: 'brazilbiomes-8y9982',
                     opacity: .75
                 },
                 {
                      layer: 'agricultura-agrosatelite-2014',
                      opacity: 1
                  }
            ],
            onChapterExit: [
                 {
                     layer: 'brazilbiomes-8y9982',
                     opacity: 0
                 },
                 {
                      layer: 'agricultura-agrosatelite-2014',
                      opacity: 0
                  }
            ]
        },
        {
            id: 'velho',
            title: 'Porto Velho',
            image: '',
            description: 'Typically trucks full of soybeans leave the state of Mato Grosso driving roughly 1,000 kilometers (600 miles) through the BR-364 road towards the public port at the city of Porto Velho, in Rondônia. There, Hermasa, an Amaggi subsidiary, built silos at a leased portion of the public port, to move soy from trucks to barges, at the Madeira river. More recently, Hermasa built its own private port in the area too. From Porto Velho,  barges navigate another 1,000 kilometers to get to a private Amaggi port at the City of Itacoatiara, from where big ships reach the Atlantic coast and sail to other countries.',
            location: {
              center: [-63.65107, -8.55536],
              zoom: 7.32,
              pitch: 52.50,
              bearing: 45.52
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'itaituba',
            title: 'Itaituba',
            image: '',
            description: 'There are currently at least ten operational ports in Itaituba — none of which followed the Munduruku protocol. The most important ones for agribusiness are the ones operated by Cargill, Hidrovias do Brasil, Cianport and Unitapajós a joint-venture between Bunge and Amaggi. Together, the four companies invested over US $ 150 million in the installations.',
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
            id: 'santarem',
            title: 'Santarém',
            image: '',
            description: 'Near the port complex of Santarém, the Maicá lake has been eyed by five companies as the next target for port development in the region, mostly connected to agribusiness. Though some projects have stalled after intense questioning by local activists throughout the last seven years, at least one has already been built, a fuel port. The company responsible for it, Atem’s, lacks the necessary permits, so, in March, prosecutors filed criminal charges against its representatives.',
            location: {
              center: [-54.66638, -2.40053],
              zoom: 11.24,
              pitch: 59.00,
              bearing: 116.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'barcarena ',
            title: 'Barcarena',
            image: '',
            description: 'The Barcarena port complex started with the public port of Vila do Conde, inaugurated in 1985. It was created to answer to demands from mining companies located in the region, such as Vale. The region started receiving more demand from agribusiness in the 2000’s, as trading companies established a route through the Amazon.',
            location: {
              center: [-48.67775, -1.52281],
              zoom: 11.17,
              pitch: 24.00,
              bearing: -7.20
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
