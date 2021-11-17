import Dexie from 'dexie';
import { useLiveQuery } from "dexie-react-hooks";

const db = new Dexie("Teehub3");
db.version(1).stores(
    { indexedUsers: "++user_id, user_name, password, first_name, sur_name, birthday, is_active" }
)

export const usersIndexedDB = () => {
    const list = new Promise ((resolve, reject) => {
        if (db.indexedUsers) resolve(db.indexedUsers.toArray())
        reject ({
            status: 400,
            message: 'no users'
        })
    })
    return {
        get : list,
        post : async(user) => await db.indexedUsers.add(user),
        dlt: async(id) => await db.indexedUsers.delete(id),
        update: async(id, body) => await db.indexedUsers.update(id, body)
    }
}
