function deepCopy(res, obj) {
  for (let prop in obj) {
    if (Array.isArray(obj[prop])) {
      res[prop] = [...obj[prop]];
    } else if (typeof obj[prop] === "object") {
      res[prop] = deepCopy({}, obj[prop]);
    } else {
      res[prop] = obj[prop];
    }
  }
  return res;
}

function stringifyObj(res, obj, spaces = "") {
  for (let prop in obj) {
    res += spaces + prop;

    if (Array.isArray(obj[prop])) {
      res += `: ${obj[prop].join(", ")}\n`;
    } else if (typeof obj[prop] === "object") {
      res += ":\n" + stringifyObj("", obj[prop], spaces + "  ");
    } else {
      res += `: ${obj[prop]}\n`;
    }
  }

  return res;
}


let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  },
  preferences: {
    music: {
      pop: ["Taylor Swift", "Beyonce"],
      jazz: ["Zazz", "Armstrong"]
    }
  }
};

let clone = deepCopy({}, user);
clone.preferences.music.pop[1] = "Nothing!";
clone.sizes.width += 10;
user.name = "Johny";

console.log(stringifyObj("", user));
console.log();
console.log(stringifyObj("", clone));
