// eslint-disable-next-line no-unused-vars
import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint("https://api2.darklordbazz.com/v1");
client.setProject("ShottyGamingAPI");

export var api;
//api.account = new Account(client);

const db = new Databases(client, "ShottyGamingDB");

api.db.staff = db.listDocuments("staffStats");
api.db.servers = db.listDocuments("62bf0ad0c976f6074871");
api.db.posts = db.listDocuments("posts");
