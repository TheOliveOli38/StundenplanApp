const websiteVariants = {
    mobile: './index_m.html'
};
const platform = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) return 'mobile';
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'mobile';
    return null;
  };
const redirect = () => {
    let os = platform();
    if (os in websiteVariants) {
      location.replace(websiteVariants[os]);
}
};

redirect();