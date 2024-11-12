import { useMemo } from 'react';

const useFormattedSlug = (slug: string | string[]) => {
  return useMemo(() => {
    if (!slug) return ''; // Si el slug es undefined o vacío, retorna una cadena vacía

    // Verifica si slug es un string antes de usar .split
    if (typeof slug === 'string') {
      return slug.split('-').join(' ');
    }

    // Si es un array, puedes combinar los elementos en un solo string antes de formatear
    return slug.join('-').split('-').join(' ');
  }, [slug]);
};

export default useFormattedSlug;