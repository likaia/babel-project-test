// JSON数据归类
import {compose, prop, groupBy, map, concat, pluck, flatten, toPairs, zipObj} from "ramda";

const JSONClassify = compose(map(zipObj(['name', 'children']) ) , toPairs, map(pluck('children') ) , groupBy(prop("name") ), map(({ name, ...rest }) => ({ name, children: [rest] })))

const data = [
    {
        "name": "李四",
        "title": "鸡腿",
        "bookingUnit": "4",
        "measUnit": "",
        "unitPrice": "5",
        "totalPrice": "20"
    },
    {
        "name": "张三",
        "title": "牛奶",
        "bookingUnit": "5",
        "measUnit": "",
        "unitPrice": "10",
        "totalPrice": "50"
    },
    {
        "name": "李四",
        "title": "口蘑",
        "bookingUnit": "3",
        "measUnit": "",
        "unitPrice": "4",
        "totalPrice": "12"
    },
    {
        "name": "王五",
        "title": "蘑菇",
        "bookingUnit": "3",
        "measUnit": "",
        "unitPrice": "4",
        "totalPrice": "12"
    },
    {
        "name": "王五",
        "title": "牛肉",
        "bookingUnit": "13",
        "measUnit": "",
        "unitPrice": "14",
        "totalPrice": "112"
    }
]

console.log(JSONClassify(data));

/* 上述代码等于这里
const JSONClassify = compose(
    map(zipObj(["name", "children"])),
    toPairs,
    map(flatten),
    map(pluck("children")),
    groupBy(prop("name")),
    map(({name, ...rest}) => ({name, children: [rest]}))
);
*/

