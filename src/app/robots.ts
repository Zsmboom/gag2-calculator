export default function Robots() {
  // 屏蔽的文件扩展名（包含所有二进制和下载文件扩展名）
  const disallowedExtensions = [
    "zip", "tar", "gz", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx",
    "mp3", "mp4", "avi", "mov", "wmv", "flv", "jpg", "jpeg", "png", "gif", "svg",
    "woff", "woff2", "ttf", "eot", "map", "ahk", "rar"
  ];

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        ...disallowedExtensions.map(ext => `/*.${ext}$`)
      ],
    },
    host: 'https://fischmacroo.com',
    sitemap: 'https://fischmacroo.com/sitemap.xml',
  };
}
