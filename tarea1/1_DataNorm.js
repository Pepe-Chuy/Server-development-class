function NormalizeUsers(array) {
    return array.reduce((counter, current) => {
        const {id, name, roles} = current;

        if (!counter[id]) {
            // if the user do not exist yet, we create it
            counter[id] = {
                id,
                name,
                roles:[...roles]
            };
            // if it already exists we just update it
        } else {
            counter[id].roles = [
                ...new Set([...counter[id].roles, ...roles])
            ];
        }

        return counter;
    },{});
}



const input = [
  { id: 1, name: "Ana", roles: ["admin", "editor"] },
  { id: 2, name: "Luis", roles: ["editor"] },
  { id: 1, name: "Ana", roles: ["viewer"] }
];

const result = NormalizeUsers(input);
console.log(result);
