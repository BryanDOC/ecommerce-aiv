import { useMemo } from 'react';

const useFormattedSlug = (slug : any) => {
  return useMemo(() => {
    if (!slug) return ''; // Si el slug es undefined o vacío, retorna una cadena vacía
    return slug
      .split('-')
      .join(' ');
  }, [slug]);
};

export default useFormattedSlug;