export const projects: {
  title: string;
  description: string;
  image: string;
  imageBlurData?: string;
  url: string;
  tags: string[];
}[] = [
  {
    title: 'AdviceBot',
    description:
      'AdviceBot has thousands of servers that have already trusted us, join them by adding our application.',
    image: '/projects/advicebot.webp',
    url: 'https://advicebot.info/',
    tags: ['TypeScript', 'Next.JS', 'Tailwind CSS'],
  },
  {
    title: 'TopBots.pl',
    description:
      'Top-lista popularnych, nowych jak i nieobsługiwanych Polskich botów discord.',
    image: '/projects/topbots.png',
    url: 'https://topbots.pl/',
    tags: ['TypeScript', 'Next.JS', 'Tailwind CSS', 'Next Auth'],
  },
  {
    title: 'Riffy',
    description:
      'Riffy is a pro lavalink client. It is designed to be simple and easy to use, with a focus on stability and more features.',
    image: '/projects/riffy.png',
    imageBlurData:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAGAAoDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgj/xAAiEAACAQIFBQAAAAAAAAAAAAABAwIEIQAFESIxBhITFBb/xAAWAQEBAQAAAAAAAAAAAAAAAAAEBQb/xAAjEQEAAQMCBgMAAAAAAAAAAAABAgADEQRBEiEiMTJRcZHw/9oADAMBAAIRAxEAPwCC4Zz0TWZpRz+fHrrpity1UwQJN0G4jyS7+JXJjc8YxktNrrdmQXOpciueXrxMbbPzToytMjJ++6K1TC+pa5WyDJylGJuQCdQMV7ceCBF7lHk5VK//2Q==',
    url: 'https://github.com/riffy-team/riffy',
    tags: ['JavaScript', 'Lavalink', 'Discord.js', 'WebSocket'],
  },
  {
    title: 'Charmer',
    description:
      'A simple, yet powerful discord bot. Very programmable and customizable. Still work in progress.',
    image: '/projects/charmer.png',
    url: 'https://charmer.feenko.lol/',
    tags: ['Python', 'Discord.py', 'Tortoise-ORM', 'PostgreSQL', 'Pydantic'],
  },
  {
    title: 'Spotify Keychain 3D Model Generator',
    description:
      'A beautifully designed and user-friendly 3D model generator for Spotify Keychains',
    image: '/projects/spotify-keychain.png',
    imageBlurData:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAFAAoDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAn/xAAeEAACAgMAAwEAAAAAAAAAAAABAgMEBQYRABIhUf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAAMBAQEAAAAAAAAAAAAAAAABEQISIf/aAAwDAQACEQMRAD8ApLktJy+SxljHPvucpu862K1yi6x2K0ik84XDpIhB4Y3RlP54fpnWelLBVHD7vXpV69zcqVuxFEiSznEehlcABn9Vl4vT08Hwd8FVP//Z',
    url: 'https://github.com/feenko/spotify-3d-keychain',
    tags: ['Python', 'PySide6', 'Pillow', 'CadQuery'],
  },
];
