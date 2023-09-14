import { Portfolio, Service, Team, NavMenu } from '@/types'

export const portfolio: Portfolio[] = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'POS System for TechPro Solutions',
    description:
      'Our client, TechPro Solutions is a leading technology solutions company with a focus on empowering businesses through innovative software products. They have identified a growing demand for a versatile and modern POS system in the market, and they intend to capitalize on this opportunity.',
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'BrewBean Website',
    description:
      'BrewBean is a well-established coffee shop chain with multiple locations across various cities. They pride themselves on sourcing ethically traded coffee beans and providing a warm and inviting ambiance for their customers. To further their reach and engage with a broader audience, BrewBean has decided to invest in an exceptional website that reflects their values and enhances the overall customer experience.',
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'POS System for TechPro Solutions',
    description:
      'Our client, TechPro Solutions is a leading technology solutions company with a focus on empowering businesses through innovative software products. They have identified a growing demand for a versatile and modern POS system in the market, and they intend to capitalize on this opportunity.',
  },
  {
    id: 4,
    image:
      'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'BrewBean Website',
    description:
      'BrewBean is a well-established coffee shop chain with multiple locations across various cities. They pride themselves on sourcing ethically traded coffee beans and providing a warm and inviting ambiance for their customers. To further their reach and engage with a broader audience, BrewBean has decided to invest in an exceptional website that reflects their values and enhances the overall customer experience.',
  },
]

export const service: Service[] = [
  {
    id: 1,
    page: "/service/fullstack",
    image:
      'https://raw.githubusercontent.com/abelmorad/merdeka-info-tek/main/public/products/lms.svg',
    title: 'Fullstack Development Bootcamp',
    description:
      'If you are aiming for a career that offers high flexibility, substantial income, and allows you to travel the world while working, consider training to become a web developer. In our bootcamp, we will guide students in acquiring the skills needed to become FULLSTACK DEVELOPER, manage projects effectively, and practice ethical coding principles',
  },
  {
    id: 2,
    page: "/service/webdev",
    image:
      'https://raw.githubusercontent.com/abelmorad/merdeka-info-tek/main/public/products/mobile.svg',
    title: 'Web Development',
    description:
      'We develop and maintain web applications for enterprises',
  }
]

export const team: Team[] = [
  {
    id: 1,
    image:
      '/avatar/abu.png',
    name: 'Abu Bakr Siddiq',
    position: 'CEO',
  },
  {
    id: 2,
    image:
      '/avatar/abel.jpg',
    name: 'Sharhabeel Morad',
    position: 'Project Manager/FE',
  },
  {
    id: 3,
    image:
      '/avatar/basam.jpg',
    name: 'Basam Serad',
    position: 'FS Dev/Project Lead',
  },
  {
    id: 4,
    image:
      '/avatar/nash.jpg',
    name: 'Nashruddin Habibon',
    position: 'Fullstack Developer',
  },
  {
    id: 7,
    image:
      '/avatar/al.png',
    name: 'Al Nadzmer Mabbol Jamil',
    position: 'Fullstack Developer/BA',
  },
  {
    id: 6,
    image:
      '/avatar/amir.png',
    name: 'Amir Duruin',
    position: 'Fullstack Developer',
  },
  {
    id: 5,
    image:
      '/avatar/dennis.jpg',
    name: 'Dianne Cabeliza',
    position: 'UI/UX',
  },
  {
    id: 8,
    image:
      '/avatar/kaye.png',
    name: 'Kate Bautista',
    position: 'UI/UX',
  },
]

export const navmenu: NavMenu[] = [
  {
    id: 0,
    title: 'Home',
    to: '/',
  },
  {
    id: 1,
    title: 'About',
    to: '/about',
  },
  {
    id: 2,
    title: 'Services',
    to: '/service',
  },
  {
    id: 3,
    title: 'Contact',
    to: '/contact',
  },
]
