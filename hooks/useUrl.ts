import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useURL = () => {
    const search = useSearchParams();
  const url = new URLSearchParams(search as any);

  
  const path = usePathname();

  const { replace } = useRouter();


  const query = {} as any;

  search?.forEach((value, key) => {
    query[key] = value;
  });


  const setQuery = (params: any = {}) => {
    Object.entries(params).forEach(([key, value]) => {
      url.set(key, value as any);
    });
    replace(`${path}?${url.toString()}`, { scroll: false });
  };

  return {
    setQuery, query,
};
};

export default useURL;
