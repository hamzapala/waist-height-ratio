const waist = document.querySelector(".waist");
const height = document.querySelector(".height");
const calculate = document.querySelector(".calculate");
const result = document.querySelector(".result");
const waistSelect = document.querySelector(".waistSelect");
const heightSelect = document.querySelector(".heightSelect");

let preValHeight = "mm";
let preValWaist = "mm";




waistSelect.onchange = function () {
  if (waistSelect.value == "mm") {
    if (preValWaist == "cm") {
      waist.value = (waist.value * 10).toFixed(2);
    } else if (preValWaist == "m") {
      waist.value = (waist.value * 1000).toFixed(2);
    } else if (preValWaist == "in") {
      waist.value = (waist.value * 25.4).toFixed(2);
    } else if (preValWaist == "ft") {
      waist.value = (waist.value * 304.8).toFixed(2);
    } else if (preValWaist == "yd") {
      waist.value = (waist.value * 914.4).toFixed(2);
    }
    preValWaist = "mm";
  } else if (waistSelect.value == "cm") {
    if (preValWaist == "mm") {
      waist.value = (waist.value * 0.1).toFixed(2);
    } else if (preValWaist == "m") {
      waist.value = (waist.value * 100).toFixed(2);
    } else if (preValWaist == "in") {
      waist.value = (waist.value * 2.54).toFixed(2);
    } else if (preValWaist == "ft") {
      waist.value = (waist.value * 30.48).toFixed(2);
    } else if (preValWaist == "yd") {
      waist.value = (waist.value * 91.44).toFixed(2);
    }
    preValWaist = "cm";
  } else if (waistSelect.value == "m") {
    if (preValWaist == "mm") {
      waist.value = (waist.value / 1000).toFixed(2);
    } else if (preValWaist == "cm") {
      waist.value = (waist.value / 100).toFixed(2);
    } else if (preValWaist == "in") {
      waist.value = (waist.value * 0.254).toFixed(2);
    } else if (preValWaist == "ft") {
      waist.value = (waist.value * 0.3048).toFixed(2);
    } else if (preValWaist == "yd") {
      waist.value = (waist.value * 0.9144).toFixed(2);
    }
    preValWaist = "m";
  } else if (waistSelect.value == "in") {
    if (preValWaist == "mm") {
      waist.value = (waist.value * 0.0393701).toFixed(2);
    } else if (preValWaist == "cm") {
      waist.value = (waist.value * 0.393701).toFixed(2);
    } else if (preValWaist == "m") {
      waist.value = (waist.value * 39.3701).toFixed(2);
    } else if (preValWaist == "ft") {
      waist.value = (waist.value * 12).toFixed(2);
    } else if (preValWaist == "yd") {
      waist.value = (waist.value * 36).toFixed(2);
    }
    preValWaist = "in";
  } else if (waistSelect.value == "ft") {
    if (preValWaist == "mm") {
      waist.value = (waist.value * 0.00328084).toFixed(2);
    } else if (preValWaist == "cm") {
      waist.value = (waist.value * 0.0328084).toFixed(2);
    } else if (preValWaist == "m") {
      waist.value = (waist.value * 3.28084).toFixed(2);
    } else if (preValWaist == "in") {
      waist.value = (waist.value * 0.0833333).toFixed(2);
    } else if (preValWaist == "yd") {
      waist.value = (waist.value * 3).toFixed(2);
    }
    preValWaist = "ft";
  } else if (waistSelect.value == "yd") {
    if (preValWaist == "mm") {
      waist.value = (waist.value * 0.00109361).toFixed(2);
    } else if (preValWaist == "cm") {
      waist.value = (waist.value * 0.0109361).toFixed(2);
    } else if (preValWaist == "m") {
      waist.value = (waist.value * 1.09361).toFixed(2);
    } else if (preValWaist == "in") {
      waist.value = (waist.value * 0.0277778).toFixed(2);
    } else if (preValWaist == "ft") {
      waist.value = (waist.value * 0.333333).toFixed(2);
    }
    preValWaist = "yd";
  }
};

