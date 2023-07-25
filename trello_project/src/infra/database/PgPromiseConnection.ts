import pgp from "pg-promise";
import Connection from "./Connection";

export default class PgPromisseConnection implements Connection {
  connection: any;

  constructor() {
    this.connection = pgp()("postgresql://postgres:admin@localhost:5432/postgres");
  }
  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }
  close(): Promise<void> {
    return this.connection.$pool.end();
  }
}