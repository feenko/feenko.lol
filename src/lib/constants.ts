export const projects: {
  title: string;
  description: string;
  image: string;
  imageBlurData?: string;
  url: string;
  tags: string[];
}[] = [
  {
    title: 'Charmer',
    description:
      'A simple, yet powerful discord bot. Very programmable and customizable. [WIP]',
    image: '/projects/charmer.png',
    imageBlurData:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAKAAoDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwYI/8QAKRAAAAQFAgQHAAAAAAAAAAAAAQIDBAUGERIhAAcUIlFhJTEzQUNSkf/EABYBAQEBAAAAAAAAAAAAAAAAAAUCA//EAB8RAAIBBAIDAAAAAAAAAAAAAAECAAMEEVESIRMxcf/aAAwDAQACEQMRAD8Az7LMkMY83dJzKkSIxxJ+dwsqmsoVcgHzcUiZvIcmyFc56aCFRWPk5nGoirqKYRVH2LzbbjbrhkqxZYRsLUQsoOO4V/dZ8C3eYQ6VQxGTIqHKKMp9lpwzUMgqo25zpDaY1yZ7qiGRr79dRQ7ds7MWvAFtlxoQBiEZi/HufFXnrH+c32HvpMASB6n/2Q==',
    url: 'https://charmer.feenko.lol/',
    tags: ['Python', 'Discord.py', 'Tortoise-ORM', 'PostgreSQL', 'Pydantic'],
  },
  {
    title: 'Charmer Website',
    description: 'A website for Charmer. [WIP]',
    image: '/projects/charmer-web.png',
    imageBlurData:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAFAAoDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwn/xAAdEAACAgEFAAAAAAAAAAAAAAABAgMRAAQUITFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJv7hpoC5g06iEKtLEAW8snu8AxIxAPGB//Z',
    url: 'https://charmer.feenko.lol/',
    tags: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'ContentLayer2',
      'Phosphor Icons',
    ],
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
];
