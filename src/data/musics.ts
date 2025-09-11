export interface Music {
  id: string;
  title: string;
  artist: string;
  url: string;
  cover: string;
  duration?: number;
}

export const musics: Music[] = [
  {
    id: '1',
    title: '夜空中最亮的星',
    artist: '逃跑计划',
    url: 'https://music.163.com/song/media/outer/url?id=5238992',
    cover: 'https://p2.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
    duration: 252
  },
  {
    id: '2',
    title: '成都',
    artist: '赵雷',
    url: 'https://music.163.com/song/media/outer/url?id=436514354',
    cover: 'https://p1.music.126.net/L-7tS-3YBuh558I8OYbA3g==/6667438510890774.jpg?param=90y90',
    duration: 328
  },
  {
    id: '3',
    title: '告白气球',
    artist: '周杰伦',
    url: 'https://music.163.com/song/media/outer/url?id=418603133',
    cover: 'https://p1.music.126.net/L-7tS-3YBuh558I8OYbA3g==/6667438510890774.jpg?param=90y90',
    duration: 215
  },
  {
    id: '4',
    title: '告白气球',
    artist: '周杰伦',
    url: 'https://music.163.com/song/media/outer/url?id=418603133',
    cover: 'https://p1.music.126.net/L-7tS-3YBuh558I8OYbA3g==/6667438510890774.jpg?param=90y90',
    duration: 215
  },
];

export const defaultMusic = musics[0];