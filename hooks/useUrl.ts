import { usePathname, useRouter, useSearchParams } from "next/navigation";

type setQueryPageParams = {
    page?: string| number;
    channel?: string;
};

const useURL = () => {
  // todo // Acceso a los parámetros de busqueda de la URL
  const search = useSearchParams();

  const url = new URLSearchParams(search);
  // ruta actual del navegador
  const path = usePathname();
  const { replace } = useRouter();

  // ! Recibimos el usuario y la contraseña

  // params= {
  //   username : "CEO"
  //   password : "123456" 
  // }
  const setQuery = (params: setQueryPageParams = {}) => {
    // [['username', 'CEO'], ['password', '123456']]
   
    Object.entries(params).forEach(([key, value]) => {
      // Mediante set añadimos los parametros de consulta 
      url.set(key, value as string);
    });
    console.log(url.toString());
    // Reemplazo
    replace(`${path}?${url.toString()}`, { scroll: false });
  };


  return {
    setQuery, 
};
};

export default useURL;
