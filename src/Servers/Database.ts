import PermissionType from "./PermissionType";

interface DatabaseItem{
    email : string
    password : string
    permission : PermissionType
}

const Database : DatabaseItem[] = [{
    email: "marcelo@hotmail.com",
    password: "123",
    permission: PermissionType.ADMIN
},{
    email: "pavani@hotmail.com",
    password: "321",
    permission: PermissionType.USER
},{
    email: "lachowski@hotmail.com",
    password: "333",
    permission: PermissionType.USER
}];

export default Database;