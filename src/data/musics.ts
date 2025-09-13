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
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: 252
  },
  {
    id: '2',
    title: '成都',
    artist: '赵雷',
    url: 'https://music.163.com/song/media/outer/url?id=436514354',
    cover: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop',
    duration: 328
  },
  {
    id: '3',
    title: '晴天',
    artist: '周杰伦',
    url: 'https://music.163.com/song/media/outer/url?id=186016',
    cover: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=300&h=300&fit=crop',
    duration: 270
  },
  {
    id: '4',
    title: '稻香',
    artist: '周杰伦',
    url: 'https://music.163.com/song/media/outer/url?id=185878',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    duration: 223
  },
  {
    id: '5',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    url: 'https://music.163.com/song/media/outer/url?id=451703096',
    cover: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=300&h=300&fit=crop',
    duration: 263
  },
  {
    id: '6',
    title: 'Someone Like You',
    artist: 'Adele',
    url: 'https://music.163.com/song/media/outer/url?id=16435051',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: 285
  },
  {
    id: '7',
    title: '平凡之路',
    artist: '朴树',
    url: 'https://music.163.com/song/media/outer/url?id=28772237',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: 305
  }
];

export const defaultMusic = musics[0];