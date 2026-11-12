export type SectionId = 'writing' | 'music' | 'research';

export const site = {
  name: 'Dennis_Ding',
  tagline: '好奇、探索、记录。',
  description:
    '这里记录三件事：读过的书带来的感悟、正在学的音乐，以及将来可能开始的科研心得。',
  author: 'Dennis_Ding',
  locale: 'zh-CN',
};

export const nav: Array<{ label: string; href: string }> = [
  { label: '首页', href: '/' },
  { label: '文学', href: '/writing/' },
  { label: '音乐', href: '/music/' },
  { label: '科研', href: '/research/' },
  { label: '关于', href: '/about/' },
];

export const links: Array<{ label: string; href: string }> = [
  { label: 'GitHub', href: 'https://github.com/Dyf2006' },
  { label: 'RSS', href: '/rss.xml' },
];

export const sections: Record<
  SectionId,
  { id: SectionId; href: string; label: string; title: string; blurb: string }
> = {
  writing: {
    id: 'writing',
    href: '/writing/',
    label: '文学',
    title: '文学感悟',
    blurb: '读完一本书、一篇文章、一首诗之后留下来的那些话。',
  },
  music: {
    id: 'music',
    label: '音乐',
    href: '/music/',
    title: '音乐学习',
    blurb: '琴谱上的进度、卡住的地方、偶尔弹顺了的一小节。',
  },
  research: {
    id: 'research',
    label: '科研',
    href: '/research/',
    title: '科研心得',
    blurb: '尚未开始，先留个位置。以后关于读文献、做实验的记录放这里。',
  },
};

export const sectionOrder: SectionId[] = ['writing', 'music', 'research'];
