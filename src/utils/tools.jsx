const formatDate = (date) => {
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
}

const handleError = (response) => {
  if(!response.ok) throw Error(response.statusText);
  return response;
}

const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

const getAge = (birthDateString) => {
  var today = new Date();
  var birthDate = new Date(birthDateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

const hasNumber = (string) => {
  return /\d/.test(string);
}

const hexToRgb = (hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export { formatDate, handleError, getAge, hasNumber, isEmptyObj, hexToRgb };