// Usa o basePath apenas em produção (quando buildado para o Github Pages)
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/my-portifolio' : ''; 

export const getImagePath = (path: string) => {
  if (path.startsWith('http')) return path;
  return `${BASE_PATH}${path}`;
};
