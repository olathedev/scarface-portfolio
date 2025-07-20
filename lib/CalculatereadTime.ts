export function calculateReadTime(body: any[]): string {
    const text = body
      ?.map(block => {
        if (block._type === 'block' && Array.isArray(block.children)) {
          return block.children.map((child: any) => child.text).join(' ');
        }
        return '';
      })
      .join(' ');
    const words = text ? text.trim().split(/\s+/).length : 0;
    const wordsPerMinute = 200;
    const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
    return `${minutes} min read`;
  }
  