heightSelect.onchange = function () {
  if (heightSelect.value == "mm") {
    if (preValHeight == "cm") {
      height.value = (height.value * 10).toFixed(2);
    } else if (preValHeight == "m") {
      height.value = (height.value * 1000).toFixed(2);
    } else if (preValHeight == "in") {
      height.value = (height.value * 25.4).toFixed(2);
    } else if (preValHeight == "ft") {
      height.value = (height.value * 304.8).toFixed(2);
    } else if (preValHeight == "yd") {
      height.value = (height.value * 914.4).toFixed(2);
    }
    preValHeight = "mm";
  } else if (heightSelect.value == "cm") {
    if (preValHeight == "mm") {
      height.value = (height.value * 0.1).toFixed(2);
    } else if (preValHeight == "m") {
      height.value = (height.value * 100).toFixed(2);
    } else if (preValHeight == "in") {
      height.value = (height.value * 2.54).toFixed(2);
    } else if (preValHeight == "ft") {
      height.value = (height.value * 30.48).toFixed(2);
    } else if (preValHeight == "yd") {
      height.value = (height.value * 91.44).toFixed(2);
    }
    preValHeight = "cm";
  } else if (heightSelect.value == "m") {
    if (preValHeight == "mm") {
      height.value = (height.value / 1000).toFixed(2);
    } else if (preValHeight == "cm") {
      height.value = (height.value / 100).toFixed(2);
    } else if (preValHeight == "in") {
      height.value = (height.value * 0.254).toFixed(2);
    } else if (preValHeight == "ft") {
      height.value = (height.value * 0.3048).toFixed(2);
    } else if (preValHeight == "yd") {
      height.value = (height.value * 0.9144).toFixed(2);
    }
    preValHeight = "m";
  } else if (heightSelect.value == "in") {
    if (preValHeight == "mm") {
      height.value = (height.value * 0.0393701).toFixed(2);
    } else if (preValHeight == "cm") {
      height.value = (height.value * 0.393701).toFixed(2);
    } else if (preValHeight == "m") {
      height.value = (height.value * 39.3701).toFixed(2);
    } else if (preValHeight == "ft") {
      height.value = (height.value * 12).toFixed(2);
    } else if (preValHeight == "yd") {
      height.value = (height.value * 36).toFixed(2);
    }
    preValHeight = "in";
  } else if (heightSelect.value == "ft") {
    if (preValHeight == "mm") {
      height.value = (height.value * 0.00328084).toFixed(2);
    } else if (preValHeight == "cm") {
      height.value = (height.value * 0.0328084).toFixed(2);
    } else if (preValHeight == "m") {
      height.value = (height.value * 3.28084).toFixed(2);
    } else if (preValHeight == "in") {
      height.value = (height.value * 0.0833333).toFixed(2);
    } else if (preValHeight == "yd") {
      height.value = (height.value * 3).toFixed(2);
    }
    preValHeight = "ft";
  } else if (heightSelect.value == "yd") {
    if (preValHeight == "mm") {
      height.value = (height.value * 0.00109361).toFixed(2);
    } else if (preValHeight == "cm") {
      height.value = (height.value * 0.0109361).toFixed(2);
    } else if (preValHeight == "m") {
      height.value = (height.value * 1.09361).toFixed(2);
    } else if (preValHeight == "in") {
      height.value = (height.value * 0.0277778).toFixed(2);
    } else if (preValHeight == "ft") {
      height.value = (height.value * 0.333333).toFixed(2);
    }
    preValHeight = "yd";
  }
};


