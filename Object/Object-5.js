const deflatten = function (obj) {
    const newObj = {}
    for (let key in obj) {
        const pathArr = key.split('.');
        if (pathArr.length === 1) {
            newObj[key] = obj[key]
        }
        else {
            let currObj = newObj;
            for (let i = 0; i < pathArr.length-1; i++) {
                if (currObj[pathArr[i]] == undefined)
                    currObj[pathArr[i]] = {}
                currObj = currObj[pathArr[i]]
            }
            currObj[pathArr[pathArr.length - 1]] = obj[key]
        }
    }
    return newObj;
}

const obj = {
    "level1.key1": "value1",
    "level1.key2.level2_key1": "value2",
    "level1.key2.level2_key2.level3_key1": "value3",
    "level1.key2.level2_key2.level3_key2.level4_key1": "value4"
}
console.log(deflatten(obj));
const expectedAns = {
    "level1": {
        "key1": "value1",
        "key2": {
            "level2_key1": "value2",
            "level2_key2": {
                "level3_key1": "value3",
                "level3_key2": {
                    "level4_key1": "value4"
                }
            }
        }
    }
}