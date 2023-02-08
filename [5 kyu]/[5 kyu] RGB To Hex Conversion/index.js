function rgb(r, g, b){
    return [r,g,b].map(a => {
      return ('0' + Math.max(0, Math.min(255, a)).toString(16)).slice(-2)
    }).join('').toUpperCase();
  }