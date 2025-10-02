import { glob } from 'glob'
const files = await glob('**/*', { cwd: 'src/stuff', nodir: true });

const splitFiles  = files.map(file => file.split('/')).sort((a, b) => b.length - a.length);

  
