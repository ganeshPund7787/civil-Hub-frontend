const useGetPost = () => {
  const GetAllPost = async() => {
      try {
        const res = await fetch()
    } catch (error) {
      console.log(`Error while getApp Post frontend: `, error);
    }
  };
  return { GetAllPost };
};

export default useGetPost;
