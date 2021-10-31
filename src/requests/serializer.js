import { get, map, reduce, set } from "lodash";

export default function serializer(data, filters) {
  let item 
  let serialize ;
  map(filters, (filter) => {
    item = get(data,filter.key)
    serialize = reduce(item, (result, value, key) => {
      let index = get(value,filter.index)
      result[`${index}`] = value
      return result;
    }, {})
    set(data,filter.key,serialize)
  })
  return data;
}