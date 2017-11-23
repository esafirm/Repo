import { imagesFor } from './ImageLoader';

const portofolio = [
  {
    name: 'DBS & Permata eKYC Driver App',
    desc:
      "Application for Etobee drivers to handle eKYC process. In DBS it's only the appoinment management. In Permata we also handle the KTP verification process throgh BIOMORF device",
    year: '2017',
    images: imagesFor('dbs')
  },
  {
    name: 'Etobee Express Driver App',
    desc:
      'Etobee Express driveres companion app. Handling day to day driver operation from merchant pickup to last mile delivery. It also have the ability of offline update',
    year: '2017',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.etobee.driver'
    },
    images: imagesFor('driverapp'),
    extra: {
      featured: true
    }
  },
  {
    name: 'Wong Jawa',
    desc:
      'A community focused PPOB application with extra features such as Youtube video and redio player',
    year: '2017',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.sibisnis.wongjawa'
    },
    images: imagesFor('wongjawa')
  },
  {
    name: 'Ogan Lopian (Purwakarta Smart City)',
    desc:
      'A smart city application for Purwakarta. It includes reporting platform, calling ambulance and doctor through the app, and a catalogue of point of interest.',
    year: '2016',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.satulingkaran.oganlopian'
    },
    images: imagesFor('ogan')
  },
  {
    name: 'Moinves Mandiri',
    desc:
      'A simple & secure mobile investing app that lets you buy & sell mutual funds from anywhere at anytime!',
    year: '2016',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.mercatocapitale.mmi&hl=in'
    },
    images: imagesFor('moinves')
  },
  {
    name: 'RaMe',
    desc:
      'RaMe (Rakyat Memilih) is an application that aims to give people transparencies about Indonesian Presidential, Head of Region (Senate), and legislative candidates.',
    year: '2016',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.satulingkaran.rame',
      appstore:
        'https://itunes.apple.com/br/app/rame-rakyat-memilih/id1154107245?mt=8'
    },
    images: imagesFor('rame')
  },
  {
    name: 'Qlue',
    desc:
      "Qlue is social media about our neighborhood and all things around us. Get updates and discover your neighborhood. You can report a problem in your neighborhood to officials and get quick response. It's currently integrated with Jakarta SmartCity.",
    year: '2015',
    link: {
      playstore: 'https://goo.gl/WC5mOK'
    },
    images: imagesFor('qlue')
  },
  {
    name: 'Obeng',
    desc: 'A garage finder app when you can register your own garage',
    year: '2015',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.satulingkaran.obeng',
      appstore: 'https://itunes.apple.com/id/app/obeng/id1120003370?mt=8'
    },
    images: imagesFor('obeng')
  },
  {
    name: 'aDelivery',
    desc:
      'aDelivery is a mobile app that monitors courier from aCommerce Asia in delivery activity from day to day.',
    year: '2014',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=adelivery.tracking.system'
    },
    images: imagesFor('adelivery')
  },
  {
    name: 'PIPP for Android',
    desc:
      'PIPP (Pusat Informasi dan Pelayanan Personel Polri) is a database of police personal information.',
    year: '2014'
  },
  {
    name: 'Jepret Story',
    desc:
      'Jepret Story is a mobile app that allows users to collect photos and videos published on social networks or collectively captured with friends, and organize them into a special visual story, helping users to access and share their treasured memories with ease.',
    year: '2014',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.dycode.jepretstory'
    },
    images: imagesFor('jepstor')
  },
  {
    name: 'Favechic',
    desc:
      'FaveChic is a social shopping app that curates fashion products from regional marketplaces in China, Taiwan, Japan and Korea so to give users in Malaysia, Singapore, Indonesia and other countries more Variety, Affordability and Convenience.',
    year: '2014',
    link: {
      playstore: 'http://goo.gl/PaxVdA'
    },
    images: imagesFor('favechic')
  },
  {
    name: 'Merci (Medical Emergency Responders Care Information)',
    desc:
      'Merci is a ground breaking mobile app which allows a users personal medical information to be accessed quickly and simply in an emergency situation. The information is also accessible even if you have a pin lock on your phone. Keeping both your personal information and yourself safe and secure',
    year: '2014',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.digitalnoir.merci'
    },
    images: imagesFor('merci')
  },
  {
    name: 'Mandiri e-cash',
    desc:
      'Mandiri e-cash is an electronic money on your mobile phone that can be used without having to open a bank account.',
    year: '2013',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.ptdam.emoney'
    },
    images: imagesFor('ecash')
  },
  {
    name: 'Movreak',
    desc:
      'Movreak or Movie Freak is a social network-based mobile app around movies and cinemas. It’s all about viewing and sharing movie information, showtime, and seat plan, share your movie reviews and watchings, and share them all with email, SMS, Twitter, and Facebook.',
    year: '2012',
    link: {
      playstore: 'http://goo.gl/G9HfMD'
    },
    images: imagesFor('movreak')
  },
  {
    name: 'Museeker',
    desc:
      "Android app around music and video. Museeker is all about finding what you want to listen and discover. Search your music anywhere on mobile, you can also know what songs that's hot right now through Top Chart feature.",
    year: '2013',
    images: [],
    extra: {
      product: true
    }
  },
  {
    name: 'Kamus+',
    desc:
      'English to Indonesia dictionary with offline capability but also can work online for translating sentences or unknown words, completed with verbs table and game for exercise users english skill.',
    year: '2014',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.saibotstudio.kamusplus'
    },
    images: imagesFor('kamus'),
    extra: {
      product: true
    }
  },
  {
    name: 'Meme Comic Indonesia',
    desc:
      'An Android app for Meme Comic Indonesia which show a meme from their feed on Facebook page and completed with meme maker. Rated 4.2 from 6000+ rating. 100K+ Downloads',
    year: '2013',
    link: {
      playstore: 'https://play.google.com/store/apps/details?id=com.app.mci'
    },
    images: imagesFor('mci'),
    extra: {
      prodcut: true,
      featured: true
    }
  },
  {
    name: 'Jepret Android',
    desc:
      'Jepret is an Instagram-like photo sharing app for Android and Nokia S40 platform',
    year: '2012',
    link: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.dycode.jepret'
    },
    images: imagesFor('jepret')
  },
  {
    name: 'Combro',
    desc:
      'An e-library on mobile platform built for tablet about schoolbooks from elementary school, junior high school, and high school.',
    year: '2014'
  },
  {
    name: 'DJKN-SIPP',
    desc:
      'An e-library on Android platform that store legislation about Direktorat Jendral Keaman Negara.',
    year: '2014'
  },
  {
    name: 'Gereja Kristen Indonesia',
    desc: 'Android app for Gereja Kristen Indonesia (GKI)',
    year: '2013'
  },
  {
    name: 'BEAT',
    desc:
      'A social media for mobile platform around cigarette "Brand Ambassador" and their salesperson.',
    year: '2013'
  },
  {
    name: 'B-Colony',
    desc: 'A communication app for Indonesian worker aboard (TKI) ',
    year: '2012'
  },
  {
    name: 'VIOSS',
    desc: 'A mobile payment app for Android platform',
    year: '2012'
  },
  {
    name: 'Aktiv',
    desc: 'A daily task manager for NPP-asia',
    year: '2012'
  }
];

export default portofolio;
