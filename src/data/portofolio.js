import images from './images/moinves0.png';

const importAll = r => r.keys().map(r);
const allImages = importAll(require.context('./images', false));

console.log('allImages', allImages);

const imagesFor = filter => allImages.filter(item => item.includes(filter));

const portofolio = [
  {
    name: 'DBS & Permata eKYC Driver App',
    desc:
      "Application for Etobee drivers to handle eKYC process. In DBS it's only the appoinment management. In Permata we also handle the KTP verification process throgh BIOMORF device",
    year: '2017',
    images: []
  },
  {
    name: 'Etobee Express Driver App',
    desc:
      'Etobee Express driveres companion app. Handling day to day driver operation from merchant pickup to last mile delivery. It also have the ability of offline update',
    year: '2017',
    link: 'https://play.google.com/store/apps/details?id=com.etobee.driver',
    images: []
  },
  {
    name: 'Moinves Mandiri',
    desc:
      'A simple & secure mobile investing app that lets you buy & sell mutual funds from anywhere at anytime!',
    year: '2016',
    link:
      'https://play.google.com/store/apps/details?id=com.mercatocapitale.mmi&hl=in',
    images: imagesFor('moinves')
  },
  {
    name: 'RaMe',
    desc:
      'RaMe (Rakyat Memilih) is an application that aims to give people transparencies about Indonesian Presidential, Head of Region (Senate), and legislative candidates.',
    year: '2016',
    link: 'http://www.rame.id/',
    images: imagesFor('rame')
  },
  {
    name: 'Qlue',
    desc: "Qlue is social media about our neighborhood and all things around us. Get updates and discover your neighborhood. You can report a problem in your neighborhood to officials and get quick response. It's currently integrated with Jakarta SmartCity.",
    year: '2015',
    link: 'https://goo.gl/WC5mOK',
    images:imagesFor('qlue')    
  }
];

export default portofolio;