function calculateFunc() {
  if (waistSelect.value == "mm") {
    if (heightSelect.value == "mm") {
      return waist.value / height.value;
    } else if (heightSelect.value == "cm") {
      return waist.value / (height.value * 10);
    } else if (heightSelect.value == "m") {
    return waist.value / (height.value * 1000);
  } else if (heightSelect.value == "in") {
    return waist.value / (height.value * 25.4);
  } else if (heightSelect.value == "ft") {
    return waist.value / (height.value * 304.8);
  } else if (heightSelect.value == "yd") {
    return waist.value / (height.value * 914.4);
  }
}
  if (waistSelect.value == "cm") {
    if (heightSelect.value == "mm") {
      return (waist.value * 10) / height.value;
    } else if (heightSelect.value == "cm") {
      return (waist.value * 10) / (height.value * 10);
    } else if (heightSelect.value == "m") {
    return (waist.value * 10) / (height.value * 1000);
  } else if (heightSelect.value == "in") {
    return (waist.value * 10) / (height.value * 25.4);
  } else if (heightSelect.value == "ft") {
    return (waist.value * 10) / (height.value * 304.8);
  } else if (heightSelect.value == "yd") {
    return (waist.value * 10) / (height.value * 914.4);
  }
}
  if (waistSelect.value == "m") {
    if (heightSelect.value == "mm") {
      return (waist.value * 1000) / height.value;
    } else if (heightSelect.value == "cm") {
      return (waist.value * 1000) / (height.value * 10);
    } else if (heightSelect.value == "m") {
    return (waist.value * 1000) / (height.value * 1000);
  } else if (heightSelect.value == "in") {
    return (waist.value * 1000) / (height.value * 25.4);
  } else if (heightSelect.value == "ft") {
    return (waist.value * 1000) / (height.value * 304.8);
  } else if (heightSelect.value == "yd") {
    return (waist.value * 1000) / (height.value * 914.4);
  }
}
  if (waistSelect.value == "in") {
    if (heightSelect.value == "mm") {
      return (waist.value * 25.4) / height.value;
    } else if (heightSelect.value == "cm") {
      return (waist.value * 25.4) / (height.value * 10);
    } else if (heightSelect.value == "m") {
    return (waist.value * 25.4) / (height.value * 1000);
  } else if (heightSelect.value == "in") {
    return (waist.value * 25.4) / (height.value * 25.4);
  } else if (heightSelect.value == "ft") {
    return (waist.value * 25.4) / (height.value * 304.8);
  } else if (heightSelect.value == "yd") {
    return (waist.value * 25.4) / (height.value * 914.4);
  }
}
  if (waistSelect.value == "ft") {
    if (heightSelect.value == "mm") {
      return (waist.value * 304.8) / height.value;
    } else if (heightSelect.value == "cm") {
      return (waist.value * 304.8) / (height.value * 10);
    } else if (heightSelect.value == "m") {
    return (waist.value * 304.8) / (height.value * 1000);
  } else if (heightSelect.value == "in") {
    return (waist.value * 304.8) / (height.value * 25.4);
  } else if (heightSelect.value == "ft") {
    return (waist.value * 304.8) / (height.value * 304.8);
  } else if (heightSelect.value == "yd") {
    return (waist.value * 304.8) / (height.value * 914.4);
  }
}
  if (waistSelect.value == "yd") {
    if (heightSelect.value == "mm") {
      return (waist.value * 914.4) / height.value;
    } else if (heightSelect.value == "cm") {
      return (waist.value * 914.4) / (height.value * 10);
    } else if (heightSelect.value == "m") {
    return (waist.value * 914.4) / (height.value * 1000);
  } else if (heightSelect.value == "in") {
    return (waist.value * 914.4) / (height.value * 25.4);
  } else if (heightSelect.value == "ft") {
    return (waist.value * 914.4) / (height.value * 304.8);
  } else if (heightSelect.value == "yd") {
    return (waist.value * 914.4) / (height.value * 914.4);
  }
}
  // return waist.value / height.value;
}

height.addEventListener("keyup", function () {
  if (
    waist.value == 0 ||
    waist.value == "" ||
    height.value == 0 ||
    height.value == ""
  ) {
    result.innerText = "please enter a value other than zero or valid number";
  } else {
    result.innerText = calculateFunc().toFixed(2);
  }
});

waist.onkeyup = function () {
  if (
    waist.value == 0 ||
    waist.value == "" ||
    height.value == 0 ||
    height.value == ""
  ) {
    result.innerText = "please enter a value other than zero or valid number";
  } else {
    result.innerText = calculateFunc().toFixed(2);
  }
};
