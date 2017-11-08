fis.match('*.{less,sass}', {    
  parser: fis.plugin('less'),   // fis-parser-less 插件进行解析 
  rExt: '.css',  // .less 文件后缀构建后被改成 .css 文件
  isCssLike: true
});