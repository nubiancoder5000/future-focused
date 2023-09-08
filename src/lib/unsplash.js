export const getUnsplashData = async (searchTerm) => {
    try{
      const res = await fetch(`https://api.unsplash.com/search/photos?query=careers&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`)
      const data = await res.json();
      return data;
    }catch(err) {
        console.log(err);
    }
    
}
// const res = await fetch(`https://api.unsplash.com/search/photos?query=office&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`);
